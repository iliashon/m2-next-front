import { TSimpleProduct } from "./TSimpleProduct";

export type TCatalogProducts = {
    products: {
        page_info: {
            total_pages: number;
        };
        items: TSimpleProduct[];
    };
};
