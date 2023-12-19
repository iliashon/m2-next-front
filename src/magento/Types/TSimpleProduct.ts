import { TPriceRange } from "./TPriceRange";
import { TStockStatus } from "./TStockStatus";

export type TSimpleProduct = {
    name: string;
    sale: 1 | 0;
    new: 1 | 0;
    description: {
        html: string;
    };
    media_gallery: {
        disabled: boolean;
        label: string;
        position: number;
        url: string;
    }[];
    url_key: string;
    image: {
        url: string;
    };
    sku: string;
    stock_status: TStockStatus;
    price_range: TPriceRange;
    uid: string;
};
