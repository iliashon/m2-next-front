"use client";

import { gql, useQuery } from "@apollo/client";

const GET_BASE_URL = gql`
    query GetUrl {
        storeConfig {
            base_url
        }
    }
`;

export default function Home() {
    const { loading, error, data } = useQuery(GET_BASE_URL);

    console.log(loading ? "Loading..." : data?.storeConfig);

    return <h1>{loading ? "Loading..." : "Done"}</h1>;
}
