import { getAllQuery } from "@/lib/sanityFetch";
import { SlugItem } from "@/types";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const slugs = (await getAllQuery()) || [];

    const postEntries: MetadataRoute.Sitemap = slugs?.map((item: SlugItem) => ({
        url: `${process.env.NEXT_PUBLIC_BASIC_URL}/blog/${item?.slug}`,
        lastModified: item?.publishedAt ? new Date(item?.publishedAt) : new Date(),
        changeFrequency: "daily",
        priority: item?.publishedAt ? 1 : 0.7,
    }));

    return [
        {
            url: `${process.env.NEXT_PUBLIC_BASIC_URL}`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.7,
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASIC_URL}/about`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.7,
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASIC_URL}/contact`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.7,
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASIC_URL}/blog`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.7,
        },
        ...postEntries,
    ];
}
