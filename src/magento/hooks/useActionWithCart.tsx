import { useState } from "react";
import { TCart } from "@/magento/Types/TCart";
import { TDeleteProductFromCart } from "@/magento/Types/TDeleteProductFromCart";
import { deleteProductFromCart } from "../module-checkout/Api/delete-item-from-cart";
import { updateQuantityInCart } from "../module-checkout/Api/update-item-quantity-in-cart";
import { TUpdateItemQuantityInCart } from "../Types/TUpdateItemQuantityInCart";
import { createNewEmptyCart } from "../module-product/Api/create-new-cart";
import { addSimpleProductToCart } from "../module-product/Api/add-simple-product-to-cart";
import { TAddToCartSimpleProduct } from "../Types/TAddToCartSimpleProduct";
import { applyCouponToCart } from "../module-checkout/Api/apply-coupon-to-cart";
import { TApplyCouponToCart } from "../Types/TApplyCouponToCart";
import { removeCouponFromCart } from "../module-checkout/Api/remove-coupon-from-cart";
import { TRemoveCouponFromCart } from "../Types/TRemoveCouponFromCart";

const CART_KEY_STORAGE = "cart";

export default function useActionWithCart() {
    const [loading, setLoading] = useState<Boolean>(false);

    function setLocalStorage(data: string) {
        localStorage.setItem(CART_KEY_STORAGE, data);

        window.dispatchEvent(new Event("storage"));

        setLoading(false);
    }

    async function removeCoupon() {
        setLoading(true);

        const cart: TCart = JSON.parse(
            localStorage.getItem(CART_KEY_STORAGE) || ""
        );

        const data = (await removeCouponFromCart(
            cart.id
        )) as TRemoveCouponFromCart;

        setLocalStorage(JSON.stringify(data.removeCouponFromCart.cart));
    }

    async function applyCoupon(couponCode: string) {
        setLoading(true);

        const cart: TCart = JSON.parse(
            localStorage.getItem(CART_KEY_STORAGE) || ""
        );

        const data = (await applyCouponToCart(
            couponCode,
            cart.id
        )) as TApplyCouponToCart;

        setLocalStorage(JSON.stringify(data.applyCouponToCart.cart));
    }

    async function deleteProduct(productUid: string) {
        setLoading(true);

        const cart: TCart = JSON.parse(
            localStorage.getItem(CART_KEY_STORAGE) || ""
        );

        const data = (await deleteProductFromCart(
            productUid,
            cart.id
        )) as TDeleteProductFromCart;

        setLocalStorage(JSON.stringify(data.removeItemFromCart.cart));
    }

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

        setLocalStorage(JSON.stringify(data.updateCartItems.cart));
    }

    async function addToCart({
        sku,
        quantity,
    }: {
        sku: string;
        quantity: number;
    }) {
        let cartId: string = "";

        setLoading(true);

        if (!localStorage.getItem(CART_KEY_STORAGE)) {
            cartId = (await createNewEmptyCart())?.createEmptyCart as string;
        } else if (localStorage.getItem(CART_KEY_STORAGE)) {
            const cart: TCart = JSON.parse(
                localStorage.getItem(CART_KEY_STORAGE) || ""
            );

            cartId = cart.id;
        }

        const data = (await addSimpleProductToCart(
            sku,
            quantity,
            cartId
        )) as TAddToCartSimpleProduct;

        setLocalStorage(JSON.stringify(data.addSimpleProductsToCart.cart));
    }

    return {
        loading,
        deleteProduct,
        updateItemInCart,
        addToCart,
        applyCoupon,
        removeCoupon,
    };
}
