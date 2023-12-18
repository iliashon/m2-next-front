import client from "@/apollo-client";
import { TPriceRange } from "@/magento/Types/TPriceRange";
import { TSimpleProduct } from "@/magento/Types/TSimpleProduct";
import { ApolloQueryResult, gql } from "@apollo/client";

export async function GetRecommendedProduct() {
    const {
        data,
    }: ApolloQueryResult<{ products: { items: TSimpleProduct[] } }> =
        await client.query({
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
                                    discount {
                                        amount_off
                                        percent_off
                                    }
                                    final_price {
                                        value
                                    }
                                }
                            }
                            special_price
                        }
                    }
                }
            `,
            fetchPolicy: "no-cache",
        });
    return data;
}
