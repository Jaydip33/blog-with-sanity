"use client";

import { urlFor } from "@/lib/imageUrlBuilder";
import Image from "next/image";
import React from "react";
import { format } from "date-fns";
import { useRouter } from "next/navigation";
import { HomeBlogSectionProps, Post } from "@/types";

const HomeBlogSection = (item: HomeBlogSectionProps) => {

    const { title, button, post } = item || {}
    const router = useRouter();

    const formatDate = (date: string) => {
        return format(new Date(date), "MMM dd, yyyy");
    };

    const handleNavigate = (id: string) => {
        router.push(`/blog/${id}`);
    };

    return (
        <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-semibold text-center text-gray-900 mb-12">
                    {title}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {post?.map((item: Post, index: number) => {
                        return (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                                onClick={() => handleNavigate(item?.slug?.current)}
                            >
                                <Image
                                    src={
                                        item?.mainImage?.asset
                                            ? urlFor(item?.mainImage?.asset).url()
                                            : ""
                                    }
                                    alt={item?.title}
                                    className="w-full h-48 object-cover rounded-md mb-4"
                                    width={300}
                                    height={200}
                                />
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    {item?.title}
                                </h3>
                                <p className="text-gray-600 text-base mb-6 line-clamp-2">
                                    {item?.description}
                                </p>

                                {item?.author && (
                                    <div className="flex items-center">
                                        <div>
                                            <p className="text-black font-medium text-sm">
                                                by {item?.author?.name}
                                            </p>
                                        </div>
                                    </div>
                                )}
                                <p className="text-gray-600 text-xs mb-4">
                                    {formatDate(item?.publishedAt)}
                                </p>

                                <button className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                                    {button}
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default HomeBlogSection;
