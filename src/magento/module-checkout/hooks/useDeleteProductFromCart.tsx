import { useState } from "react";
import { deleteProductFromCart } from "../Api/delete-item-from-cart";
import { TCart } from "@/magento/Types/TCart";
import { TDeleteProductFromCart } from "@/magento/Types/TDeleteProductFromCart";

const CART_KEY_STORAGE = "cart";

export default function useDeleteProductFromCart() {
    const [loading, setLoading] = useState<Boolean>(false);

    async function deleteProduct(productUid: string) {
        setLoading(true);

        const cart: TCart = JSON.parse(
            localStorage.getItem(CART_KEY_STORAGE) || ""
        );

        const data = (await deleteProductFromCart(
            productUid,
            cart.id
        )) as TDeleteProductFromCart;

        localStorage.setItem(
            CART_KEY_STORAGE,
            JSON.stringify(data.removeItemFromCart.cart)
        );

        setLoading(false);

        window.dispatchEvent(new Event("storage"));
    }

    return { loading, deleteProduct };
}
