import React from "react";
import ProductCard from "../../ProductCard/ProductCard";
import { useQuery } from "@apollo/client";
import {
    GET_RECOMENDED_PRODUCTS,
    IRecomendedProducts,
} from "@/graphql/query/get_recomended_products";

export default function RecomendedProducts() {
    const { loading, data, error } = useQuery<IRecomendedProducts>(
        GET_RECOMENDED_PRODUCTS
    );

    console.log(data?.products.items);

    return (
        <section className="bg-gr-bg-gray">
            <h2 className="text-center font-monts font-bold	text-3xl py-4">
                Recommended
            </h2>

            {data && (
                <div className="container mx-auto p-4 flex gap-8 flex-wrap justify-evenly">
                    {data?.products.items.map((item) => {
                        return <ProductCard key={item.sku} data={item} />;
                    })}
                </div>
            )}
        </section>
    );
}
