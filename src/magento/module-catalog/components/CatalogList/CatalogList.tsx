"use client";

import React, { useEffect, useState } from "react";
import SkeletonCatalogLoader from "../SkeletonCatalogLoader/SkeletonCatalogLoader";
import ProductCard from "../../view/ProductCard";
import { Pagination } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { TCatalogProducts } from "@/magento/Types/TCatalogProducts";
import { useQuery } from "@apollo/client";
import { GET_CATALOG_PRODUCTS } from "../../Api/get_catalog_products";

export default function CatalogList({ cat_uid }: { cat_uid?: string }) {
    const [pageNumber, setPageNumber] = useState(1);

    const [totalPageCount, setTotalPageCount] = useState<number>(1);

    const urlParams = useSearchParams();

    const handleChangePageNumber = (
        event: React.ChangeEvent<unknown>,
        value: number
    ) => {
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
        setPageNumber(value);
    };

    const { loading, data, error } = useQuery<TCatalogProducts>(
        GET_CATALOG_PRODUCTS,
        {
            variables: {
                page_number: pageNumber,
                search: urlParams.get("search"),
                cat_uid: cat_uid ? cat_uid : "NDc=",
            },
        }
    );

    useEffect(() => {
        if (!loading) {
            if (data?.products.page_info.total_pages !== totalPageCount) {
                setPageNumber(1);
            }
            setTotalPageCount(data?.products.page_info.total_pages as number);
        }
    }, [data?.products.page_info.total_pages, loading]);

    return (
        <div className="w-3/4 flex flex-wrap justify-around gap-5">
            {loading ? (
                <SkeletonCatalogLoader />
            ) : (
                data?.products.items.map((item) => {
                    return <ProductCard key={item?.sku} data={item} />;
                })
            )}
            <div className="w-full flex justify-center my-6">
                <Pagination
                    count={totalPageCount}
                    page={pageNumber}
                    showFirstButton
                    showLastButton
                    onChange={handleChangePageNumber}
                />
            </div>
        </div>
    );
}
