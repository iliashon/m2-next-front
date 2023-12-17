import { GetCategories } from "@/magento/module_widget/Api/get_categories";
import Link from "next/link";
import React from "react";

const style = {
    categoryBlock:
        "bg-gr-green h-56 rounded-xl flex justify-center items-center text-4xl text-white",
};

export default async function TopCategories() {
    const data = await GetCategories();

    return (
        <section className="py-6">
            <h2 className="text-center font-monts font-bold	text-3xl py-4">
                Categories
            </h2>
            <div className="container mx-auto p-4 grid grid-cols-6 grid-rows-2 gap-4">
                <Link
                    href={`/catalog/${data.categories.items[0].url_key}`}
                    className={`col-span-2 ${style.categoryBlock}`}
                >
                    {data.categories.items[0].name}
                </Link>
                <Link
                    href={`/catalog/${data.categories.items[0].url_key}`}
                    className={`col-span-2 ${style.categoryBlock}`}
                >
                    {data.categories.items[0].name}
                </Link>
                <Link
                    href={`/catalog/${data.categories.items[0].url_key}`}
                    className={`col-span-2 ${style.categoryBlock}`}
                >
                    {data.categories.items[0].name}
                </Link>
                <Link
                    href={`/catalog/${data.categories.items[0].url_key}`}
                    className={`col-span-3 ${style.categoryBlock}`}
                >
                    {data.categories.items[0].name}
                </Link>
                <Link
                    href={`/catalog/${data.categories.items[0].url_key}`}
                    className={`col-span-3 ${style.categoryBlock}`}
                >
                    {data.categories.items[0].name}
                </Link>
            </div>
        </section>
    );
}
