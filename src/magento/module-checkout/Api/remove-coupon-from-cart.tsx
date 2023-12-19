import client from "@/apollo-client";
import { TRemoveCouponFromCart } from "@/magento/Types/TRemoveCouponFromCart";
import { FetchResult, gql } from "@apollo/client";

export async function removeCouponFromCart(cartId: string) {
    const { data }: FetchResult<TRemoveCouponFromCart> = await client.mutate({
        mutation: gql`
            mutation RemoveCouponFromCart($cartId: String!) {
                removeCouponFromCart(input: { cart_id: $cartId }) {
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
            cartId,
        },
    });
    return data;
}
