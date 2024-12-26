import { urlFor } from "@/lib/imageUrlBuilder";
import { FooterProps } from "@/types";
import { SanityImageAssetDocument } from "next-sanity";
import Image from "next/image";
import Link from "next/link";

const Footer = ({ data }: FooterProps) => {
    return (
        <footer className="bg-gray-800 text-gray-200 py-8">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="flex justify-center md:justify-start mb-4 md:mb-0">
                    <Image
                        src={
                            urlFor(
                                data?.logo?.image?.asset as SanityImageAssetDocument
                            ).url() || ""
                        }
                        alt="Blog App Logo"
                        className="w-40 mx-auto h-40 rounded-full"
                        width={100}
                        height={100}
                    />
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        {data?.footerLinks?.navItem?.map((link, index) => {
                            const linkKey = link?._id || link?.slug || link?.title || index;

                            return (
                                <li key={linkKey}>
                                    <Link href={link.slug || ""} className="hover:text-white">
                                        {link?.title}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                    <ul className="space-y-2">
                        {data?.socialLinks?.map((link, index: number) => {
                            return (
                                <li key={link?._id || index}>
                                    <a
                                        href={link?.url?.url || ""}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-white"
                                    >
                                        {link?.platform}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                    <p>
                        Email:{" "}
                        <a
                            href="mailto:info@blogapp.com"
                            className="text-gray-500 hover:text-white"
                        >
                            {data?.contactInfo?.email}
                        </a>
                    </p>
                    <p>Phone: {data?.contactInfo?.phone}</p>
                    <p>Address: {data?.contactInfo?.address}</p>
                </div>
            </div>

            <div className="mt-8 border-t border-gray-700 pt-4 text-center">
                <p className="text-sm">{data?.footerText}</p>
            </div>
        </footer>
    );
};

export default Footer;
