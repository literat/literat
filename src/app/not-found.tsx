import H from '@/components/mdx/Headings';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Here is not what are you looking for',
};

const NotFoundPage = () => (
  <>
    <H>Damn, eh!</H>
    <p>404.</p>
    <p>
      This page doesn't exist. If you think this is an error <Link href="/contact">contact me</Link>.
    </p>
  </>
);

export default NotFoundPage;
