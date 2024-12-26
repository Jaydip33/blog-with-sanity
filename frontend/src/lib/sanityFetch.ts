import { PageData, Post, Settings, SlugItem } from "@/types";
import { QueryParams } from "sanity";
import { layoutprops } from "./queries";
import client from "./sanityClient";

export async function sanityFetch<QueryResponse>({
    query,
    qParams = {},
    useCache = true,
}: {
    query: string;
    qParams?: QueryParams;
    useCache?: boolean;
}): Promise<QueryResponse> {
    const options = useCache
        ? { cache: "force-cache" as RequestCache }
        : { next: { revalidate: 0 } };

    return client.fetch<QueryResponse>(query, qParams, options);
}

export const getPostsById = async (slug: string): Promise<Post | null> => {
    try {
        const data = await sanityFetch<Post>({
            query: layoutprops.postById,
            qParams: { slug },
            useCache: true,
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
            useCache: true,
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
            useCache: true,
        });

        return data;
    } catch (error) {
        console.error("Error fetching settings:", error);
        return null;
    }
};

export const getAllQuery = async (): Promise<SlugItem[] | null> => {
    try {
        const data = await sanityFetch<SlugItem[]>({
            query: layoutprops.allPostQiery,
            qParams: {},
            useCache: true,
        });

        return data;
    } catch (error) {
        console.error("Error fetching settings:", error);
        return null;
    }
};
