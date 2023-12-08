import Image from "next/image";

// Import product photo
import productPhoto from "@/assets/images/product.jpeg";

// Import icons
import check from "@/assets/icons/check.svg";

export default function page() {
    return (
        <section className="bg-gr-bg-gray">
            <div className="container mx-auto p-4 font-lato">
                <ul className="flex gap-1 font-normal text-gray-400 text-sm">
                    <li>Home /</li>
                    <li>Products /</li>
                    <li className="text-gray-500">
                        А4 furniture polishing agent
                    </li>
                </ul>
            </div>
            <div className="container mx-auto px-4 py-5 flex gap-10 font-monts">
                <div className="w-2/5 flex justify-center items-center h-28rem bg-white rounded-xl">
                    <Image src={productPhoto} alt="" />
                </div>
                <div className="w-3/5 flex flex-col gap-5">
                    <h1 className="text-3xl font-semibold">
                        А4 furniture polishing agent
                    </h1>
                    <div className="flex items-center gap-4 font-lato">
                        <p className="text-sm text-gray-400">Art. 125440</p>
                        <div className="flex gap-1">
                            <p className="text-green-500">in stock</p>
                            <Image src={check} alt="" />
                        </div>
                    </div>
                    <div>
                        <h4 className="text-base font-semibold">Description</h4>
                        <p className="font-lato text-sm font-normal text-gray-400">
                            The product refreshes and deodorizes the air,
                            leaving a long-lasting aroma. Ideal against
                            unpleasant odors in buildings. The product refreshes
                            and deodorizes the air, leaving a long-lasting
                            aroma. Ideal against unpleasant odors in buildings.
                        </p>
                    </div>
                    <div className="flex flex-col">
                        <s className="text-base text-gray-400">17.48&#8382;</s>
                        <span className="text-3xl font-lato text-red-500">
                            <b>12.50&#8382;</b>
                        </span>
                    </div>
                    <div className="flex gap-6">
                        <div className="flex items-center gap-4">
                            <button className="w-9 h-9 rounded-md bg-gray-300">
                                -
                            </button>
                            <span className="text-xl font-semibold">0</span>
                            <button className="w-9 h-9 rounded-md bg-gray-300">
                                +
                            </button>
                        </div>
                        <button className="bg-gr-green w-44 h-9 rounded-md text-white font-monts">
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
