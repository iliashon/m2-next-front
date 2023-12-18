import client from "@/apollo-client";
import { FetchResult, gql } from "@apollo/client";
import { TNewEmptyCart } from "@/magento/Types/TNewEmptyCart";

export async function createNewEmptyCart() {
    const { data }: FetchResult<TNewEmptyCart> = await client.mutate({
        mutation: gql`
            mutation CreateCart {
                createEmptyCart
            }
        `,
    });
    return data;
}
