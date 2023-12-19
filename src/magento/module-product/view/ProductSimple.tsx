//
// Import graphql query
// ----------------------------
import { getSimpleProduct } from "../Api/get-product";

//
// Import components
// -----------------------------
import Image from "next/image";
import StockStatus from "@/magento/module-product/components/StockStatus/StockStatus";
import Breadcrump from "@/components/Breadcrump/Breadcrump";
import AddToCartBox from "../components/AddToCartBox/AddToCartBox";
import PriceBox from "../components/PriceBox/PriceBox";
import Badges from "@/magento/components/Badges/Badges";
import ProductGallery from "../components/ProductGallery/ProductGallery";

export default async function ProductSimple({ url_key }: { url_key: string }) {
    const data = (await getSimpleProduct(url_key)).products.items[0];

    const { name, description, image, sku, stock_status, price_range } = data;

    return (
        <section className="bg-gr-bg-gray pb-24">
            <div className="container mx-auto p-4 font-lato">
                <Breadcrump />
            </div>
            <div className="container mx-auto px-4 py-5 flex gap-10 font-monts">
                <ProductGallery data={data} />
                <div className="w-3/5 flex flex-col gap-5">
                    <h1 className="text-3xl font-semibold">{name}</h1>
                    <div className="flex items-center gap-4 font-lato">
                        <p className="text-sm text-gray-400">SKU {sku}</p>
                        <StockStatus stock_status={stock_status} />
                    </div>
                    <div>
                        <h4 className="text-base font-semibold">Description</h4>
                        <div
                            className="font-lato text-sm font-normal text-gray-400"
                            dangerouslySetInnerHTML={{
                                __html: description.html,
                            }}
                        ></div>
                    </div>
                    <div className="flex flex-col">
                        <PriceBox price={price_range} />
                    </div>
                    <div className="flex gap-6">
                        <AddToCartBox
                            productInfo={{
                                name,
                                image: image.url,
                                sku,
                                price: price_range.maximum_price.regular_price
                                    .value,
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
