import Image from "next/image";

// Import Product photo
import productImg from "@/assets/images/product.jpeg";

// Import icon cart
import check from "@/assets/icons/check.svg";
import cross from "@/assets/icons/cross.svg";
import { IRecomendedProduct } from "@/graphql/query/get_recomended_products";

// Type props
interface PropsIRecProduct {
    data: IRecomendedProduct;
}

// Loader src Image
const loaderProp = ({ src }: any) => {
    return src;
};

export default function ProductCard(props: PropsIRecProduct) {
    console.log(props.data.image.url);
    return (
        <div className="h-28rem w-72 bg-white rounded-xl box-border p-4 font-lato flex flex-col justify-between relative">
            <a
                href={`/${props.data.url_key}`}
                className="h-2/4 flex justify-center"
            >
                <Image
                    src={props.data.image.url}
                    loader={loaderProp}
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
                        &#8382;
                    </b>
                </span>
                <span className="text-xs text-gray-400">
                    SKU {props.data.sku}
                </span>
                <a href="/product" className="text-base">
                    <b>{props.data.name}</b>
                </a>
                <div
                    className="text-xs text-gray-400 h-8 overflow-hidden"
                    dangerouslySetInnerHTML={{
                        __html: props.data.short_description.html,
                    }}
                ></div>
            </div>
            <div className="flex flex-col gap-2">
                <button
                    className={`bg-gr-green w-full h-9 rounded-md text-white font-monts ${
                        props.data.stock_status === "IN_STOCK"
                            ? "opacity-100"
                            : "opacity-50"
                    }`}
                    disabled={
                        props.data.stock_status === "IN_STOCK" ? false : true
                    }
                >
                    Add to cart
                </button>
                <div className="flex gap-1">
                    <p
                        className={
                            props.data.stock_status === "IN_STOCK"
                                ? "text-green-500"
                                : "text-red-400"
                        }
                    >
                        {props.data.stock_status === "IN_STOCK"
                            ? "in stock"
                            : "out of stock"}
                    </p>
                    <Image
                        src={
                            props.data.stock_status === "IN_STOCK"
                                ? check
                                : cross
                        }
                        alt="Icons"
                    />
                </div>
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
