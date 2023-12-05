"use client";

import Slider from "@/components/Slider/Slider";

const style = {
    categoryBlock:
        "bg-gr-green h-56 rounded-xl flex justify-center items-center text-4xl text-white",
};

export default function Home() {
    return (
        <div>
            <Slider />
            <section>
                <h2 className="text-center font-monts font-bold	text-3xl py-4">
                    Popular Categories
                </h2>
                <div className="container mx-auto p-4 grid grid-cols-6 grid-rows-2 gap-4">
                    <div className={`col-span-2 ${style.categoryBlock}`}>
                        Household chemicals
                    </div>
                    <div className={`col-span-2 ${style.categoryBlock}`}>
                        HoReCa
                    </div>
                    <div className={`col-span-2 ${style.categoryBlock}`}>
                        Cleaning
                    </div>
                    <div className={`col-span-3 ${style.categoryBlock}`}>
                        Food industry
                    </div>
                    <div className={`col-span-3 ${style.categoryBlock}`}>
                        Duty Box
                    </div>
                </div>
            </section>
        </div>
    );
}
