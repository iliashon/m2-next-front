import Image from "next/image";

// Import icons
import trash from "@/assets/icons/heroiconsTrash.svg";
import useDeleteProductFromCart from "../../hooks/useDeleteProductFromCart";
import { ClipLoader } from "react-spinners";

const loaderProp = ({ src }: { src: string }) => {
    return src;
};

export default function ProductItem({
    image,
    price,
    name,
    quantity,
    sku,
    uid,
}: {
    image: string;
    price: number;
    name: string;
    quantity: number;
    sku: string;
    uid: string;
}) {
    const { loading, deleteProduct } = useDeleteProductFromCart();

    const deleteProductHandle = () => {
        deleteProduct(uid);
    };

    return (
        <div className="flex justify-between max-h-36 bg-white rounded-xl box-border py-4 px-8 font-lato">
            <div className="flex gap-5">
                <a
                    href=""
                    className="w-16 h-24 flex justify-center items-center"
                >
                    <Image
                        src={image}
                        alt=""
                        width={60}
                        height={80}
                        loader={loaderProp}
                    />
                </a>
                <div className="flex flex-col gap-2">
                    <a href="" className="font-monts text-base font-semibold">
                        {name}
                    </a>
                    <p className="text-sm text-gray-400">SKU {sku}</p>
                    <div className="flex gap-2 items-end">
                        <span className="text-green-500 text-xl">{price}$</span>
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
                    <span className="text-xl font-semibold">{quantity}</span>
                    <button className="w-9 h-9 rounded-md bg-gray-300">
                        +
                    </button>
                </div>
                <div className="flex flex-col">
                    <span className="text-green-500 text-xl">
                        {price * quantity}$
                    </span>
                    <span className="text-gray-400 text-sm">
                        {quantity} piece
                    </span>
                </div>
                <button
                    onClick={deleteProductHandle}
                    className="border w-10 h-10 flex justify-center items-center border-red-500 p-2 rounded-lg bg-red-100"
                >
                    {loading ? (
                        <ClipLoader color="white" size={20} />
                    ) : (
                        <Image src={trash} alt="" />
                    )}
                </button>
            </div>
        </div>
    );
}