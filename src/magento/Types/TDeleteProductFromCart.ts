import { TCartProduct } from "./TCartProduct";

export type TDeleteProductFromCart = {
    removeItemFromCart: {
        cart: {
            id: string;
            items: TCartProduct[];
            total_quantity: number;
            prices: {
                grand_total: {
                    value: number;
                };
                discounts: {
                    amount: {
                        value: number;
                    };
                    label: string;
                };
                subtotal_excluding_tax: {
                    value: number;
                };
            };
        };
    };
};
