import { Post } from "@/interfaces/post";
import fs from "fs";
import matter from "gray-matter";
import path, { join } from "path";

const postsDirectory = join(process.cwd(), "src/posts");

export function getPostSlugs() {
  console.log(postsDirectory)
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string) {
  // const realSlug = slug.replace(/\.md[x]$/, "");
  const fullDirPath = join(postsDirectory, slug);
  const fileName = fs.readdirSync(fullDirPath).find(f => path.parse(f).name === 'index');
  const file = join(fullDirPath, fileName);
  const fileContents = fs.readFileSync(file, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug, content } as Post;
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
