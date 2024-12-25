import React from "react";
import Hero from "./Hero";
import HomeBlogHighlightSection from "./HomeBlogHighlightSection";
import HomeBlogSection from "./HomeBlogSection";
import { Content } from "@/types";

interface HomeSectionProps {
    data: Content[];
}

const HomeSection = ({ data }: HomeSectionProps) => {
    return (
        <>
            {data?.map((item, index: number) => {
                switch (item._type) {
                    case "hero":
                        return <Hero key={index} {...item} />;
                    case "blogHighlight":
                        const blogImage = Array.isArray(item.blogImage)
                            ? item.blogImage
                            : [{ asset: item.blogImage?.asset }];
                        return (
                            <HomeBlogHighlightSection key={index} blogImage={blogImage} />
                        );
                    case "homeBlogSection":
                        return <HomeBlogSection key={index} {...item} />;
                    default:
                        return null;
                }
            })}
        </>
    );
};

export default HomeSection;
