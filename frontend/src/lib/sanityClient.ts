import { createClient } from "@sanity/client";

const client = createClient({
    projectId: "z2ush6nj",
    dataset: "production",
    useCdn: true,
});

export default client;
