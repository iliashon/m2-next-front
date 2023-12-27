import { gql } from "@apollo/client";

export const GET_CATALOG_PRODUCTS = gql`
    query GetProduct($page_number: Int, $search: String, $cat_uid: [String]) {
        products(
            filter: { category_uid: { in: $cat_uid } }
            search: $search
            pageSize: 18
            currentPage: $page_number
        ) {
            page_info {
                total_pages
            }
            items {
                name
                sale
                new
                description {
                    html
                }
                short_description {
                    html
                }
                url_key
                image {
                    url
                }
                sku
                stock_status
                price_range {
                    maximum_price {
                        regular_price {
                            value
                            currency
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
            }
        }
    }
`;
