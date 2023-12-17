"use client";

import Breadcrump from "@/components/Breadcrump/Breadcrump";
import Image from "next/image";

// import icons
import search from "@/assets/icons/uil_search.svg";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_CATALOG_PRODUCTS } from "@/magento/module-catalog/Api/get_catalog_products";
import PriceFilter from "@/magento/module-catalog/components/PriceFilter/PriceFilter";
import ProductCard from "@/magento/module-catalog/view/ProductCard";

export default function Catalog() {
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

    const { loading, data, error } = useQuery(GET_CATALOG_PRODUCTS);

    return (
        <>
            <section className="">
                <div className="container mx-auto flex items-center justify-between py-6 font-lato">
                    <div className="flex flex-col gap-3">
                        <h1 className="font-monts text-3xl font-semibold">
                            Catalog
                        </h1>
                        <Breadcrump />
                    </div>
                    <div className="flex h-9">
                        <input
                            type="text"
                            placeholder="Search"
                            className="bg-gray-200 w-96 rounded-s-lg p-4"
                        />
                        <span className="bg-gray-200 rounded-e-lg p-4 flex justify-center items-center">
                            <Image
                                src={search}
                                alt="Search"
                                width={20}
                                height={20}
                            />
                        </span>
                    </div>
                </div>
            </section>
            <section className="bg-gr-bg-gray py-6">
                <div className="container mx-auto flex gap-5 items-start">
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
                    <div className="w-3/4 flex flex-wrap justify-around gap-5">
                        {data?.products.items.map((item: any) => {
                            return <ProductCard key={item?.sku} data={item} />;
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}
