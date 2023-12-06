import Image from "next/image";

// Import Product photo
import productImg from "@/assets/images/product.jpeg";

// Import icon cart
import cart from "@/assets/icons/cart-white.png";
import check from "@/assets/icons/check.svg";

export default function ProductCard() {
    return (
        <div className="h-28rem w-72 bg-white rounded-xl box-border p-4 font-lato flex flex-col justify-between relative">
            <a href="" className="h-2/4 flex justify-center">
                <Image
                    src={productImg}
                    alt=""
                    className="h-full object-contain"
                />
            </a>
            <div className="flex flex-col -mt-4">
                <s className="text-xs text-gray-400">17.48&#8382;</s>
                <span className="text-red-500 text-2xl">
                    <b>12.50&#8382;</b>
                </span>
                <span className="text-xs text-gray-400">Art. 125440</span>
                <a href="" className="text-base">
                    <b>А4 furniture polishing agent</b>
                </a>
                <p className="text-xs text-gray-400">
                    Polishing agent for restoring and maintaining the natural
                    appearance of wooden surfaces. Cleans...
                </p>
            </div>
            <div className="flex flex-col gap-2">
                <button className="bg-gr-green w-full h-9 rounded-md text-white font-monts">
                    Add to cart
                </button>
                <div className="flex gap-1">
                    <p className="text-green-500">in stock</p>
                    <Image src={check} alt="" />
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
