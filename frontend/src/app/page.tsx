import HomeSection from "@/Components/Section/Home/Home";
import { getPageData } from "@/lib/sanityFetch";
import { Content } from "@/types";

export default async function Home() {
  const pageData = await getPageData("/");

  return (
    <>
      {pageData?.pagebuilder?.map((page) => {
        const data: Content[] = Array.isArray(page?.content)
          ? page?.content
          : [page?.content];
        return <HomeSection key={page?._id} data={data} />;
      })}
    </>
  );
}
