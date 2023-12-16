export type TNewCart = {
    createEmptyCart: string;
};

export type TCartProduct = {
    product: {
        name: string;
        image: {
            url: string;
        };
        sku: string;
        price_range: {
            maximum_price: {
                regular_price: {
                    value: number;
                };
            };
        };
    };
    quantity: number;
    prices: {
        row_total: {
            value: number;
        };
    };
};

export type TAddToCartSimpleProduct = {
    addSimpleProductsToCart: {
        cart: {
            id: string;
            items: TCartProduct[];
            total_quantity: number;
            prices: {
                grand_total: {
                    value: number;
                };
            };
        };
    };
};

export type TProductsCart = {
    id: string;
    items: TCartProduct[];
    total_quantity: number;
    prices: {
        grand_total: {
            value: number;
        };
    };
};
