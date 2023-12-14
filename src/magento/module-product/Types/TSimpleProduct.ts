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
                price_range: {
                    maximum_price: {
                        regular_price: {
                            value: number;
                            currency: string;
                        };
                    };
                };
            }
        ];
    };
};

export type TStockStatus = "IN_STOCK" | "OUT_OF_STOCK";
