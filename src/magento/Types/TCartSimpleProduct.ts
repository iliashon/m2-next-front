import { TSimpleProduct } from "./TSimpleProduct";

export type TCartSimpleProduct = {
    product: TSimpleProduct;
    quantity: number;
    prices: {
        row_total: {
            value: number;
        };
    };
    uid: string;
};
