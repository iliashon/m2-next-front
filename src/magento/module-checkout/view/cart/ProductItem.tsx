import Image from "next/image";

// Import icons
import trash from "@/assets/icons/heroiconsTrash.svg";
import { ClipLoader } from "react-spinners";
import PriceBoxCartItem from "../../components/PriceBoxCart/PriceBoxCartItem";
import { TPriceRange } from "@/magento/Types/TPriceRange";
import ChangeQuantityBox from "../../components/ChangeQuantityBox/ChangeQuantityBox";
import useActionWithCart from "@/magento/hooks/useActionWithCart";

export default function ProductItem({
    image,
    price,
    name,
    quantity,
    sku,
    uid,
    url_key,
}: {
    image: string;
    price: TPriceRange;
    name: string;
    quantity: number;
    sku: string;
    uid: string;
    url_key: string;
}) {
    const { loading, deleteProduct } = useActionWithCart();

    const deleteProductHandle = () => {
        deleteProduct(uid);
    };

    return (
        <div className="flex justify-between max-h-36 bg-white rounded-xl box-border py-4 px-8 font-lato">
            <div className="flex gap-5">
                <a
                    href={`/${url_key}`}
                    className="w-16 h-24 flex justify-center items-center"
                >
                    <Image
                        src={image}
                        alt=""
                        className="w-auto h-auto"
                        width={60}
                        height={80}
                        priority={true}
                    />
                </a>
                <div className="flex flex-col gap-2">
                    <a
                        href={`/${url_key}`}
                        className="font-monts text-base font-semibold"
                    >
                        {name}
                    </a>
                    <p className="text-sm text-gray-400">SKU {sku}</p>
                    <div className="flex gap-2 items-end">
                        <PriceBoxCartItem price={price} />
                        <span className="text-gray-400 text-xs">
                            / unit price
                        </span>
                    </div>
                </div>
            </div>
            <div className="flex gap-8 items-center">
                <ChangeQuantityBox quantity={quantity} cartItemUid={uid} />
                <div className="flex flex-col">
                    <span className="text-green-500 text-xl">
                        {price.maximum_price.final_price?.value * quantity}$
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
