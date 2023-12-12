import client from "@/apollo-client";
import { ApolloQueryResult, gql } from "@apollo/client";

interface ICategory {
    name: string;
    url_key: string;
}

export interface ICategories {
    categories: {
        items: [
            {
                children: ICategory[];
            }
        ];
    };
}

export async function GetCategories() {
    const { data }: ApolloQueryResult<ICategories> = await client.query({
        query: gql`
            query GetCategories {
                categories {
                    items {
                        children {
                            name
                            url_key
                            image
                        }
                    }
                }
            }
        `,
        fetchPolicy: "no-cache",
    });
    return data;
}
