import client from "@/apollo-client";
import { TSetShippingAddress } from "@/magento/Types/checkout/TCartShippingAddress";
import { FetchResult, gql } from "@apollo/client";

export async function setShippingAddress({
    cartId,
    city,
    company,
    country_code,
    firstname,
    lastname,
    postcode,
    region,
    street,
    telephone,
}: {
    cartId: string;
    city: string;
    company: string;
    country_code: string;
    firstname: string;
    lastname: string;
    postcode: string;
    region: string;
    street: string;
    telephone: string;
}) {
    console.log(country_code);

    const { data }: FetchResult<TSetShippingAddress> = await client.mutate({
        mutation: gql`
            mutation SetShippingAddress(
                $cartId: String!
                $city: String!
                $company: String
                $country_code: String!
                $firstname: String!
                $lastname: String!
                $postcode: String
                $region: String
                $street: [String]!
                $telephone: String
            ) {
                setShippingAddressesOnCart(
                    input: {
                        cart_id: $cartId
                        shipping_addresses: {
                            address: {
                                city: $city
                                company: $company
                                country_code: $country_code
                                firstname: $firstname
                                lastname: $lastname
                                postcode: $postcode
                                region: $region
                                street: $street
                                telephone: $telephone
                            }
                        }
                    }
                ) {
                    cart {
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
            city,
            company,
            country_code,
            firstname,
            lastname,
            postcode,
            region,
            street,
            telephone,
        },
    });
    return data;
}
