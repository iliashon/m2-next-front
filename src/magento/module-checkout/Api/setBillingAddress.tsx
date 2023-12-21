import client from "@/apollo-client";
import { TSetBillingAddress } from "@/magento/Types/checkout/TCartShippingAddress";
import { FetchResult, gql } from "@apollo/client";

export async function setBillingAddress({
    cartId,
    sameAsShipping,
}: {
    cartId: string;
    sameAsShipping: boolean;
}) {
    const { data }: FetchResult<TSetBillingAddress> = await client.mutate({
        mutation: gql`
            mutation SetBillingAddress(
                $cartId: String!
                $sameAsShipping: Boolean
            ) {
                setBillingAddressOnCart(
                    input: {
                        cart_id: $cartId
                        billing_address: { same_as_shipping: $sameAsShipping }
                    }
                ) {
                    cart {
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
            sameAsShipping,
        },
    });
    return data;
}
