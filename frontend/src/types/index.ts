import { SanityImageAssetDocument } from "next-sanity";

export interface Content {
    _type: string;
    title: string;
    body?: string;
    name?: string;
    description: string;
    buttonText: string;
    heroImage: { asset: SanityImageAssetDocument | null };
    blogImage: { asset: SanityImageAssetDocument | null };
    button: string;
    post: Post[];
}

export interface NavItem {
    title: string;
    slug: string;
}

export interface Logo {
    image: {
        asset: SanityImageAssetDocument | null;
    };
}

export interface HeaderData {
    logo: Logo;
    navItem: {
        navItem: NavItem[];
    };
}

export interface HeaderProps {
    data: HeaderData;
}

export interface Author {
    _id: string;
    name: string;
    slug: string;
    image: string;
    bio: string;
    _createdAt: string;
}

export interface Post {
    slug: { current: string };
    title: string;
    metadata: object;
    description: string;
    author: Author;
    mainImage: {
        asset: SanityImageAssetDocument | null;
    };
    publishedAt: string;
    body: string;
    headings?: { style: string; _key: string; children: { text: string }[] }[];
}

export interface PageData {
    settingsQuery: Settings;
    pagebuilder: PageBuilderItem[];
}

export interface Settings {
    header: HeaderData;
    footer: FooterData;
}

export interface SocialLink {
    _id: string;
    platform: string;
    url: {
        url: string;
    };
}

export interface FooterLink {
    _id: string;
    title: string;
    slug: string;
}

export interface ContactInfo {
    email: string;
    phone: string;
    address: string;
}

export interface FooterData {
    logo: Logo;
    footerLinks: {
        navItem: FooterLink[];
    };
    socialLinks: SocialLink[];
    contactInfo: ContactInfo;
    footerText: string;
}

export interface FooterProps {
    data: FooterData;
}

export interface PageBuilderItem {
    _type: string;
    _id: string;
    type: string;
    content: Content;
}

export interface HeroData {
    name?: string;
    description: string;
    buttonText: string;
    heroImage: {
        asset: SanityImageAssetDocument | null;
    };
}

export interface HomeBlogHighlightSectionProps {
    blogImage: {
        asset: SanityImageAssetDocument | null;
        title?: string;
    }[];
}

export interface HomeBlogSectionProps {
    title: string;
    body?: string;
    button: string;
    post: Post[];
}

export interface SectionsProps {
    items: PageData | null;
    slug: string;
}

export interface Heading {
    text: string;
    level: string;
}

export interface BlogProps {
    title: string;
    post: Array<{
        _id: string;
        title: string;
        description: string;
        slug: string;
        mainImage: {
            asset: SanityImageAssetDocument | null;
        };
        author: {
            name: string;
            _createdAt: string;
            _updatedAt: string;
        };
    }>;
    button: string;
    _type: string;
}

export type TreeNode = {
    text: string;
    slug: string;
    children?: TreeNode[];
};

export type Headings = {
    style: string;
    _key: string;
    children: { text: string }[];
}[];

export interface SlugItem {
    slug: string;
    data?: string;
}
