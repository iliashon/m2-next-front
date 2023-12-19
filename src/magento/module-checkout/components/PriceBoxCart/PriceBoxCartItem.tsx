import { TPriceRange } from "@/magento/Types/TPriceRange";
import React from "react";

export default function PriceBoxCartItem({ price }: { price: TPriceRange }) {
    return (
        <>
            {price.maximum_price.discount.amount_off > 0 ? (
                <div className="flex font-lato items-end gap-2">
                    <span className="text-gray-400 text-sm">
                        <s>{price.maximum_price.regular_price.value}$</s>
                    </span>
                    <span className="text-red-500 text-xl font-semibold">
                        {price.maximum_price.final_price.value}$
                    </span>
                </div>
            ) : (
                <span className="text-xl font-lato text-gr-green">
                    <b>{price.maximum_price.regular_price.value}$</b>
                </span>
            )}
        </>
    );
}
