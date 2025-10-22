/**
 * Docs on the Netlify Functions
 * @see {@link https://docs.netlify.com/build/functions/get-started/?data-tab=TypeScript}
 */

import type { Context, Config } from '@netlify/functions';
// Switch to this, re: https://answers.netlify.com/t/netlify-function-with-puppeteer-breaks-if-i-make-any-changes/76924/8
import chrome from '@sparticuz/chromium';
import puppeteer from 'puppeteer-core';
import wait from 'waait';

export const config: Config = {
  // Configuring the function to only run on GET requests.
  method: 'GET',
};

const cached = new Map();

const exePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

async function getOptions(isDev: boolean) {
  if (isDev) {
    return {
      product: 'chrome',
      args: [],
      executablePath: exePath,
      headless: true,
    };
  }
  return {
    product: 'chrome',
    args: chrome.args,
    executablePath: await chrome.executablePath(),
    headless: chrome.headless,
  };
}

async function getScreenshot(url: string, isDev: boolean) {
  // first check if this value has been cached
  const cachedImage = cached.get(url);
  if (cachedImage) {
    return cachedImage;
  }

  const options = await getOptions(isDev);
  const browser = await puppeteer.launch(options);
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1.5 });
  await page.goto(url);
  await wait(1000);
  const buffer = await page.screenshot({ type: 'png' });
  const base64Image = buffer.toString('base64');
  cached.set(url, base64Image);

  return base64Image;
}

export default async (request: Request, context: Context) => {
  const thumbnailUrl = `${process.env.URL || `http://localhost:8000`}/thumbnail?${context.url.searchParams.toString()}`;
  console.log('Thumbnail url:', thumbnailUrl);

  const photoBuffer = await getScreenshot(
    thumbnailUrl,
    // Here we need to pass a boolean to say if we are on the server.
    // Netlify has a bug where process.env.NETLIFY is undefined in functions
    // so I'm using one of the only vars I can find
    // !process.env.NETLIFY
    process.env.URL?.includes('http://localhost') ?? false,
  );

  return new Response(Buffer.from(photoBuffer, 'base64'), {
    status: 200,
    headers: {
      'content-type': 'image/png',
    },
  });
};
