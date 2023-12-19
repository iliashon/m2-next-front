import { TCart } from "@/magento/Types/TCart";
import useActionWithCart from "@/magento/hooks/useActionWithCart";
import { Alert } from "@mui/material";
import { useState } from "react";
import { ClipLoader } from "react-spinners";

export default function PromoApply({
    cart,
}: {
    cart: TCart | null | undefined;
}) {
    const [value, setValue] = useState<string>("");

    const [error, setError] = useState(false);

    const { loading, applyCoupon, removeCoupon } = useActionWithCart();

    const sendCoupon = async () => {
        const errorCheck = await applyCoupon(value);

        setError(errorCheck);
    };

    const deleteCoupon = () => {
        removeCoupon();
    };

    console.log(error);

    return (
        <div className="flex flex-col gap-3">
            <h4 className="text-base font-semibold">Discount code:</h4>
            <div className="flex gap-3">
                <input
                    onChange={(event) => setValue(event.target.value)}
                    className="bg-gray-200 w-3/4 rounded-md p-2 h-9 box-border"
                    type="text"
                    disabled={cart?.applied_coupons ? true : false}
                    value={
                        cart?.applied_coupons
                            ? cart.applied_coupons[0].code
                            : value
                    }
                    placeholder={"PROMO"}
                />
                <button
                    onClick={cart?.applied_coupons ? deleteCoupon : sendCoupon}
                    disabled={loading ? true : false}
                    className={`${
                        cart?.applied_coupons ? "bg-red-500" : "bg-gr-green"
                    } w-1/5 h-9 rounded-md text-white flex justify-center items-center font-monts text-sm`}
                >
                    {loading ? (
                        <ClipLoader size={25} color="white" />
                    ) : cart?.applied_coupons ? (
                        "Delete"
                    ) : (
                        "Apply"
                    )}
                </button>
            </div>
            {error ? (
                <Alert severity="error">This coupon does not exist</Alert>
            ) : (
                ""
            )}
        </div>
    );
}
