import client from "@/apollo-client";
import { TDeleteProductFromCart } from "@/magento/Types/TDeleteProductFromCart";
import { FetchResult, gql } from "@apollo/client";

export async function deleteProductFromCart(
    cartItemUid: string,
    cartId: string
) {
    const { data }: FetchResult<TDeleteProductFromCart> = await client.mutate({
        mutation: gql`
            mutation DeleteProductFromCart($cartItemUid: ID, $cartId: String!) {
                removeItemFromCart(
                    input: { cart_id: $cartId, cart_item_uid: $cartItemUid }
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
        },
    });
    return data;
}
