import { BlogProps, SectionsProps } from "@/types";
import Custom404 from "./Custom404";
import About from "./Section/About/About";
import BlogSection from "./Section/Blogs/BlogSection";

const Sections = async ({ items, slug }: SectionsProps) => {
    switch (slug) {
        case "about":
            return (
                <div>
                    <About />
                </div>
            );
        case "contact":
            return (
                <div>
                    <h1>Contact Us</h1>
                    <p>For inquiries, please reach out to us at contact@example.com.</p>
                </div>
            );
        case "blog":
            return (
                <div>
                    {Array.isArray(items?.pagebuilder) &&
                        items.pagebuilder.length > 0 &&
                        items.pagebuilder.map((page, index: number) => {
                            const data: BlogProps[] = Array.isArray(page?.content)
                                ? page.content
                                : [];
                            return <BlogSection key={index} data={data} />;
                        })}
                </div>
            );
        default:
            return <Custom404 />;
    }
};

export default Sections;
