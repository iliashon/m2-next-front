import client from "@/apollo-client";
import { FetchResult, gql } from "@apollo/client";
import { TAddToCartSimpleProduct } from "../Types/TCart";

export async function addSimpleProductToCart(
    sku: string,
    quantity: number,
    cartId: string
) {
    const { data }: FetchResult<TAddToCartSimpleProduct> = await client.mutate({
        mutation: gql`
            mutation AddToCart(
                $sku: String!
                $quantity: Float!
                $cartId: String!
            ) {
                addSimpleProductsToCart(
                    input: {
                        cart_items: { data: { sku: $sku, quantity: $quantity } }
                        cart_id: $cartId
                    }
                ) {
                    cart {
                        id
                        items {
                            product {
                                name
                                image {
                                    url
                                }
                                sku
                                price_range {
                                    maximum_price {
                                        regular_price {
                                            value
                                        }
                                    }
                                }
                            }
                            quantity
                            prices {
                                row_total {
                                    value
                                }
                            }
                        }
                        total_quantity
                        prices {
                            grand_total {
                                value
                            }
                        }
                    }
                }
            }
        `,
        variables: {
            sku,
            quantity,
            cartId,
        },
    });
    return data;
}
