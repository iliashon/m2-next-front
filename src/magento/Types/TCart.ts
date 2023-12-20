import { TCartPrices } from "./TCartPrices";
import { TCartProduct } from "./TCartProduct";
import { TCartShippingAddress } from "./checkout/TCartShippingAddress";

export type TCart = {
    applied_coupons: TCoupons[];
    shipping_addresses: TCartShippingAddress;
    id: string;
    items: TCartProduct[];
    total_quantity: number;
    prices: TCartPrices;
};

export type TCoupons = {
    code: string;
};
