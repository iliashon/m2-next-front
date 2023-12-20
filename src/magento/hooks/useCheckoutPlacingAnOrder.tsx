import { useState } from "react";
import { getCountries } from "../module-checkout/Api/get-countries";

const CART_KEY_STORAGE = "cart";

export default function useCheckoutPlacingAnOrder() {
    const [loading, setLoading] = useState<boolean>(false);

    function setLocalStorage(data: string) {
        localStorage.setItem(CART_KEY_STORAGE, data);

        window.dispatchEvent(new Event("storage"));

        setLoading(false);
    }

    async function getCountriesData() {
        setLoading(true);

        const data = (await getCountries())?.countries;

        setLoading(false);

        return data;
    }

    async function setShippingAddress() {}

    return { loading, setShippingAddress, getCountriesData };
}
