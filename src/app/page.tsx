import { fira } from '@/ui/fonts';
import { Metadata } from 'next';
import H from '../components/mdx/Headings';

export const metadata: Metadata = {
  title: 'Fullstack Developer & Whitewater Kayaker & Scout',
};

export default function HomePage() {
  return (
    <div>
      <div
        className={fira.className}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <H as="h2">Hi, I am Literat.</H>
        <p>The Fullstack Developer from Czech republic 🇨🇿</p>
      </div>
    </div>
  );
}
