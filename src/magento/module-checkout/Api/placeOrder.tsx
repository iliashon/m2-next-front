import client from "@/apollo-client";
import { TPlaceOrder } from "@/magento/Types/checkout/TCartShippingAddress";
import { FetchResult, gql } from "@apollo/client";

export async function placeOrder({ cartId }: { cartId: string }) {
    const { data }: FetchResult<TPlaceOrder> = await client.mutate({
        mutation: gql`
            mutation PlaceOrder($cartId: String!) {
                placeOrder(input: { cart_id: $cartId }) {
                    order {
                        order_number
                    }
                }
            }
        `,
        variables: {
            cartId,
        },
    });
    return data;
}
