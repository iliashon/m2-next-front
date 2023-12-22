import { TCart } from "@/magento/Types/TCart";
import { useEffect, useState } from "react";

export default function useCheckTotalQuantity() {
    const [quantity, setQuantity] = useState(0);

    useEffect(() => {
        const getQuantity = () => {
            if (localStorage.getItem("cart")) {
                const quantity = JSON.parse(
                    localStorage.getItem("cart") || ""
                ) as TCart;
                setQuantity(quantity.total_quantity);
            } else {
                setQuantity(0);
            }
        };

        window.addEventListener("storage", () => getQuantity());

        getQuantity();
    });

    return quantity;
}
