import Image from "next/image";

// Import product image
import productImage from "@/assets/images/product.jpeg";

// Import icons
import trash from "@/assets/icons/heroiconsTrash.svg";

export default function ProductItem() {
    return (
        <div className="flex justify-between max-h-36 bg-white rounded-xl box-border py-4 px-8 font-lato">
            <div className="flex gap-5">
                <a
                    href=""
                    className="w-16 h-24 flex justify-center items-center"
                >
                    <Image src={productImage} alt="" />
                </a>
                <div className="flex flex-col gap-2">
                    <a href="" className="font-monts text-base font-semibold">
                        А4 furniture polishing agent
                    </a>
                    <p className="text-sm text-gray-400">Art. 125440</p>
                    <div className="flex gap-2 items-end">
                        <span className="text-green-500 text-xl">
                            12.50&#8382;
                        </span>
                        <span className="text-gray-400 text-xs">
                            / unit price
                        </span>
                    </div>
                </div>
            </div>
            <div className="flex gap-8 items-center">
                <div className="flex items-center gap-4">
                    <button className="w-9 h-9 rounded-md bg-gray-300">
                        -
                    </button>
                    <span className="text-xl font-semibold">2</span>
                    <button className="w-9 h-9 rounded-md bg-gray-300">
                        +
                    </button>
                </div>
                <div className="flex flex-col">
                    <span className="text-green-500 text-xl">25.00&#8382;</span>
                    <span className="text-gray-400 text-sm">2 piece</span>
                </div>
                <button className="border border-red-500 p-2 rounded-lg bg-red-100">
                    <Image src={trash} alt="" />
                </button>
            </div>
        </div>
    );
}
