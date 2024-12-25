import { Headings, TreeNode } from "@/types";
import slugify from "slugify";

export function nestHeadings(blocks: Headings): TreeNode[] {
    const treeNodes: TreeNode[] = [];
    const stack: { node: TreeNode; level: number }[] = [];

    blocks.forEach((block) => {
        if (!block.style || !block.children) return;

        const level = parseInt(block.style.replace("h", ""), 10);

        const text =
            block.children.map((child) => child.text || "").join(" ") || "Untitled";

        const treeNode: TreeNode = {
            slug: slugify(text),
            text,
            children: [],
        };

        while (stack.length > 0) {
            const topStack = stack[stack.length - 1];

            if (topStack && topStack.level < level) break;

            stack.pop();
        }

        if (stack.length > 0) {
            const parentNode = stack[stack.length - 1]?.node;
            if (parentNode && !parentNode.children) {
                parentNode.children = [];
            }
            parentNode?.children?.push(treeNode);
        } else {
            treeNodes.push(treeNode);
        }

        stack.push({ node: treeNode, level });
    });

    return treeNodes;
}
