export type SimpleProduct = {
    products: {
        items: [
            {
                name: string;
                description: {
                    html: string;
                };
                url_key: string;
                image: {
                    url: string;
                };
                sku: string;
                stock_status: TStockStatus;
                price_range: TPriceRange;
            }
        ];
    };
};

export type TStockStatus = "IN_STOCK" | "OUT_OF_STOCK";

export type TPriceRange = {
    maximum_price: {
        regular_price: {
            value: number;
        };
        discount: {
            amount_off: number;
            percent_off: number;
        };
        final_price: {
            value: number;
        };
    };
};
