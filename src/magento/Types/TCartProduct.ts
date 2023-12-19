import { TSimpleProduct } from "./TSimpleProduct";

export type TCartProduct = {
    product: TSimpleProduct;
    quantity: number;
    prices: {
        row_total: {
            value: number;
        };
    };
    uid: string;
};
