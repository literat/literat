import { getBaseUrl } from '../getBaseUrl';

describe('getBaseURL', () => {
  it('should return localhost when no url in env is set', () => {
    expect(getBaseUrl()).toEqual('http://localhost:8000');
  });

  it('should return url from process.env when it is set', () => {
    process.env.GATSBY_URL = 'https://literat.dev';

    expect(getBaseUrl()).toEqual('https://literat.dev');
  });
});
