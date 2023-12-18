import { TCartPrices } from "./TCartPrices";
import { TCartSimpleProduct } from "./TCartSimpleProduct";

export type TAddToCartSimpleProduct = {
    addSimpleProductsToCart: {
        cart: {
            id: string;
            items: TCartSimpleProduct[];
            total_quantity: number;
            prices: TCartPrices;
        };
    };
};
