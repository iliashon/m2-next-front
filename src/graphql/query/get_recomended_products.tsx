import { gql } from "@apollo/client";

export interface IRecomendedProduct {
    name: string;
    url_key: string;
    image: {
        url: string;
    };
    description: {
        html: string;
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

export const GET_RECOMENDED_PRODUCTS = gql`
    query {
        products(filter: { category_id: { in: "46" } }) {
            items {
                name
                url_key
                image {
                    url
                }
                description {
                    html
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
`;
