import ContentHeader from "@/components/Content/ContentHeader";
import HeroImage from "@/components/Content/HeroImage";
import H from "@/components/mdx/Headings";
import { getAllPosts, getPostBySlug } from "@/lib/services/posts";
import htmlReactParser from "html-react-parser";
import { notFound } from "next/navigation";
import markdownToHtml from "../../../lib/markdownToHtml";

export default async function PostPage({ params }: Params) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  // const editUrl = `https://github.com/literat/literat/tree/master/src/${post.fileAbsolutePath.split('/src/')[1]}`;
  const content = await markdownToHtml(post.content || "");
console.log(post);
  return (
    <article>
      <ContentHeader>
        <H>{post.title}</H>
        {post.excerpt && <p>{post.excerpt}</p>}
        {post.image?.publicURL && <HeroImage image={post.image} title={post.title} />}
        {/* <PostMeta post={post} editUrl={editUrl} /> */}
      </ContentHeader>
      {htmlReactParser(content)}
      <footer>
        {/* <EditDialog editUrl={editUrl} /> */}
        {/* <ContentNav previous={previous} next={next} /> */}
      </footer>
    </article>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

// export function generateMetadata({ params }: Params): Metadata {
//   const post = getPostBySlug(params.slug);

//   if (!post) {
//     return notFound();
//   }

//   const title = `${post.title}`;

//   return {
//     openGraph: {
//       title,
//       images: [post.ogImage.url],
//     },
//   };
// }

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
