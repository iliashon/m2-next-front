import { TPriceRange } from "@/magento/Types/TPriceRange";
import React from "react";

export default function PriceBox({ price }: { price: TPriceRange }) {
    return (
        <>
            {price.maximum_price.discount.amount_off > 0 ? (
                <div className="flex gap-2 items-end font-lato">
                    <span className="text-gray-400">
                        <s>{price.maximum_price.regular_price.value}$</s>
                    </span>
                    <span className="text-red-500 text-3xl font-semibold">
                        {price.maximum_price.final_price.value}$
                    </span>
                </div>
            ) : (
                <span className="text-3xl font-lato text-gr-green">
                    <b>{price.maximum_price.regular_price.value}$</b>
                </span>
            )}
        </>
    );
}
