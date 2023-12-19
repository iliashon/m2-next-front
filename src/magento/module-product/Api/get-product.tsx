import client from "@/apollo-client";
import { ApolloQueryResult, gql } from "@apollo/client";
import { TPageSimpleProduct } from "@/magento/Types/TPageSimpleProduct";

export async function getSimpleProduct(url_key: string) {
    const { data }: ApolloQueryResult<TPageSimpleProduct> = await client.query({
        query: gql`
            query GetSimpleProduct($url_key: [String]) {
                products(filter: { url_key: { in: $url_key } }) {
                    items {
                        name
                        sale
                        new
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
                                }
                                discount {
                                    amount_off
                                    percent_off
                                }
                                final_price {
                                    value
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
