import { useEffect, useState } from "react";
import { addSimpleProductToCart } from "../Api/add-simple-product-to-cart";
import { createNewEmptyCart } from "../Api/create-new-cart";
import { TAddToCartSimpleProduct, TProductsCart } from "../Types/TCart";

const CART_KEY_STORAGE = "cart";

export default function useAddToCartSimpleProduct() {
    const [loading, setLoading] = useState(false);

    async function addToCart(newItem: TNewItemInfoWithQuantity) {
        const { sku, quantity } = newItem;

        if (!localStorage.getItem(CART_KEY_STORAGE)) {
            setLoading(true);

            const cartId = (await createNewEmptyCart())
                ?.createEmptyCart as string;

            const data = (await addSimpleProductToCart(
                sku,
                quantity,
                cartId
            )) as TAddToCartSimpleProduct;

            localStorage.setItem(
                CART_KEY_STORAGE,
                JSON.stringify(data.addSimpleProductsToCart.cart)
            );

            setLoading(false);
        } else if (localStorage.getItem(CART_KEY_STORAGE)) {
            setLoading(true);

            const cart: TProductsCart = JSON.parse(
                localStorage.getItem(CART_KEY_STORAGE) || ""
            );

            const data = (await addSimpleProductToCart(
                sku,
                quantity,
                cart.id
            )) as TAddToCartSimpleProduct;

            localStorage.setItem(
                CART_KEY_STORAGE,
                JSON.stringify(data.addSimpleProductsToCart.cart)
            );
            setLoading(false);
        }
        window.dispatchEvent(new Event("storage"));
    }

    return { loading, addToCart };
}
