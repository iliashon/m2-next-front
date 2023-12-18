import { TCartPrices } from "./TCartPrices";
import { TCartProduct } from "./TCartProduct";

export type TDeleteProductFromCart = {
    removeItemFromCart: {
        cart: {
            id: string;
            items: TCartProduct[];
            total_quantity: number;
            prices: TCartPrices;
        };
    };
};
