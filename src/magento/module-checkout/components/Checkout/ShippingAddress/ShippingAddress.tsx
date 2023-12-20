"use client";

import { TCountry } from "@/magento/Types/checkout/TCountries";
import { TShippingAddress } from "@/magento/Types/checkout/TShippingAddress";
import useCheckoutPlacingAnOrder from "@/magento/hooks/useCheckoutPlacingAnOrder";
import { Alert, Skeleton } from "@mui/material";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ClipLoader } from "react-spinners";

const style = {
    nextBtn:
        "bg-gr-green w-36 h-9 rounded-md text-white flex justify-center items-center font-monts text-sm",
    input: "bg-gray-200 w-2/3 rounded-md p-2 h-10 box-border text-sm focus:outline-0 focus:border-2 focus:border-gr-green",
    label: "flex flex-col text-sm gap-1",
    section: "bg-gray-200 w-1/2 rounded-md p-2 h-10 box-border text-sm",
    requiredSpan: "text-red-600 text-base",
};

export default function ShippingAddress({
    countries,
}: {
    countries: TCountry[];
}) {
    const [region, setRegion] = useState<TCountry[]>();

    const { loading, getCountriesData, setShipping } =
        useCheckoutPlacingAnOrder();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<TShippingAddress>({
        mode: "onBlur",
    });

    const submit: SubmitHandler<TShippingAddress> = async (data) => {
        const activeCountry = countries.filter(
            (item) => item.full_name_english === data.country
        );
        data.country_code = activeCountry[0].id;

        const result = await setShipping(data);
    };

    useEffect(() => {
        watch((value) => {
            setRegion(
                countries.filter(
                    (country) => country.full_name_english === value.country
                )
            );
        });
    });

    return (
        <div>
            <form
                action=""
                onSubmit={handleSubmit(submit)}
                className="flex flex-col gap-4"
            >
                <label className={style.label}>
                    <span>
                        Email&nbsp;
                        <span className={style.requiredSpan}>*</span>
                    </span>
                    <input
                        className={style.input}
                        type="email"
                        placeholder="example@gmail.com"
                        {...register("email", {
                            required: "This is a required field.",
                            minLength: {
                                value: 5,
                                message: "Minimum 5 characters",
                            },
                            pattern: {
                                value: /.+@.+\..+/i,
                                message:
                                    "Mail should be in the format 'example@gmail.com'",
                            },
                        })}
                    />
                    {errors.email && (
                        <Alert severity="error" className="w-2/3">
                            {errors.email?.message}
                        </Alert>
                    )}
                </label>
                <hr />
                <label className={style.label}>
                    <span>
                        First Name&nbsp;
                        <span className={style.requiredSpan}>*</span>
                    </span>
                    <input
                        className={style.input}
                        type="text"
                        placeholder="Jhon"
                        {...register("firstName", {
                            required: "This is a required field",
                            minLength: {
                                value: 2,
                                message: "Minimum 2 characters",
                            },
                        })}
                    />
                    {errors.firstName && (
                        <Alert severity="error" className="w-2/3">
                            {errors.firstName?.message}
                        </Alert>
                    )}
                </label>
                <label className={style.label}>
                    <span>
                        Last Name&nbsp;
                        <span className={style.requiredSpan}>*</span>
                    </span>
                    <input
                        className={style.input}
                        type="text"
                        placeholder="Cordoba"
                        {...register("lastName", {
                            required: "This is a required field",
                            minLength: {
                                value: 2,
                                message: "Minimum 2 characters",
                            },
                        })}
                    />
                    {errors.lastName && (
                        <Alert severity="error" className="w-2/3">
                            {errors.lastName?.message}
                        </Alert>
                    )}
                </label>
                <label className={style.label}>
                    Company
                    <input
                        className={style.input}
                        type="text"
                        placeholder="Neklo"
                        {...register("company")}
                    />
                </label>
                <label className={style.label}>
                    <span>
                        Street Address&nbsp;
                        <span className={style.requiredSpan}>*</span>
                    </span>
                    <input
                        className={style.input}
                        type="text"
                        placeholder="66 Bingfield Street"
                        {...register("streetAddres", {
                            required: "This is a required field",
                        })}
                    />
                    {errors.streetAddres && (
                        <Alert severity="error" className="w-2/3">
                            {errors.streetAddres?.message}
                        </Alert>
                    )}
                </label>
                <label className={style.label}>
                    <span>
                        Country&nbsp;
                        <span className={style.requiredSpan}>*</span>
                    </span>
                    {countries ? (
                        <select
                            className={style.section}
                            {...register("country")}
                        >
                            {countries?.map((item) => {
                                return (
                                    <option key={item.id}>
                                        {item.full_name_english}
                                    </option>
                                );
                            })}
                        </select>
                    ) : (
                        <Skeleton
                            variant="rounded"
                            height={32}
                            width="50%"
                            sx={{ borderRadius: "8px" }}
                        />
                    )}
                </label>
                <label className={style.label}>
                    <span>
                        State/Province&nbsp;
                        <span className={style.requiredSpan}>*</span>
                    </span>
                    {region ? (
                        region[0].available_regions ? (
                            <select
                                className={style.section}
                                {...register("province")}
                            >
                                {region[0].available_regions.map((item) => {
                                    return (
                                        <option key={item.id} value={item.name}>
                                            {item.name}
                                        </option>
                                    );
                                })}
                            </select>
                        ) : (
                            <input
                                type="text"
                                {...register("province")}
                                className={style.input}
                            />
                        )
                    ) : (
                        <Skeleton
                            variant="rounded"
                            width={"66.66667%"}
                            height={40}
                            className="flex justify-center items-center"
                        >
                            Choose a country
                        </Skeleton>
                    )}
                </label>
                <label className={style.label}>
                    <span>
                        City&nbsp;
                        <span className={style.requiredSpan}>*</span>
                    </span>
                    <input
                        className={style.input}
                        type="text"
                        placeholder="Minsk"
                        {...register("city", {
                            required: "This is a required field",
                        })}
                    />
                    {errors.city && (
                        <Alert severity="error" className="w-2/3">
                            {errors.city?.message}
                        </Alert>
                    )}
                </label>
                <label className={style.label}>
                    <span>
                        Zip/Postal Code&nbsp;
                        <span className={style.requiredSpan}>*</span>
                    </span>
                    <input
                        className={style.input}
                        type="text"
                        placeholder="6000"
                        {...register("postalCode", {
                            required: "This is a required field",
                        })}
                    />
                    {errors.postalCode && (
                        <Alert severity="error" className="w-2/3">
                            {errors.postalCode?.message}
                        </Alert>
                    )}
                </label>
                <label className={style.label}>
                    <span>
                        Phone Number&nbsp;
                        <span className={style.requiredSpan}>*</span>
                    </span>
                    <input
                        className={style.input}
                        type="tel"
                        placeholder="+995759235543"
                        {...register("phoneNumber", {
                            required: "This is a required field",
                            pattern: {
                                value: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){8,14}(\s*)?$/,
                                message:
                                    "The phone number must be in the format +995759235543",
                            },
                        })}
                    />
                    {errors.phoneNumber && (
                        <Alert severity="error" className="w-2/3">
                            {errors.phoneNumber?.message}
                        </Alert>
                    )}
                </label>
                <button
                    className={style.nextBtn}
                    disabled={loading ? true : false}
                >
                    {loading ? <ClipLoader color="white" size={25} /> : "Next"}
                </button>
            </form>
        </div>
    );
}
