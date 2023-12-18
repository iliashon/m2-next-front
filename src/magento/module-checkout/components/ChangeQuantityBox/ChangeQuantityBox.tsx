import { ClipLoader } from "react-spinners";
import useUpdateProductQuantityFromCart from "../../hooks/useUpdateProductQuantityFromCart";

const style = {
    button: "w-9 h-9 rounded-md bg-gray-300",
};

const MAX_COUNT_PRODUCT = 99;

export default function ChangeQuantityBox({
    quantity,
    cartItemUid,
}: {
    quantity: number;
    cartItemUid: string;
}) {
    const { loading, updateItemInCart } = useUpdateProductQuantityFromCart();

    const handleChangeQuantityPlus = () => {
        updateItemInCart(cartItemUid, quantity + 1);
    };

    const handleChangeQuantityMinus = () => {
        updateItemInCart(cartItemUid, quantity - 1);
    };

    return (
        <div className="flex items-center gap-4">
            <button
                onClick={handleChangeQuantityMinus}
                className={`${style.button} ${
                    quantity === 1 ? "opacity-50" : ""
                }`}
                disabled={quantity === 1 ? true : false}
            >
                -
            </button>
            <span className="text-xl font-semibold w-7 flex justify-center items-center">
                {loading ? <ClipLoader color="black" size={25} /> : quantity}
            </span>
            <button
                onClick={handleChangeQuantityPlus}
                className={`${style.button} ${
                    quantity === MAX_COUNT_PRODUCT ? "opacity-50" : ""
                }`}
                disabled={quantity === MAX_COUNT_PRODUCT ? true : false}
            >
                +
            </button>
        </div>
    );
}
