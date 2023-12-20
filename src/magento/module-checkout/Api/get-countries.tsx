import client from "@/apollo-client";
import { TCountries } from "@/magento/Types/checkout/TCountries";
import { FetchResult, gql } from "@apollo/client";

export async function getCountries() {
    const { data }: FetchResult<TCountries> = await client.query({
        query: gql`
            query GetCountries {
                countries {
                    full_name_english
                    id
                    available_regions {
                        code
                        id
                        name
                    }
                }
            }
        `,
    });
    return data;
}
