import PostDetails from "@/Components/PostDetails";
import { getAllQuery, getPostsById } from "@/lib/sanityFetch";
import { Post, SlugItem } from "@/types";

export async function generateStaticParams() {
    const slugs: SlugItem[] = (await getAllQuery()) || [];

    const slugRoutes = slugs?.map((item) => item?.slug);

    return slugRoutes?.map((slug) => ({
        slug,
    }));
}

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


