import fs from 'fs';
import matter from 'gray-matter';
import { BlogPostData } from './types/global';

export const getMarkdownMetaData = () : BlogPostData[] => {
    const folder = 'posts/';
    const files = fs.readdirSync(folder);

    let slugs : BlogPostData[] = [];

    files.map((file)=> {
        const fileData = fs.readFileSync( `posts/${file}`, 'utf8' );
        const matterRes = matter(fileData);

        if(file.endsWith('.md')) {
            slugs = [...slugs, {
                title: matterRes.data.title,
                subtitle: matterRes.data.subtitle,
                slug:  file.replace('.md', ''),
                category: matterRes.data.category,
                date: matterRes.data.date
            }];
        }
    });

    return slugs;
};