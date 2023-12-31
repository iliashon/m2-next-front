"use client";

import { TStockStatus } from "@/magento/Types/TStockStatus";
import useActionWithCart from "@/magento/hooks/useActionWithCart";
import { ClipLoader } from "react-spinners";

export default function AddToCartButton({
    stock_status,
    sku,
}: {
    stock_status: TStockStatus;
    sku: string;
}) {
    const { loading, addToCart } = useActionWithCart();

    const addToCartHandle = () => {
        addToCart({
            sku,
            quantity: 1,
        });
    };
    return (
        <button
            onClick={addToCartHandle}
            className={`bg-gr-green w-full h-9 rounded-md text-white font-monts flex justify-center items-center ${
                stock_status === "IN_STOCK" ? "opacity-100" : "opacity-50"
            }`}
            disabled={stock_status === "IN_STOCK" ? false : true}
        >
            {loading ? <ClipLoader color="white" size={25} /> : "Add to cart"}
        </button>
    );
}
