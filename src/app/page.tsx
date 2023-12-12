// "use client";

import RecomendedProducts from "@/components/widgets/RecomendedProducts/RecomendedProducts";
import Slider from "@/components/Slider/Slider";
import TopCategories from "@/components/widgets/TopCategories/TopCategories";

export default function Home() {
    return (
        <div>
            <Slider />
            <TopCategories />
            <RecomendedProducts />
        </div>
    );
}
