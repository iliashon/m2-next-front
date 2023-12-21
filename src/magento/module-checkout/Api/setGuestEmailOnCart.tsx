import client from "@/apollo-client";
import { TSetGuestEmailOnCart } from "@/magento/Types/checkout/TCartShippingAddress";
import { FetchResult, gql } from "@apollo/client";

export async function setGuestEmailOnCart({
    cartId,
    email,
}: {
    cartId: string;
    email: string;
}) {
    const { data }: FetchResult<TSetGuestEmailOnCart> = await client.mutate({
        mutation: gql`
            mutation SetGuestEmailOnCart($cartId: String!, $email: String!) {
                setGuestEmailOnCart(
                    input: { cart_id: $cartId, email: $email }
                ) {
                    cart {
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
            email,
        },
    });
    return data;
}
