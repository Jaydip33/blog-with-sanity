import { urlFor } from "@/lib/imageUrlBuilder";
import { HomeBlogHighlightSectionProps } from "@/types";
import Image from "next/image";

const HomeBlogHighlightSection = ({
    blogImage,
}: HomeBlogHighlightSectionProps) => {
    return (
        <div className="flex flex-wrap justify-center items-center p-4 md:p-8">
            {blogImage?.map((blog, index) => {
                const imageUrl = blog?.asset ? urlFor(blog.asset).url() : "";
                return (
                    <div key={index} className="w-full max-w-4xl px-4 mb-8">
                        <Image
                            src={imageUrl}
                            alt={blog?.title || "Hero Image"}
                            className="object-cover rounded-lg shadow-lg"
                            width={200}
                            height={200}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default HomeBlogHighlightSection;
