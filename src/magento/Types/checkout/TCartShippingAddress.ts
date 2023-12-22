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
    selected_shipping_method: {
        amount: {
            value: number;
        };
        carrier_code: string;
        carrier_title: string;
        method_code: string;
        method_title: string;
        price_excl_tax: {
            value: number;
        };
        price_incl_tax: {
            value: number;
        };
    };
    available_shipping_methods: TAvailableShippingMethods[];
};

export type TSetShippingAddress = {
    setShippingAddressesOnCart: {
        cart: TCart;
    };
};

export type TSetGuestEmailOnCart = {
    setGuestEmailOnCart: {
        cart: TCart;
    };
};

export type TSetBillingAddress = {
    setBillingAddressOnCart: {
        cart: TCart;
    };
};

export type TSetPaymentMethod = {
    setPaymentMethodOnCart: {
        cart: TCart;
    };
};

export type TSetShippingMethod = {
    setShippingMethodsOnCart: {
        cart: TCart;
    };
};

export type TPlaceOrder = {
    placeOrder: {
        order: {
            order_number: string;
        };
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
