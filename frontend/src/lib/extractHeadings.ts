import { Heading } from "@/types";
import slugify from "slugify";

interface Block {
    _type: string;
    style: string;
    children: { _type: string; text: string; marks?: string[] }[];
}

export const extractHeadings = (body: Block[]): Heading[] => {
    return body
        .filter(
            (block) =>
                block?._type === "block" &&
                block?.style &&
                block?.style?.startsWith("h")
        )
        .map((block) => {
            const headingText = block?.children
                .map((child) => {
                    let text = child?.text || "";
                    if (child?.marks) {
                        child?.marks?.forEach((mark) => {
                            if (mark === "strong") text = `${text}`;
                            else if (mark === "em") text = `${text}`;
                        });
                    }
                    return text;
                })
                .join(" ");

            const headingId = slugify(headingText, { lower: true, strict: true });

            return { text: headingText, level: block?.style, id: headingId };
        });
};
