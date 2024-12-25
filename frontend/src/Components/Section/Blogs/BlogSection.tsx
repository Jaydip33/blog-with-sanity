import Blogs from "./Blogs";
import { BlogProps } from "@/types";

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
