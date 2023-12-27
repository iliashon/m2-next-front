"use client";

import Search from "../components/Search/Search";
import Filters from "../components/Filters/Filters";
import CatalogList from "../components/CatalogList/CatalogList";

export default function Catalog() {
    return (
        <>
            <section>
                <div className="container mx-auto flex items-center justify-between py-6 px-4 font-lato">
                    <h1 className="font-monts text-3xl font-semibold">
                        Catalog
                    </h1>
                    <Search />
                </div>
            </section>
            <section className="bg-gr-bg-gray py-6">
                <div className="container mx-auto flex gap-5 px-4 items-start">
                    <Filters />
                    <CatalogList />
                </div>
            </section>
        </>
    );
}
