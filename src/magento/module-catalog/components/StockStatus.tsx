import { TStockStatus } from "@/graphql/query/get_catalog_products";
import Image from "next/image";
import React from "react";

import check from "@/assets/icons/check.svg";
import cross from "@/assets/icons/cross.svg";

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
            />
        </div>
    );
}
