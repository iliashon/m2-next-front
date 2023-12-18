export type TCartPrices = {
    grand_total: {
        value: number;
    };
    discounts: TDiscounts[];
    subtotal_excluding_tax: {
        value: number;
    };
};

export type TDiscounts = {
    amount: {
        value: number;
    };
    label: string;
};
