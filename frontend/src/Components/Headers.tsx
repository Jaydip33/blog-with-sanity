"use client";

import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/lib/imageUrlBuilder";
import { HeaderProps, NavItem } from "@/types";
import { useState } from "react";
import { SanityImageAssetDocument } from "next-sanity";

const Header = ({ data }: HeaderProps) => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="bg-gray-800 shadow-md w-full z-10">
            <div className="max-w-full mx-auto px-4 sm:px-10 lg:px-20">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center space-x-2">
                        <Link href="/" className="flex items-center">
                            {data?.logo?.image?.asset && (
                                <Image
                                    src={
                                        urlFor(
                                            data?.logo?.image?.asset as SanityImageAssetDocument
                                        ).url() || ""
                                    }
                                    alt="Blogify Logo"
                                    className="h-10 w-32 object-cover mix-blend-multiply"
                                    width={100}
                                    height={100}
                                />
                            )}
                        </Link>
                    </div>

                    <nav className="hidden md:flex space-x-8 text-xl">
                        {data?.navItem?.navItem?.map((item: NavItem, index: number) => {
                            return (
                                <Link
                                    key={index}
                                    href={item?.slug || "#"}
                                    className="text-gray-200 hover:text-gray-200"
                                >
                                    {item?.title}
                                </Link>
                            );
                        })}
                    </nav>

                    <div className="md:hidden">
                        <button
                            onClick={toggleMobileMenu}
                            className="text-gray-200 hover:text-gray-900 focus:outline-none"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                {isMobileMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className="md:hidden bg-gray-800 shadow-md">
                    <nav className="space-y-2 px-4 py-4">
                        {data?.navItem?.navItem?.map((item: NavItem, index: number) => {
                            return (
                                <Link
                                    key={index}
                                    href={item?.slug || "#"}
                                    className="block text-gray-200 hover:text-gray-900"
                                >
                                    {item?.title}
                                </Link>
                            );
                        })}
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
