import { TCartPrices } from "./TCartPrices";
import { TCartProduct } from "./TCartProduct";

export type TCart = {
    applied_coupons: TCoupons[];
    id: string;
    items: TCartProduct[];
    total_quantity: number;
    prices: TCartPrices;
};

export type TCoupons = {
    code: string;
};
