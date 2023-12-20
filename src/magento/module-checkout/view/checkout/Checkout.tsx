"use client";

import React, { useEffect, useState } from "react";
import ShippingAddress from "../../components/Checkout/ShippingAddress/ShippingAddress";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { TCountry } from "@/magento/Types/checkout/TCountries";
import useCheckoutPlacingAnOrder from "@/magento/hooks/useCheckoutPlacingAnOrder";
import { ClipLoader } from "react-spinners";

export default function Checkout() {
    const [countries, setCountries] = useState<TCountry[]>();

    const { loading, getCountriesData } = useCheckoutPlacingAnOrder();

    async function setStateCountries() {
        const data = await getCountriesData();
        setCountries(data);
    }

    useEffect(() => {
        setStateCountries();
    });

    return (
        <section className="checkout-section">
            <div className="container mx-auto p-4">
                <h2 className="my-5 text-3xl font-lato">Checkout</h2>
                <div className="flex justify-between">
                    <div className="w-3/5 font-monts">
                        <Accordion expanded={true}>
                            <AccordionSummary>
                                Shipping Address
                            </AccordionSummary>
                            <AccordionDetails>
                                {countries ? (
                                    <ShippingAddress countries={countries} />
                                ) : (
                                    <div className="h-32 text-center">
                                        <ClipLoader
                                            color="black"
                                            size={30}
                                            className="mt-10"
                                        />
                                    </div>
                                )}
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary>
                                Shipping Methods
                            </AccordionSummary>
                            <AccordionDetails>
                                Shipping Methods
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary>Billing Address</AccordionSummary>
                            <AccordionDetails>Billing Address</AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary>Payment Method</AccordionSummary>
                            <AccordionDetails>Payment Method</AccordionDetails>
                        </Accordion>
                    </div>
                    <div className="w-1/3">
                        <h2>Summarizing</h2>
                    </div>
                </div>
            </div>
        </section>
    );
}
