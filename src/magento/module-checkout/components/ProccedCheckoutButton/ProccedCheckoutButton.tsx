"use client";

import { TCart } from "@/magento/Types/TCart";
import React from "react";

export default function ProccedCheckoutButton({
    cart,
}: {
    cart: TCart | null | undefined;
}) {
    return (
        <button
            disabled={
                cart === null ||
                cart?.total_quantity === 0 ||
                cart === undefined
                    ? true
                    : false
            }
            className="bg-gr-green w-full h-9 rounded-md text-white font-monts"
        >
            Proceed to Checkout
        </button>
    );
}
