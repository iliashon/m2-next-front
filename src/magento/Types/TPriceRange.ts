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
