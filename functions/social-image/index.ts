const chrome = require('chrome-aws-lambda');
const wait = require('waait');

const cached = new Map();

const exePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

async function getOptions(isDev) {
  return isDev
    ? {
        product: 'chrome',
        args: [],
        executablePath: exePath,
        headless: true,
      }
    : {
        product: 'chrome',
        args: [
          ...chrome.args,
          '--disable-features=AudioServiceOutOfProcess',
          '--disable-gpu',
          '--disable-software-rasterize',
          '--disable-extensions',
          '--no-sandbox',
          '--disabled-setupid-sandbox',
        ],
        executablePath: await chrome.executablePath,
        headless: chrome.headless,
      };
}

async function getScreenshot(url, isDev) {
  // first check if this value has been cached
  const cachedImage = cached.get(url);
  if (cachedImage) {
    return cachedImage;
  }

  const options = await getOptions(isDev);
  const browser = await chrome.puppeteer.launch(options);
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1.5 });
  await page.goto(url);
  await wait(1000);
  const buffer = await page.screenshot({ type: 'png' });
  const base64Image = buffer.toString('base64');
  cached.set(url, base64Image);

  return base64Image;
}

// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
exports.handler = async (event, context) => {
  const qs = new URLSearchParams(event.queryStringParameters);
  const thumbnailUrl = `${process.env.URL || `http://localhost:8888`}/thumbnail?${qs.toString()}`;
  console.log('Thumbnail url:', thumbnailUrl);

  const photoBuffer = await getScreenshot(
    thumbnailUrl,
    // Here we need to pass a boolean to say if we are on the server. Netlify has a bug where process.env.NETLIFY is undefined in functions so I'm using one of the only vars I can find
    // !process.env.NETLIFY
    process.env.URL.includes('http://localhost'),
  );

  return {
    statusCode: 200,
    headers: {
      'content-type': 'image/png',
    },
    body: photoBuffer,
    isBase64Encoded: true,
  };
};
