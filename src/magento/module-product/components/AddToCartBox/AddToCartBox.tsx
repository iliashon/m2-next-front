"use client";

import { useState } from "react";
import { ClipLoader } from "react-spinners";
import useActionWithCart from "@/magento/hooks/useActionWithCart";
import { TStockStatus } from "@/magento/Types/TStockStatus";

const style = {
    button: "w-9 h-9 rounded-md bg-gray-300",
    quantity: "text-xl text-center font-semibold w-6",
};

const MAX_QUANTITY_VALUE = 99;
const MIN_QUANTITY_VALUE = 1;

export default function AddToCartBox({
    productInfo,
}: {
    productInfo: {
        stock_status: TStockStatus;
        name: string;
        image: string;
        sku: string;
        price: number;
    };
}) {
    const { loading, addToCart } = useActionWithCart();

    const [quantity, setQuantity] = useState(1);

    const quantityPlus = () => {
        if (
            quantity < MAX_QUANTITY_VALUE &&
            productInfo.stock_status === "IN_STOCK"
        ) {
            setQuantity(quantity + 1);
        }
    };
    const quantityMinus = () => {
        if (
            quantity > MIN_QUANTITY_VALUE &&
            productInfo.stock_status === "IN_STOCK"
        ) {
            setQuantity(quantity - 1);
        }
    };

    const addToCartHandle = () => {
        addToCart({
            sku: productInfo.sku,
            quantity,
        });
    };

    return (
        <>
            <div className="flex items-center gap-4">
                <button
                    onClick={quantityMinus}
                    className={`${style.button} ${
                        quantity === 1 ? "opacity-50" : "opacity-100"
                    }`}
                >
                    -
                </button>
                <span className={style.quantity}>{quantity}</span>
                <button
                    onClick={quantityPlus}
                    className={`${style.button} ${
                        quantity === 99 ||
                        productInfo.stock_status === "OUT_OF_STOCK"
                            ? "opacity-50"
                            : "opacity-100"
                    }`}
                >
                    +
                </button>
            </div>
            <button
                disabled={
                    productInfo.stock_status === "OUT_OF_STOCK" ? true : false
                }
                onClick={addToCartHandle}
                className={`${
                    productInfo.stock_status === "OUT_OF_STOCK"
                        ? "opacity-50"
                        : ""
                } bg-gr-green w-44 h-9 rounded-md text-white font-monts flex justify-center items-center`}
            >
                {loading ? (
                    <ClipLoader color="white" size={25} />
                ) : (
                    "Add to cart"
                )}
            </button>
        </>
    );
}
