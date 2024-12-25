import PostDetails from "@/Components/PostDetails";
import { getPostsById } from "@/lib/sanityFetch";
import { Post } from "@/types";

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const postdata = await getPostsById(slug);

    return (
        <>
            <PostDetails data={postdata as Post} />
        </>
    );
}
