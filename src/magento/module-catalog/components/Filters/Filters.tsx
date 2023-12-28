"use client";

import { useState } from "react";
import PriceFilter from "../PriceFilter/PriceFilter";

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
        <div className="w-1/4 bg-white rounded-xl p-3 font-monts mb-6">
            <PriceFilter
                value={price}
                setPriceSlider={handleChangePriceSlider}
                setPriceInput={handleChangePriceInput}
            />
            <div className="py-5">
                <button className="bg-gr-green w-full h-9 rounded-md text-white font-monts">
                    Search
                </button>
            </div>
        </div>
    );
}
