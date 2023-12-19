import client from "@/apollo-client";
import { TUpdateItemQuantityInCart } from "@/magento/Types/TUpdateItemQuantityInCart";
import { FetchResult, gql } from "@apollo/client";

export async function updateQuantityInCart(
    cartItemUid: string,
    cartId: string,
    quantity: number
) {
    const { data }: FetchResult<TUpdateItemQuantityInCart> =
        await client.mutate({
            mutation: gql`
                mutation UpdateQuantityInCart(
                    $cartItemUid: ID
                    $cartId: String!
                    $quantity: Float
                ) {
                    updateCartItems(
                        input: {
                            cart_id: $cartId
                            cart_items: {
                                cart_item_uid: $cartItemUid
                                quantity: $quantity
                            }
                        }
                    ) {
                        cart {
                            applied_coupons {
                                code
                            }
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
                                            discount {
                                                amount_off
                                                percent_off
                                            }
                                            final_price {
                                                value
                                            }
                                        }
                                    }
                                    url_key
                                }
                                quantity
                                prices {
                                    row_total {
                                        value
                                    }
                                }
                                uid
                            }
                            total_quantity
                            prices {
                                grand_total {
                                    value
                                }
                                discounts {
                                    amount {
                                        value
                                    }
                                    label
                                }
                                subtotal_excluding_tax {
                                    value
                                }
                            }
                        }
                    }
                }
            `,
            variables: {
                cartItemUid,
                cartId,
                quantity,
            },
        });
    return data;
}
