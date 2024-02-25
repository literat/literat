import { getAllPosts } from '@/lib/services/posts';
import { overpass } from '@/ui/fonts';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog',
};

export default function BlogPage() {
  const allPosts = getAllPosts();

  console.log(allPosts);

  return (
    <div>
      <div
        className={overpass.className}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {allPosts.map((post) => {
          const { title, slug, } = post;

          return (
            <div key={slug} style={{ marginBottom: '1rem' }}>
              <Link data-testid={`${slug}-link`} href={`/blog/${slug}`}>
                {title}
              </Link>
            </div>
          );
        })}
        <div>
          <Link href="/blog/tags">Browse by Tag</Link>
        </div>
      </div>
    </div>
  );
};
