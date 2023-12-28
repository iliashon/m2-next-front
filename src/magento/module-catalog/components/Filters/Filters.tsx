"use client";

import { useState } from "react";
import PriceFilter from "../PriceFilter/PriceFilter";

import trash from "@/assets/icons/heroiconsTrash.svg";
import Image from "next/image";

export default function Filters() {
    const [price, setPrice] = useState([135, 1256]);

    const handleChangePriceSlider = (
        event: Event,
        newValue: number | number[]
    ) => {
        setPrice(newValue as number[]);
    };
    const handleChangePriceInput = (newValue: number[]) => {
        setPrice(newValue);
    };

    return (
        <div className="w-1/4 bg-white flex flex-col gap-3 rounded-xl p-3 font-monts mb-6">
            <div className="flex justify-between items-center">
                <span className="font-semibold">Filters</span>
                <button className="text-xs font-semibold text-red-400 flex items-end">
                    <Image src={trash} width={17} alt="Clear" />
                    Clear
                </button>
            </div>
            <hr />
            <PriceFilter
                value={price}
                setPriceSlider={handleChangePriceSlider}
                setPriceInput={handleChangePriceInput}
            />
            <hr />
            <button className="bg-gr-green w-full h-9 rounded-md text-white font-monts">
                Search
            </button>
        </div>
    );
}
