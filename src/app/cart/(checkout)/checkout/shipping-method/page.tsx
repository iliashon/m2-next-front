import ShippingMethods from "@/magento/module-checkout/components/Checkout/ShippingMethods/ShippingMethods";
import ChoiceShippingMethod from "@/magento/module-checkout/view/checkout/ChoiceShippingMethod";
import React from "react";

export default function page() {
    return (
        <>
            <ChoiceShippingMethod />
        </>
    );
}
