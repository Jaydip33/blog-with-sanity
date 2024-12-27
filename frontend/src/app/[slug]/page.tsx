import Sections from "@/Components/Sections";
import { getPageData } from "@/lib/sanityFetch";

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const slug = (await params)?.slug;

    const pageData = await getPageData(slug);
    console.log(pageData);


    return (
        <div className="text-3xl text-black flex justify-center min-h-screen items-center">
            <Sections items={pageData} slug={slug} />
        </div>
    );
}
