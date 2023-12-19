import Cart from "@/magento/module-checkout/view/cart/Cart";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cart",
};

export default function page() {
    return (
        <>
            <Cart />
        </>
    );
}
