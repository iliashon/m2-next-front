import React from "react";
import ProductCard from "../../ProductCard/ProductCard";
import { GetRecommendedProduct } from "@/graphql/query/get_recomended_products";

export default async function RecomendedProducts() {
    const data = (await GetRecommendedProduct()).products.items;

    return (
        <section className="bg-gr-bg-gray py-6">
            <h2 className="text-center font-monts font-bold	text-3xl py-4">
                Recommended
            </h2>

            {data && (
                <div className="container mx-auto p-4 flex gap-8 flex-wrap justify-evenly">
                    {data?.map((item) => {
                        return <ProductCard key={item.sku} data={item} />;
                    })}
                </div>
            )}
        </section>
    );
}
