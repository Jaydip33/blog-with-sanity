import { QueryParams } from "sanity";
import { layoutprops } from "./queries";
import client from "./sanityClient";
import { PageData, Post, Settings } from "@/types";

export async function sanityFetch<QueryResponse>({
    query,
    qParams = {},
    tags,
}: {
    query: string;
    qParams?: QueryParams;
    tags: string[];
}): Promise<QueryResponse> {
    return client.fetch<QueryResponse>(query, qParams, {
        cache: "force-cache",
        next: { tags, revalidate: 0 },
    });
}

export const getPostsById = async (slug: string): Promise<Post | null> => {
    try {
        const data = await sanityFetch<Post>({
            query: layoutprops.postById,
            qParams: { slug },
            tags: ["post", "author", "category"],
        });

        return data;
    } catch (error) {
        console.error("Error fetching post by ID:", error);
        return null;
    }
};

export const getPageData = async (slug: string): Promise<PageData | null> => {
    try {
        const data = await sanityFetch<PageData>({
            query: layoutprops.pagequery,
            qParams: { slug },
            tags: ["post", "author", "category", "page"],
        });

        return data;
    } catch (error) {
        console.error("Error fetching page data:", error);
        return null;
    }
};

export const getSettingQuery = async (): Promise<Settings | null> => {
    try {
        const data = await sanityFetch<Settings>({
            query: layoutprops.settingsQuery,
            qParams: {},
            tags: ["post", "author", "category", "settings"],
        });

        return data;
    } catch (error) {
        console.error("Error fetching settings:", error);
        return null;
    }
};
