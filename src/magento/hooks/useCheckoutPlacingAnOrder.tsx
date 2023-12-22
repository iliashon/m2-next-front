import { useState } from "react";
import { getCountries } from "../module-checkout/Api/get-countries";
import { TShippingAddress } from "../Types/checkout/TShippingAddress";
import { TCart } from "../Types/TCart";
import {
    TPlaceOrder,
    TSetBillingAddress,
    TSetGuestEmailOnCart,
    TSetPaymentMethod,
    TSetShippingAddress,
    TSetShippingMethod,
} from "../Types/checkout/TCartShippingAddress";
import { setShippingAddress } from "../module-checkout/Api/setShippingAddress";
import { setShippingMethod } from "../module-checkout/Api/setShippingMethod";
import { setGuestEmailOnCart } from "../module-checkout/Api/setGuestEmailOnCart";
import { setBillingAddress } from "../module-checkout/Api/setBillingAddress";
import { setPaymentMethod } from "../module-checkout/Api/setPaymentMethod";
import { placeOrder } from "../module-checkout/Api/placeOrder";

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

    async function placeOrderPost(payment_method_code: string) {
        setLoading(true);

        const cart: TCart = JSON.parse(
            localStorage.getItem(CART_KEY_STORAGE) || ""
        );

        const resBilling = (await setBillingAddress({
            cartId: cart.id,
            sameAsShipping: true,
        })) as TSetBillingAddress;

        localStorage.setItem(
            CART_KEY_STORAGE,
            JSON.stringify(resBilling.setBillingAddressOnCart.cart)
        );

        const resPaymentMethod = (await setPaymentMethod({
            cartId: cart.id,
            payment_method_code,
        })) as TSetPaymentMethod;

        localStorage.setItem(
            CART_KEY_STORAGE,
            JSON.stringify(resPaymentMethod.setPaymentMethodOnCart.cart)
        );

        const resPlaceOrder = (await placeOrder({
            cartId: cart.id,
        })) as TPlaceOrder;

        localStorage.setItem(
            "order",
            JSON.stringify(resPlaceOrder.placeOrder.order.order_number)
        );

        window.dispatchEvent(new Event("storage"));

        setLoading(false);

        return true;
    }

    async function setShippingMethodPost(
        method_code: string,
        carrier_code: string
    ) {
        setLoading(true);

        const cart: TCart = JSON.parse(
            localStorage.getItem(CART_KEY_STORAGE) || ""
        );

        const response = (await setShippingMethod({
            cartId: cart.id,
            carrier_code: carrier_code,
            method_code: method_code,
        })) as TSetShippingMethod;

        setLocalStorage(JSON.stringify(response.setShippingMethodsOnCart.cart));

        return true;
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

        const resEmail = (await setGuestEmailOnCart({
            cartId: cart.id,
            email: email,
        })) as TSetGuestEmailOnCart;

        localStorage.setItem(
            CART_KEY_STORAGE,
            JSON.stringify(resEmail.setGuestEmailOnCart.cart)
        );

        const response = (await setShippingAddress(
            shippingInfo
        )) as TSetShippingAddress;

        setLocalStorage(
            JSON.stringify(response.setShippingAddressesOnCart.cart)
        );

        return true;
    }

    return {
        loading,
        setShipping,
        getCountriesData,
        setShippingMethodPost,
        placeOrderPost,
    };
}
