import client from "@/apollo-client";
import { ApolloQueryResult, gql } from "@apollo/client";

interface ICategory {
    name: string;
    url_key: string;
}

export interface ICategories {
    categories: {
        items: ICategory[];
    };
}

export async function GetCategories() {
    const { data }: ApolloQueryResult<ICategories> = await client.query({
        query: gql`
            query GetCategories {
                categories(filters: { parent_id: { in: "47" } }) {
                    items {
                        name
                        url_key
                        image
                    }
                }
            }
        `,
        fetchPolicy: "no-cache",
    });
    return data;
}
