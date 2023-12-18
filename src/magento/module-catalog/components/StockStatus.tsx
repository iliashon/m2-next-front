import Image from "next/image";
import React from "react";

import check from "@/assets/icons/check.svg";
import cross from "@/assets/icons/cross.svg";
import { TStockStatus } from "../Types/TSimpleProduct";

export default function StockStatus({
    stock_status,
}: {
    stock_status: TStockStatus;
}) {
    return (
        <div className="flex gap-1">
            <p
                className={
                    stock_status === "IN_STOCK"
                        ? "text-green-500"
                        : "text-red-400"
                }
            >
                {stock_status === "IN_STOCK" ? "in stock" : "out of stock"}
            </p>
            <Image
                src={stock_status === "IN_STOCK" ? check : cross}
                alt="Icons"
                width={12}
                height={24}
                className="w-auto h-auto"
            />
        </div>
    );
}
