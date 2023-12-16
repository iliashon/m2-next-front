import { TProductsCart } from "@/magento/module-product/Types/TCart";
import { useEffect, useState } from "react";

export default function useCheckTotalQuantity() {
    const [quantity, setQuantity] = useState(0);

    useEffect(() => {
        const getQuantity = () => {
            const quantity = JSON.parse(
                localStorage.getItem("cart") || ""
            ) as TProductsCart;
            setQuantity(quantity.total_quantity);
        };

        window.addEventListener("storage", () => getQuantity());

        getQuantity();
    });

    return quantity;
}
