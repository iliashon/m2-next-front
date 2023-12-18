import React from "react";
import { TPriceRange } from "../../Types/TSimpleProduct";

export default function PriceBox({ price }: { price: TPriceRange }) {
    return (
        <>
            {price.maximum_price.discount.amount_off > 0 ? (
                <div className="flex flex-col font-lato">
                    <span className="text-gray-400">
                        <s>{price.maximum_price.regular_price.value}$</s>
                    </span>
                    <span className="text-red-500 text-2xl font-semibold">
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
