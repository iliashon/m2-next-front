import client from "@/apollo-client";
import { ApolloQueryResult, gql } from "@apollo/client";
import { SimpleProduct } from "../Types/TSimpleProduct";

export async function getSimpleProduct(url_key: string) {
    const { data }: ApolloQueryResult<SimpleProduct> = await client.query({
        query: gql`
            query GetSimpleProduct($url_key: [String]) {
                products(filter: { url_key: { in: $url_key } }) {
                    items {
                        name
                        description {
                            html
                        }
                        url_key
                        image {
                            url
                        }
                        sku
                        stock_status
                        price_range {
                            maximum_price {
                                regular_price {
                                    value
                                    currency
                                }
                            }
                        }
                    }
                }
            }
        `,
        variables: {
            url_key,
        },
        fetchPolicy: "no-cache",
    });
    return data;
}
