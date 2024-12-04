import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation'; // 处理 404 页面

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), 'src/content'));
  return files.map((file) => ({ slug: file.replace('.md', '') }));
}

async function getArticle(slug: string) {
  try {
    const filePath = path.join(process.cwd(), 'src/content', `${slug}.md`);
    const content = fs.readFileSync(filePath, 'utf-8');
    return content;
  } catch (e) {
    return null;
  }
}

export default async function Article({ params }: { params: { slug: string } }) {
  const articleContent = await getArticle(params.slug);

  if (!articleContent) {
    notFound();
  }

  return (
    <div>
      <h1>{params.slug.replace('-', ' ').toUpperCase()}</h1>
      <p>{articleContent}</p>
    </div>
  );
}