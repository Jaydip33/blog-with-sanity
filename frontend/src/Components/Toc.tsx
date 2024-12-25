import Link from "next/link";
import { nestHeadings } from "./utils/nestHeadings";
import { Headings, TreeNode } from "@/types";
import { cn } from "@/lib/utilities/cn";

export function RenderToc({
    elements,
    level = 1,
}: {
    elements: TreeNode[];
    level?: number;
}) {
    return (
        <ul
            className={cn("space-y-2 text-sm font-semibold", {
                "ml-4 list-disc space-y-1 font-normal": level > 1,
                "space-y-3.5 border-l pl-4": level === 1,
            })}
        >
            {elements.map((el) => (
                <li
                    key={el.text}
                    className={cn({
                        "[&:first-child]:mt-2": level > 1,
                    })}
                >
                    <Link
                        href={`#${el.slug}`}
                        className="hover:underline hover:underline-offset-4"
                    >
                        {el.text}
                    </Link>
                    {el.children && (
                        <RenderToc elements={el.children} level={level + 1} />
                    )}
                </li>
            ))}
        </ul>
    );
}

export function Toc({
    headings,
    title,
}: {
    headings: Headings;
    title?: string;
}) {
    return (
        <section className="flex max-w-sm flex-col">
            <h2 className="z-0 mb-4 pb-1.5 font-bold md:sticky md:top-0">
                {title ?? "Content"}
            </h2>
            <nav className="flex gap-4">
                <RenderToc elements={nestHeadings(headings)} />
            </nav>
        </section>
    );
}
