"use client";

import { urlFor } from "@/lib/imageUrlBuilder";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { format } from "date-fns";
import { BlogProps } from "@/types";
import { useState } from "react";
import InfiniteScroll from 'react-infinite-scroll-component';

const Blogs = (item: BlogProps) => {
    const { post, title, button } = item || {};
    const router = useRouter();
    const [items, setItems] = useState(post.slice(0, 6) || []);
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(2);

    const formatDate = (date: string) => {
        return format(new Date(date), "MMM dd, yyyy");
    };

    const handleNavigate = (id: string) => {
        router.push(`/blog/${id}`);
    };

    const fetchMoreData = () => {
        setTimeout(() => {
            const newPosts = post.slice(page * 3, (page + 1) * 3);
            if (newPosts.length > 0) {
                setItems((prevItems) => [...prevItems, ...newPosts]);
                setPage(page + 1);
            } else {
                setHasMore(false);
            }
        }, 500);
    };

    return (
        <section className="py-16 bg-gradient-to-r from-blue-50 via-white to-blue-50">
            <div className="container mx-auto px-6 lg:px-12">
                <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-16">
                    {title}
                </h2>

                <InfiniteScroll
                    dataLength={items.length}
                    next={fetchMoreData}
                    hasMore={hasMore}
                    loader={<h4 className="text-center my-4 text-4xl">Loading...</h4>}
                    endMessage={
                        <p className="text-center my-4 text-4xl">No more blogs to show</p>
                    }
                    scrollThreshold={0.9}
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                        {items.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:scale-105 hover:translate-y-1 cursor-pointer"
                                    onClick={() => handleNavigate(item?.slug?.current)}
                                >
                                    <Image
                                        src={
                                            item?.mainImage?.asset
                                                ? urlFor(item?.mainImage?.asset).url()
                                                : ""
                                        }
                                        alt={item?.title}
                                        className="w-full h-48 object-cover rounded-md mb-6"
                                        width={300}
                                        height={200}
                                    />
                                    <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                                        {item?.title}
                                    </h3>
                                    <p className="text-gray-600 text-base mb-6 line-clamp-2">
                                        {item?.description}
                                    </p>

                                    {item?.author && (
                                        <div className="flex items-center space-x-3 mb-6">
                                            <div>
                                                <p className="text-gray-800 font-semibold text-sm">
                                                    by {item?.author?.name}
                                                </p>
                                                <p className="text-gray-500 text-xs">
                                                    {formatDate(item?.author?._createdAt)}
                                                </p>
                                            </div>
                                        </div>
                                    )}

                                    <button className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300 font-medium">
                                        {button}
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                </InfiniteScroll>
            </div>
        </section>
    );
};

export default Blogs;
