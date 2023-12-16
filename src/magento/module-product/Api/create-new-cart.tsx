import client from "@/apollo-client";
import { FetchResult, gql } from "@apollo/client";
import { TNewCart } from "../Types/TCart";

export async function createNewEmptyCart() {
    const { data }: FetchResult<TNewCart> = await client.mutate({
        mutation: gql`
            mutation CreateCart {
                createEmptyCart
            }
        `,
    });
    return data;
}
