import { TCart } from "../TCart";

export type TCartShippingAddress = {
    firstname: string;
    lastname: string;
    street: string;
    telephone: string;
    postcode: string;
    city: string;
    company: string;
    country: {
        label: string;
        code: string;
    };
    available_shipping_methods: TAvailableShippingMethods[];
};

export type TSetShippingAddress = {
    setShippingAddressesOnCart: {
        cart: TCart;
    };
};

export type TAvailableShippingMethods = {
    amount: {
        value: number;
    };
    available: string;
    carrier_code: string;
    carrier_title: string;
    error_message: string;
    method_code: string;
    method_title: string;
    price_excl_tax: {
        value: number;
    };
    price_incl_tax: {
        value: number;
    };
};
