"use client";

import { TCart } from "@/magento/Types/TCart";
import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";

export default function ProccedCheckoutButton({
    cart,
}: {
    cart: TCart | null | undefined;
}) {
    return (
        <>
            {cart === null ||
            cart?.total_quantity === 0 ||
            cart === undefined ? (
                <button
                    disabled
                    className="bg-gr-green opacity-50 w-full h-9 rounded-md text-white font-monts"
                >
                    Proceed to Checkout
                </button>
            ) : (
                <Link
                    href={"/cart/checkout"}
                    className="bg-gr-green w-full h-9 flex justify-center items-center rounded-md text-white font-monts"
                >
                    Proceed to Checkout
                </Link>
            )}
        </>
    );
}
