import client from "@/apollo-client";
import { TSetShippingMethod } from "@/magento/Types/checkout/TCartShippingAddress";
import { FetchResult, gql } from "@apollo/client";

export async function setShippingMethod({
    cartId,
    carrier_code,
    method_code,
}: {
    cartId: string;
    carrier_code: string;
    method_code: string;
}) {
    const { data }: FetchResult<TSetShippingMethod> = await client.mutate({
        mutation: gql`
            mutation SetShippingMethod(
                $cartId: String!
                $carrier_code: String!
                $method_code: String!
            ) {
                setShippingMethodsOnCart(
                    input: {
                        cart_id: $cartId
                        shipping_methods: {
                            carrier_code: $carrier_code
                            method_code: $method_code
                        }
                    }
                ) {
                    cart {
                        available_payment_methods {
                            title
                            code
                        }
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
                            selected_shipping_method {
                                amount {
                                    value
                                }
                                carrier_code
                                carrier_title
                                method_code
                                method_title
                                price_excl_tax {
                                    value
                                }
                                price_incl_tax {
                                    value
                                }
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
            carrier_code,
            method_code,
        },
    });
    return data;
}
