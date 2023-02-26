import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';


// IMPORTANT
// THIS CODE IS DESIGNED TO WORK WHEN A DB IS IMPLEMENTED
// RIGHT NOW IS ASYNC EVEN THO ITS NOT NEEDED
export type AggregatorRoot = {
    id: string
}
export type PostHeaderData = {
    tags: Array<string>,
    title: string,
    description: string,
    created_at: string,
}
export interface PostData extends AggregatorRoot, PostHeaderData {
    content: string,
}
const FILE_PATH = '/posts/';
const DB_PATH = "/posts.json";

export default async function getPosts(max: number): Promise<Array<PostData>> {
    const posts = await fetchDB(max);
    return Promise.all(posts.map(async (post: string) => {
        return await getPostData(post);
    }))
}

async function fetchDB(max: number): Promise<Array<string>> {
    const response = fs.readFileSync(path.join(process.cwd(), DB_PATH));
    const responseJSON = JSON.parse(response.toString())
    return new Promise(resolve => {
        const posts: Array<string> = Object.values(responseJSON);
        if (posts.length > max) posts.slice(max);
        resolve(posts);
    })
}

async function getPostData(filename: string): Promise<PostData> {
    const response = fs.readFileSync(path.join(process.cwd(), FILE_PATH, filename), 'utf-8');
    const matterResponse = matter(response);
    return new Promise(resolve => {
        const post: PostData = {
            id: filename,
            title: matterResponse.data.title || '',
            description: matterResponse.data.description || '',
            tags: matterResponse.data.tags ? matterResponse.data.tags.split(',') : [],
            content: matterResponse.content || '',
            created_at: matterResponse.data.date || new Date().toLocaleDateString(),
        }
        resolve(post)
    })
}