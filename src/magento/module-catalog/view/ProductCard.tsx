import Image from "next/image";

// Import icon cart
import check from "@/assets/icons/check.svg";
import cross from "@/assets/icons/cross.svg";
import { IRecomendedProduct } from "@/magento/module_widget/Api/get_recomended_products";
import AddToCartButton from "../components/AddToCartButton";
import StockStatus from "../components/StockStatus";

// Type props
interface PropsIRecProduct {
    data: IRecomendedProduct;
}

export default function ProductCard(props: PropsIRecProduct) {
    return (
        <div className="h-96 w-72 bg-white rounded-xl box-border p-4 font-lato flex flex-col justify-between relative">
            <a
                href={`/${props.data.url_key}`}
                className="h-2/4 flex justify-center"
            >
                <Image
                    src={props.data.image.url}
                    alt=""
                    className="h-full object-contain"
                    width={200}
                    height={200}
                />
            </a>
            <div className="flex flex-col -mt-4">
                <span className="text-gr-green text-2xl">
                    <b>
                        {
                            props.data.price_range.maximum_price.regular_price
                                .value
                        }
                        $
                    </b>
                </span>
                <span className="text-xs text-gray-400">
                    SKU {props.data.sku}
                </span>
                <a href={`/${props.data.url_key}`} className="text-base">
                    <b>{props.data.name}</b>
                </a>
            </div>
            <div className="flex flex-col gap-2">
                <AddToCartButton
                    stock_status={props.data.stock_status}
                    sku={props.data.sku}
                />
                <StockStatus stock_status={props.data.stock_status} />
            </div>
            <div className="absolute text-xs top-3 right-3 flex gap-1">
                <span className="bg-red-400 px-2 py-1 rounded-lg text-white">
                    <b>sale</b>
                </span>
                <span className="bg-teal-700 px-2 py-1 rounded-lg text-white">
                    <b>best seller</b>
                </span>
            </div>
        </div>
    );
}
