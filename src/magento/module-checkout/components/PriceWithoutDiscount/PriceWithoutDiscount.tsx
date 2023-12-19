import { TCart } from "@/magento/Types/TCart";
import React from "react";

export default function PriceWithoutDiscount({
    cart,
}: {
    cart: TCart | null | undefined;
}) {
    return (
        <div className="flex justify-between">
            <h5>Price without discount:</h5>
            <span>
                {cart === null ? 0 : cart?.prices.subtotal_excluding_tax.value}$
            </span>
        </div>
    );
}
