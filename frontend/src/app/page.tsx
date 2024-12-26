import HomeSection from "@/Components/Section/Home/Home";
import { getPageData } from "@/lib/sanityFetch";

export default async function Home() {
  const pageData = await getPageData("/");

  return (
    <>
      {pageData?.pagebuilder?.map((page, index) => (
        <HomeSection
          key={page?._id || index}
          data={Array.isArray(page?.content) ? page?.content : [page?.content]}
        />
      ))}
    </>
  );
}
