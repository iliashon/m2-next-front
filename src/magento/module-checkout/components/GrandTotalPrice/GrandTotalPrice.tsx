import { TCart } from "@/magento/Types/TCart";
import React from "react";

export default function GrandTotalPrice({
    cart,
}: {
    cart: TCart | null | undefined;
}) {
    return (
        <div className="flex text-xl justify-between">
            <h4 className="font-semibold">Total:</h4>
            <span className="text-gr-green">
                {cart === null ? 0 : cart?.prices.grand_total.value}$
            </span>
        </div>
    );
}
