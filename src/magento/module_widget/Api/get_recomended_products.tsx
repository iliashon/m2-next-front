import client from "@/apollo-client";
import { ApolloQueryResult, gql } from "@apollo/client";

export interface IRecomendedProduct {
    name: string;
    new: 1 | 0;
    sale: 1 | 0;
    url_key: string;
    image: {
        url: string;
    };
    short_description: {
        html: string;
    };
    sku: string;
    stock_status: "IN_STOCK" | "OUT_OF_STOCK";
    price_range: {
        maximum_price: {
            regular_price: {
                value: number;
                currency: string;
            };
        };
    };
}

export interface IRecomendedProducts {
    products: {
        items: IRecomendedProduct[];
    };
}

export async function GetRecommendedProduct() {
    const { data }: ApolloQueryResult<IRecomendedProducts> = await client.query(
        {
            query: gql`
                query GetRecommendedProduct {
                    products(filter: { category_id: { in: "41" } }) {
                        items {
                            name
                            sale
                            new
                            url_key
                            image {
                                url
                            }
                            short_description {
                                html
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
                            special_price
                        }
                    }
                }
            `,
            fetchPolicy: "no-cache",
        }
    );
    return data;
}
