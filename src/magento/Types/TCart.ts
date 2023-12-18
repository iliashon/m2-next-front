import { TCartPrices } from "./TCartPrices";
import { TCartProduct } from "./TCartProduct";

export type TCart = {
    id: string;
    items: TCartProduct[];
    total_quantity: number;
    prices: TCartPrices;
};
