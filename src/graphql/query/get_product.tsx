import client from "@/apollo-client";
import { ApolloQueryResult, gql } from "@apollo/client";

export async function getProduct(url_key: string) {
    const { data }: ApolloQueryResult<SimpleProduct> = await client.query({
        query: gql`
            query GetProduct($url_key: [String]) {
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

type SimpleProduct = {
    products: {
        items: [
            {
                name: string;
                description: {
                    html: string;
                };
                url_key: string;
                image: {
                    url: string;
                };
                sku: string;
                stock_status: TStockStatus;
                price_range: {
                    maximum_price: {
                        regular_price: {
                            value: number;
                            currency: string;
                        };
                    };
                };
            }
        ];
    };
};

export type TStockStatus = "IN_STOCK" | "OUT_OF_STOCK";
