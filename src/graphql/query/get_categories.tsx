import { gql } from "@apollo/client";

interface ICategory {
    name: string;
    url_key: string;
}

export interface ICategories {
    categories: {
        items: [
            {
                children: ICategory[];
            }
        ];
    };
}

export const GET_CATEGORIES = gql`
    query GetCategories {
        categories {
            items {
                children {
                    name
                    url_key
                    image
                }
            }
        }
    }
`;
