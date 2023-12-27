"use client";

import Breadcrump from "@/magento/components/Breadcrump/Breadcrump";

// import icons
import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_CATALOG_PRODUCTS } from "@/magento/module-catalog/Api/get_catalog_products";
import PriceFilter from "@/magento/module-catalog/components/PriceFilter/PriceFilter";
import ProductCard from "@/magento/module-catalog/view/ProductCard";
import { Pagination } from "@mui/material";
import SkeletonCatalogLoader from "../components/SkeletonCatalogLoader/SkeletonCatalogLoader";
import { TCatalogProducts } from "@/magento/Types/TCatalogProducts";
import Search from "../components/Search/Search";
import Filters from "../components/Filters/Filters";

export default function Catalog() {
    const [pageNumber, setPageNumber] = useState(1);

    const [totalPageCount, setTotalPageCount] = useState<number>(1);

    const handleChangePageNumber = (
        event: React.ChangeEvent<unknown>,
        value: number
    ) => {
        setPageNumber(value);
    };

    const { loading, data, error } = useQuery<TCatalogProducts>(
        GET_CATALOG_PRODUCTS,
        {
            variables: {
                page_number: pageNumber,
                search: "",
            },
        }
    );

    useEffect(() => {
        if (!loading) {
            setTotalPageCount(data?.products.page_info.total_pages as number);
        }
    }, [data?.products.page_info.total_pages, loading]);

    return (
        <>
            <section>
                <div className="container mx-auto flex items-center justify-between py-6 px-4 font-lato">
                    <div className="flex flex-col gap-3">
                        <h1 className="font-monts text-3xl font-semibold">
                            Catalog
                        </h1>
                        <Breadcrump />
                    </div>
                    <Search />
                </div>
            </section>
            <section className="bg-gr-bg-gray py-6">
                <div className="container mx-auto flex gap-5 px-4 items-start">
                    <Filters />
                    <div className="w-3/4 flex flex-wrap justify-around gap-5">
                        {loading ? (
                            <SkeletonCatalogLoader />
                        ) : (
                            data?.products.items.map((item) => {
                                return (
                                    <ProductCard key={item?.sku} data={item} />
                                );
                            })
                        )}
                        <div className="w-full flex justify-center my-6">
                            <Pagination
                                count={totalPageCount}
                                showFirstButton
                                showLastButton
                                onChange={handleChangePageNumber}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
