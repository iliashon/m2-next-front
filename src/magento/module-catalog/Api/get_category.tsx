import client from "@/apollo-client";
import { ICategories } from "@/magento/Types/TCategories";
import { ApolloQueryResult, gql } from "@apollo/client";

export async function GetCategory(url_key: string) {
    const { data }: ApolloQueryResult<ICategories> = await client.query({
        query: gql`
            query GetCategory($url_key: [String]) {
                categories(filters: { url_key: { in: $url_key } }) {
                    items {
                        name
                        url_key
                        image
                        uid
                    }
                }
            }
        `,
        fetchPolicy: "no-cache",
        variables: {
            url_key,
        },
    });
    return data;
}
