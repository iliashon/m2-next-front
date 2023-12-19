import { TCart } from "./TCart";

export type TDeleteProductFromCart = {
    removeItemFromCart: {
        cart: TCart;
    };
};
