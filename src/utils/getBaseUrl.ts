export function getBaseUrl() {
  const url = process.env.GATSBY_URL;

  return !url || url === 'undefined' ? 'http://localhost:8000' : url;
}
