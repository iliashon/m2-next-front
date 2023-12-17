"use client";

import ProductItem from "@/magento/module-checkout/view/cart/ProductItem";
import { TProductsCart } from "@/magento/module-product/Types/TCart";
import { useEffect, useState } from "react";
import SummarizingItem from "../../components/SummarizingItem";

const style = {
    baseFlex: "flex justify-between",
};

export default function Cart() {
    const [cart, setCart] = useState<TProductsCart>();

    const getCartInLocalStorage = () => {
        setCart(JSON.parse(localStorage.getItem("cart") || ""));
        console.log("Reload");
    };

    useEffect(() => {
        getCartInLocalStorage();

        window.addEventListener("storage", () => getCartInLocalStorage());
    }, []);

    return (
        <section className="bg-gr-bg-gray">
            <div className="container mx-auto p-4 flex gap-8">
                <div className="w-8/12 py-5 flex flex-col gap-4">
                    {cart
                        ? cart.items.map((item) => {
                              return (
                                  <ProductItem
                                      name={item.product.name}
                                      sku={item.product.sku}
                                      quantity={item.quantity}
                                      image={item.product.image.url}
                                      price={
                                          item.product.price_range.maximum_price
                                              .regular_price.value
                                      }
                                      uid={item.uid}
                                      key={item.product.sku}
                                  />
                              );
                          })
                        : "Loading..."}
                </div>
                <div className="w-4/12 font-monts py-5">
                    <h2 className="text-2xl font-semibold text-center">
                        Summarizing
                    </h2>
                    <div className="bg-white p-5 mt-5 flex flex-col gap-5 rounded-xl">
                        <div className="bg-gr-bg-gray p-3 flex flex-col gap-3 rounded-lg">
                            <div className={style.baseFlex}>
                                <h5>Price without discount:</h5>
                                <span>
                                    {cart?.prices.subtotal_excluding_tax.value}$
                                </span>
                            </div>
                            {cart
                                ? cart.prices.discounts.map((item) => {
                                      return (
                                          <SummarizingItem
                                              key={item.label}
                                              value={item.amount.value}
                                              label={item.label}
                                          />
                                      );
                                  })
                                : "Loading..."}
                        </div>
                        <div className="flex text-xl justify-between">
                            <h4 className="font-semibold">Total:</h4>
                            <span className="text-gr-green">
                                {cart?.prices.grand_total.value}$
                            </span>
                        </div>
                        <button className="bg-gr-green w-full h-9 rounded-md text-white font-monts">
                            Place an order
                        </button>
                        <div className="flex flex-col gap-3">
                            <h4 className="text-base font-semibold">
                                Discount code:
                            </h4>
                            <div className="flex gap-3">
                                <input
                                    className="bg-gray-200 w-3/4 rounded-md p-2 h-9 box-border"
                                    type="text"
                                    placeholder="PROMO"
                                />
                                <button className="w-1/5 bg-gr-green h-9 rounded-md text-white font-monts text-sm">
                                    Apply
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}