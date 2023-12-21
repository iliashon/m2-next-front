"use client";

import { TCart } from "@/magento/Types/TCart";
import useCheckoutPlacingAnOrder from "@/magento/hooks/useCheckoutPlacingAnOrder";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ClipLoader } from "react-spinners";

export default function ShippingMethods() {
    const { register, handleSubmit, watch } = useForm<{ method: string }>();

    const { loading, setShippingMethodPost } = useCheckoutPlacingAnOrder();

    const router = useRouter();

    const [cart, setCart] = useState<TCart | null>();

    const submit: SubmitHandler<{ method: string }> = async (data) => {
        const activeMethod =
            cart?.shipping_addresses[0].available_shipping_methods.filter(
                (item) => item.carrier_code === data.method
            );

        const result = activeMethod
            ? await setShippingMethodPost(
                  activeMethod[0].method_code,
                  activeMethod[0].carrier_code
              )
            : false;

        if (result) {
            router.replace("/cart/checkout/payment");
        }
    };

    const getCartInLocalStorage = () => {
        if (localStorage.getItem("cart")) {
            setCart(JSON.parse(localStorage.getItem("cart") || ""));
        } else {
            setCart(null);
        }
    };

    useEffect(() => {
        getCartInLocalStorage();
    }, []);

    return (
        <>
            <section className="checkout-section">
                <div className="container mx-auto p-4">
                    <h2 className="my-5 text-3xl font-lato">
                        Choice shipping method
                    </h2>
                    <div className="flex justify-between">
                        <div className="w-3/5 font-monts flex flex-col gap-3">
                            <form
                                className="flex flex-col gap-3 border p-4"
                                onSubmit={handleSubmit(submit)}
                            >
                                {cart ? (
                                    cart.shipping_addresses[0].available_shipping_methods.map(
                                        (item) => {
                                            return (
                                                <label
                                                    key={item.method_code}
                                                    className="flex gap-2 items-center"
                                                >
                                                    <input
                                                        type="radio"
                                                        value={
                                                            item.carrier_code
                                                        }
                                                        {...register("method")}
                                                    />
                                                    <span>
                                                        {item.carrier_title}
                                                    </span>
                                                    <span>
                                                        {item.amount.value}$
                                                    </span>
                                                </label>
                                            );
                                        }
                                    )
                                ) : (
                                    <ClipLoader color="black" size={25} />
                                )}
                                <div className="flex gap-3 items-center">
                                    <button
                                        disabled={loading ? true : false}
                                        className="bg-gr-green w-36 h-9 rounded-md text-white flex justify-center items-center font-monts text-sm"
                                    >
                                        {loading ? (
                                            <ClipLoader
                                                color="white"
                                                size={25}
                                            />
                                        ) : (
                                            "Next"
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="w-1/3">
                            <h2>Summarizing</h2>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
