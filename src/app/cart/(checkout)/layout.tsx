"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function CheckoutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [pathArr, setPathArr] = useState<string[]>();

    const pathName = usePathname();

    useEffect(() => {
        setPathArr(pathName.split("/"));
    }, [pathName]);

    return (
        <section className="container mx-auto p-4">
            <div className="flex my-6 font-monts">
                <div className="h-3 w-1/3 bg-gr-green rounded-l-lg flex justify-center">
                    <span className="-mt-8 font-semibold">
                        Shipping address №1
                    </span>
                </div>
                <div className="h-3 w-1/3 bg-gray-300 flex justify-center">
                    <span className="-mt-8 font-semibold">
                        Shipping method №2
                    </span>
                </div>
                <div className="h-3 w-1/3 bg-gray-300 rounded-r-lg flex justify-center">
                    <span className="-mt-8 font-semibold">
                        Payment method №3
                    </span>
                </div>
            </div>
            {children}
        </section>
    );
}
