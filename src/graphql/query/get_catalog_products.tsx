import client from "@/apollo-client";
import { ApolloQueryResult, gql } from "@apollo/client";

export async function getCatalogProducts() {
    const { data }: ApolloQueryResult<SimpleProduct> = await client.query({
        query: gql`
            query GetProduct($url_key: [String]) {
                products(filter: { category_id: { in: "2" } }) {
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
        fetchPolicy: "no-cache",
    });
    return data;
}

export const GET_CATALOG_PRODUCTS = gql`
    query GetProduct {
        products(filter: { category_id: { in: "47" } }) {
            items {
                name
                description {
                    html
                }
                short_description {
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
`;

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
