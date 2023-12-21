import client from "@/apollo-client";
import { TSetPaymentMethod } from "@/magento/Types/checkout/TCartShippingAddress";
import { FetchResult, gql } from "@apollo/client";

export async function setPaymentMethod({
    cartId,
    payment_method_code,
}: {
    cartId: string;
    payment_method_code: string;
}) {
    const { data }: FetchResult<TSetPaymentMethod> = await client.mutate({
        mutation: gql`
            mutation SetPaymentMethod(
                $cartId: String!
                $payment_method_code: String!
            ) {
                setPaymentMethodOnCart(
                    input: {
                        cart_id: $cartId
                        payment_method: { code: $payment_method_code }
                    }
                ) {
                    cart {
                        selected_payment_method {
                            code
                            purchase_order_number
                            title
                        }
                        billing_address {
                            firstname
                            lastname
                            street
                            telephone
                            postcode
                            city
                            company
                            country {
                                label
                                code
                            }
                        }
                        email
                        applied_coupons {
                            code
                        }
                        shipping_addresses {
                            firstname
                            lastname
                            street
                            telephone
                            postcode
                            city
                            company
                            country {
                                label
                                code
                            }
                            available_shipping_methods {
                                amount {
                                    value
                                }
                                available
                                carrier_code
                                carrier_title
                                error_message
                                method_code
                                method_title
                                price_excl_tax {
                                    value
                                }
                                price_incl_tax {
                                    value
                                }
                            }
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
            payment_method_code,
        },
    });
    return data;
}
