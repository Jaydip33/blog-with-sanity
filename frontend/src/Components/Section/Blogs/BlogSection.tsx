import { BlogProps } from "@/types";
import Blogs from "./Blogs";

const BlogSection = ({ data }: { data: BlogProps[] }) => {
    return (
        <>
            {data?.map((item, index) => {
                switch (item._type) {
                    case "blogSection":
                        return <Blogs key={index} {...item} />;
                    default:
                        return null;
                }
            })}
        </>
    );
};

export default BlogSection;
