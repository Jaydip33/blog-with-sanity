import { createClient } from "@sanity/client";

const client = createClient({
    projectId: "z2ush6nj",
    dataset: "production",
    useCdn: true,
    apiVersion: "2022-03-10",
});

export default client;
