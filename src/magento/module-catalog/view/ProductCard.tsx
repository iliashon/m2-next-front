import Image from "next/image";

// Import icon cart
import AddToCartButton from "../components/AddToCartButton";
import StockStatus from "../components/StockStatus";
import Badges from "../components/Badges/Badges";
import PriceBox from "@/magento/module-product/components/PriceBox/PriceBox";
import { TSimpleProduct } from "@/magento/Types/TSimpleProduct";

export default function ProductCard({ data }: { data: TSimpleProduct }) {
    return (
        <div className="h-96 w-72 bg-white rounded-xl box-border p-4 font-lato flex flex-col justify-between relative">
            <a href={`/${data.url_key}`} className="h-2/4 flex justify-center">
                <Image
                    src={data.image.url}
                    alt=""
                    className="h-auto w-auto object-contain"
                    priority={true}
                    width={200}
                    height={200}
                />
            </a>
            <div className="flex flex-col -mt-4">
                <PriceBox price={data.price_range} />
                <span className="text-xs text-gray-400">SKU {data.sku}</span>
                <a href={`/${data.url_key}`} className="text-base">
                    <b>{data.name}</b>
                </a>
            </div>
            <div className="flex flex-col gap-2">
                <AddToCartButton
                    stock_status={data.stock_status}
                    sku={data.sku}
                />
                <StockStatus stock_status={data.stock_status} />
            </div>
            <Badges newAtr={data.new} saleAtr={data.sale} />
        </div>
    );
}
