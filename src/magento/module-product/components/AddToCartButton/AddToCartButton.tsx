"use client";

import { TStockStatus } from "../../Types/TSimpleProduct";

export default function AddToCartButton({
    stock_status,
}: {
    stock_status: TStockStatus;
}) {
    return (
        <button className="bg-gr-green w-44 h-9 rounded-md text-white font-monts">
            Add to cart
        </button>
    );
}
