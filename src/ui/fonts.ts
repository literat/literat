import { Fira_Code, Overpass } from 'next/font/google';
// import { Fira_Code, Overpass, Overpass_Mono } from 'next/font/google';

export const fira = Fira_Code({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-fira-code',
});

export const overpass = Overpass({
  subsets: ['latin'],
  weight: ['700', '800', '900'],
  display: 'swap',
  variable: '--font-overpass',
});
export const overpassItalic = Overpass({
  subsets: ['latin'],
  weight: ['900'],
  display: 'swap',
  style: 'italic',
  variable: '--font-overpass-italic',
});

// export const overpassMono = Overpass_Mono({ subsets: ['latin'], weight: ['300'], display: 'optional' });
