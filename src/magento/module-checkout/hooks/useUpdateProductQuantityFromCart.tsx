import { useState } from "react";
import { TCart } from "@/magento/Types/TCart";
import { updateQuantityInCart } from "../Api/update-item-quantity-in-cart";
import { TUpdateItemQuantityInCart } from "@/magento/Types/TUpdateItemQuantityInCart";

const CART_KEY_STORAGE = "cart";

export default function useUpdateProductQuantityFromCart() {
    const [loading, setLoading] = useState<Boolean>(false);

    async function updateItemInCart(productUid: string, quantity: number) {
        setLoading(true);

        const cart: TCart = JSON.parse(
            localStorage.getItem(CART_KEY_STORAGE) || ""
        );

        const data = (await updateQuantityInCart(
            productUid,
            cart.id,
            quantity
        )) as TUpdateItemQuantityInCart;

        localStorage.setItem(
            CART_KEY_STORAGE,
            JSON.stringify(data.updateCartItems.cart)
        );

        setLoading(false);

        window.dispatchEvent(new Event("storage"));
    }

    return { loading, updateItemInCart };
}
