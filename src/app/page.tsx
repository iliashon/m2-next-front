"use client";

import RecomendedProducts from "@/components/widgets/RecomendedProducts/RecomendedProducts";
import Slider from "@/components/Slider/Slider";
import { GET_CATEGORIES, ICategories } from "@/graphql/query/get_categories";
import { useQuery } from "@apollo/client";
import Link from "next/link";

const style = {
    categoryBlock:
        "bg-gr-green h-56 rounded-xl flex justify-center items-center text-4xl text-white",
};

export default function Home() {
    const { loading, data, error } = useQuery<ICategories>(GET_CATEGORIES);

    return (
        <div>
            <Slider />
            {data && (
                <section>
                    <h2 className="text-center font-monts font-bold	text-3xl py-4">
                        Categories
                    </h2>
                    <div className="container mx-auto p-4 grid grid-cols-6 grid-rows-2 gap-4">
                        <Link
                            href={`/catalog/${data.categories.items[0].children[0].url_key}`}
                            className={`col-span-2 ${style.categoryBlock}`}
                        >
                            {data.categories.items[0].children[0].name}
                        </Link>
                        <Link
                            href={`/catalog/${data.categories.items[0].children[1].url_key}`}
                            className={`col-span-2 ${style.categoryBlock}`}
                        >
                            {data.categories.items[0].children[1].name}
                        </Link>
                        <Link
                            href={`/catalog/${data.categories.items[0].children[2].url_key}`}
                            className={`col-span-2 ${style.categoryBlock}`}
                        >
                            {data.categories.items[0].children[2].name}
                        </Link>
                        <Link
                            href={`/catalog/${data.categories.items[0].children[3].url_key}`}
                            className={`col-span-3 ${style.categoryBlock}`}
                        >
                            {data.categories.items[0].children[3].name}
                        </Link>
                        <Link
                            href={`/catalog/${data.categories.items[0].children[4].url_key}`}
                            className={`col-span-3 ${style.categoryBlock}`}
                        >
                            {data.categories.items[0].children[4].name}
                        </Link>
                    </div>
                </section>
            )}
            <RecomendedProducts />
        </div>
    );
}
