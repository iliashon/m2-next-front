import { useState } from "react";
import { getCountries } from "../module-checkout/Api/get-countries";
import { TShippingAddress } from "../Types/checkout/TShippingAddress";
import { TCart } from "../Types/TCart";
import { TSetShippingAddress } from "../Types/checkout/TCartShippingAddress";
import { setShippingAddress } from "../module-checkout/Api/setShippingAddress";

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

    async function setShipping(data: TShippingAddress) {
        setLoading(true);

        const {
            email,
            firstName,
            lastName,
            city,
            company,
            country,
            streetAddres,
            phoneNumber,
            postalCode,
            province,
            country_code,
        } = data;

        const cart: TCart = JSON.parse(
            localStorage.getItem(CART_KEY_STORAGE) || ""
        );

        const shippingInfo = {
            cartId: cart.id,
            city,
            company,
            country_code,
            firstname: firstName,
            lastname: lastName,
            postcode: postalCode,
            region: province,
            street: streetAddres,
            telephone: phoneNumber,
        };

        const response = (await setShippingAddress(
            shippingInfo
        )) as TSetShippingAddress;

        setLocalStorage(
            JSON.stringify(response.setShippingAddressesOnCart.cart)
        );

        return true;
    }

    return { loading, setShipping, getCountriesData };
}
