import client from "@/apollo-client";
import { TApplyCouponToCart } from "@/magento/Types/TApplyCouponToCart";
import { FetchResult, gql } from "@apollo/client";

export async function applyCouponToCart(coupon_code: string, cartId: string) {
    const { data }: FetchResult<TApplyCouponToCart> = await client.mutate({
        mutation: gql`
            mutation ApplyCouponToCart(
                $coupon_code: String!
                $cartId: String!
            ) {
                applyCouponToCart(
                    input: { cart_id: $cartId, coupon_code: $coupon_code }
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
            coupon_code,
            cartId,
        },
    });
    return data;
}
