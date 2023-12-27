"use client";

import ProductItem from "@/magento/module-checkout/view/cart/ProductItem";
import { useEffect, useState } from "react";
import SummarizingItem from "../../components/SummarizingItem/SummarizingItem";
import LoaderBoxItem from "../../components/LoaderBoxItem/LoaderBoxItem";
import { Alert, Skeleton, Snackbar } from "@mui/material";
import { TCart } from "@/magento/Types/TCart";
import CartEmpty from "../../components/CartEmpty/CartEmpty";
import PromoApply from "../../components/PromoApply/PromoApply";
import ProccedCheckoutButton from "../../components/ProccedCheckoutButton/ProccedCheckoutButton";
import GrandTotalPrice from "../../components/GrandTotalPrice/GrandTotalPrice";
import PriceWithoutDiscount from "../../components/PriceWithoutDiscount/PriceWithoutDiscount";
import { RedirectType, permanentRedirect, redirect } from "next/navigation";

export default function Cart() {
    const [cart, setCart] = useState<TCart | null>();

    const [isCompliteOrder, setIsCompliteOrder] = useState<boolean>(false);

    const getCartInLocalStorage = () => {
        if (localStorage.getItem("cart")) {
            setCart(JSON.parse(localStorage.getItem("cart") || ""));
        } else {
            setCart(null);
        }
    };

    useEffect(() => {
        getCartInLocalStorage();

        if (localStorage.getItem("order")) {
            setIsCompliteOrder(true);
            setTimeout(() => {
                setIsCompliteOrder(false);
                localStorage.removeItem("order");
            }, 5000);
        }

        window.addEventListener("storage", () => getCartInLocalStorage());
    }, []);

    return (
        <section className="bg-gr-bg-gray cart-section">
            <div className="container mx-auto p-4 flex gap-8">
                <div className="w-8/12 py-5 flex flex-col gap-4">
                    {cart ? (
                        cart?.items.map((item) => {
                            return (
                                <ProductItem
                                    name={item.product.name}
                                    sku={item.product.sku}
                                    quantity={item.quantity}
                                    image={item.product.image.url}
                                    price={item.product.price_range}
                                    uid={item.uid}
                                    url_key={item.product.url_key}
                                    key={item.product.sku}
                                />
                            );
                        })
                    ) : cart === null ? (
                        <CartEmpty />
                    ) : (
                        <LoaderBoxItem />
                    )}
                    {cart?.total_quantity === 0 ? <CartEmpty /> : ""}
                </div>
                <div className="w-4/12 font-monts py-5">
                    <h2 className="text-2xl font-semibold text-center">
                        Summarizing
                    </h2>
                    <div className="bg-white p-5 mt-5 flex flex-col gap-5 rounded-xl">
                        <div className="bg-gr-bg-gray p-3 flex flex-col gap-3 rounded-lg">
                            <PriceWithoutDiscount cart={cart} />
                            {cart ? (
                                cart?.prices.discounts.map((item) => {
                                    return (
                                        <SummarizingItem
                                            key={item.label}
                                            value={item.amount.value}
                                            label={item.label}
                                        />
                                    );
                                })
                            ) : cart === null ? (
                                ""
                            ) : (
                                <Skeleton variant="rounded" height={24} />
                            )}
                        </div>
                        <GrandTotalPrice cart={cart} />
                        <ProccedCheckoutButton cart={cart} />
                        <PromoApply cart={cart} />
                    </div>
                </div>
            </div>
            <Snackbar open={isCompliteOrder}>
                <Alert severity="success">Your order has been placed</Alert>
            </Snackbar>
        </section>
    );
}
