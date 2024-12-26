import { SanityImageAssetDocument } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import client from "./sanityClient";

const builder = imageUrlBuilder(client);

export const urlFor = (source: SanityImageAssetDocument) =>
    builder.image(source);
