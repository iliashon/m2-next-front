import { TCart } from "@/magento/Types/TCart";
import { watch } from "fs";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ClipLoader } from "react-spinners";

export default function ShippingMethods() {
    const { register, handleSubmit, watch } = useForm<{ method: string }>();

    const [cart, setCart] = useState<TCart | null>();

    const getCartInLocalStorage = () => {
        if (localStorage.getItem("cart")) {
            setCart(JSON.parse(localStorage.getItem("cart") || ""));
        } else {
            setCart(null);
        }
    };

    useEffect(() => {
        window.addEventListener("storage", () => getCartInLocalStorage());
    }, []);

    return (
        <>
            <form className="flex flex-col gap-3">
                {cart
                    ? cart.shipping_addresses[0].available_shipping_methods.map(
                          (item) => {
                              return (
                                  <label
                                      key={item.method_code}
                                      className="flex gap-2 items-center"
                                  >
                                      <input
                                          type="radio"
                                          value={item.carrier_code}
                                          {...register("method")}
                                      />
                                      <span>{item.carrier_title}</span>
                                      <span>{item.amount.value}$</span>
                                  </label>
                              );
                          }
                      )
                    : ""}
                <div className="flex gap-3 items-center">
                    <button className="bg-gr-green w-36 h-9 rounded-md text-white flex justify-center items-center font-monts text-sm">
                        Next
                    </button>
                </div>
            </form>
        </>
    );
}
