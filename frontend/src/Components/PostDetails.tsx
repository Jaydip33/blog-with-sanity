"use client";

import { urlFor } from "@/lib/imageUrlBuilder";
import { Post } from "@/types";
import {
    PortableText,
    PortableTextReactComponents,
    toPlainText,
} from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import slugify from "slugify";
import { Toc } from "./Toc";

type PostDetailsProps = {
    data: Post;
};

const PostDetails = ({ data }: PostDetailsProps) => {
    const { title, mainImage, body, headings = [] } = data || {};

    const myPortableTextComponents: Partial<PortableTextReactComponents> = {
        block: {
            h1: ({ children, value }) => {
                const slug = slugify(toPlainText(value));
                return (
                    <h1
                        id={slug}
                        className="text-2xl mb-6 sm:text-6xl text-gray-900 tracking-wide"
                    >
                        {children}
                    </h1>
                );
            },
            h2: ({ children, value }) => {
                const slug = slugify(toPlainText(value));
                return (
                    <h2
                        id={slug}
                        className="text-xl mb-4 sm:text-5xl text-gray-900 tracking-wide"
                    >
                        {children}
                    </h2>
                );
            },
            h3: ({ children, value }) => {
                const slug = slugify(toPlainText(value));
                return (
                    <h3
                        id={slug}
                        className="text-lg mb-4 sm:text-4xl text-gray-800 tracking-wide"
                    >
                        {children}
                    </h3>
                );
            },
            h4: ({ children, value }) => {
                const slug = slugify(toPlainText(value));
                return (
                    <h4
                        id={slug}
                        className="text-lg mb-4 sm:text-3xl text-gray-800 tracking-wide"
                    >
                        {children}
                    </h4>
                );
            },
            normal: ({ children }) => (
                <p className="mb-4 text-lg sm:text-xl text-gray-800 leading-relaxed">
                    {children}
                </p>
            ),
        },
        types: {
            image: ({ value }) => {
                const imageUrl = urlFor(value?.asset).url();
                return (
                    <div className="flex justify-center my-8">
                        <Image
                            src={imageUrl || ""}
                            alt="Post image"
                            className="object-cover rounded-xl shadow-xl hover:scale-105 transition-all duration-500 ease-in-out"
                            width={800}
                            height={400}
                        />
                    </div>
                );
            },
        },
        marks: {
            strong: ({ children }) => (
                <strong className="font-bold text-gray-900">{children}</strong>
            ),
            em: ({ children }) => (
                <em className="italic text-gray-700">{children}</em>
            ),
            link: ({ children, value }) => (
                <Link
                    href={value?.href || "#"}
                    className="text-blue-500 hover:text-blue-700 underline"
                >
                    {children}
                </Link>
            ),
        },
    };

    const imageUrl = mainImage?.asset ? urlFor(mainImage?.asset).url() : null;

    const bodyContent = Array.isArray(body)
        ? body
        : body
            ? [
                {
                    _type: "block",
                    style: "normal",
                    children: [{ _type: "span", text: body }],
                },
            ]
            : [];

    return (
        <div className="min-h-screen bg-gray-50 text-gray-900">
            <main className="container mx-auto p-4 sm:p-6 lg:p-8 flex">
                <div className="lg:col-span-2 bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-y-auto lg:w-2/3">
                    <div className="mb-8">
                        {imageUrl && (
                            <div className="mb-6 relative rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                                <Image
                                    src={imageUrl || ""}
                                    alt={title || "Post image"}
                                    className="object-cover w-full h-72 sm:h-96 lg:h-[400px] transition-transform duration-500 transform hover:scale-105"
                                    width={1200}
                                    height={800}
                                />
                                {title && (
                                    <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 text-white text-lg sm:text-xl font-bold p-3 rounded-lg shadow-md">
                                        {title}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    {body ? (
                        <div className="text-gray-700 mb-6 leading-relaxed space-y-6">
                            <PortableText
                                value={bodyContent}
                                components={myPortableTextComponents}
                            />
                        </div>
                    ) : (
                        <p className="text-gray-600">No content available.</p>
                    )}
                </div>

                <div className="h-auto lg:sticky lg:top-20 lg:w-1/3">
                    <div className="bg-gradient-to-tl from-indigo-600 via-purple-700 to-pink-600 text-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                        <ul className="space-y-4">
                            {headings.length > 0 ? (
                                <Toc headings={headings} title="Post content" />
                            ) : (
                                <p>No headings available.</p>
                            )}
                        </ul>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default PostDetails;
