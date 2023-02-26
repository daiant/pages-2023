import { getPostPaths, PostData, getPostData } from "@/lib/posts/post";
import { GetStaticPathsResult, GetStaticPropsContext } from "next";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export default function Article({ post }: { post: PostData }) {
    return <>
        <ReactMarkdown>
            {post.content}
        </ReactMarkdown>
    </>
}

export async function getStaticPaths() {
    const paths: GetStaticPathsResult = await getPostPaths();
    return paths;
}

export async function getStaticProps(context: GetStaticPropsContext) {
    if (!context.params?.slug) return { props: [{}] }
    const slug = Array.isArray(context.params.slug) ? context.params.slug[0] : context.params.slug;
    const post = await getPostData(slug);
    console.log(post)
    return {
        props: {
            post
        }
    }
}