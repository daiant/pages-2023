import fs from 'fs';
import path from 'path';


// IMPORTANT
// THIS CODE IS DESIGNED TO WORK WHEN A DB IS IMPLEMENTED
// RIGHT NOW IS ASYNC EVEN THO ITS NOT NEEDED

export type PostData = {
    id: string,
    data: string,
    created_at: string,
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

    return new Promise(resolve =>
        resolve({
            id: filename,
            data: response,
            created_at: new Date().toLocaleString(),
        })
    )
}