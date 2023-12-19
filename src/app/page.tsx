// "use client";

import RecomendedProducts from "@/magento/module_widget/view/RecomendedProducts/RecomendedProducts";
import Slider from "@/magento/module_widget/view/Slider/Slider";
import TopCategories from "@/magento/module_widget/view/TopCategories/TopCategories";

export async function generateMetadata() {
    return {
        title: "Home",
    };
}

export default function Home() {
    return (
        <div>
            <Slider />
            <TopCategories />
            <RecomendedProducts />
        </div>
    );
}
