import { groq } from "next-sanity";

const customeImage = `
url,
metadata{
    dimensions{
    width,
    height
    }
  }
`;

const headerData = `
"header":header->{
    ...,
    "logo":logo.asset->{
    ${customeImage}
    },
    "navItem":navItem[]{...,
    "href":link->url,
    "label":link->label,
    "slug":link->slug
    },
  }`;

const footerData = `
  "footer":footer->{
    ...,
    "socialLinks":socialLinks[]{...},
    footerText,
    "contactInfo": contactInfo[]{...},
    "footerLinks":footerLinks[]{...},
    logo
  }`;

const postQiery = `*[_type == "post" ][0..5]{
  ...,
  "author":author->{
  ...
  }
}`;

const allPostQiery = `*[_type == "post" ][]{
  ...,
  "author":author->{
  ...
  }
}`;

const sections = `
  ...,
  (_type=="hero")=>{
    ...
  },
  (_type=="blogHighlight")=>{
    ...
  },
  (_type=="homeBlogSection")=>{
  ...,
  "post":${postQiery}
  },
  (_type=="blogSection")=>{
  ...,
  "post":${allPostQiery}
  },
`;

export const postById = groq`
  *[_type == "post" && slug.current == $slug][0]{
    ...,
    "headings": body[style in ["h1", "h2", "h3", "h4", "h5", "h6"]],
    "author": author->{
      _id,
      name,
      slug,
      image,
      bio
    },
    mainImage,
    publishedAt,
    body
  }
`;

export const pagebuilderProps = groq`
  "pagebuilder": pagebuilder[]-> {
    content[] {
      ${sections}
    },
    slug
  }
`;

export const settingsQuery = `*[_type == "settings"][0]{
  ${headerData},
  ${footerData}
} `;

export const pagequery = groq`
    * [_type == "page" && slug.current == $slug][0]{
    "settingsQuery":${settingsQuery},
      ${pagebuilderProps},
  }
`;

export const layoutprops = {
  settingsQuery,
  pagequery,
  postById,
};
