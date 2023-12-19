"use client";

import Image from "next/image";
import Link from "next/link";

// Import icons
import user from "@/assets/icons/user.png";
import cartWhite from "@/assets/icons/cart.png";
import cartGreen from "@/assets/icons/cart-green.png";

// Import header logo
import logo from "@/assets/images/logo-header.png";
import useCheckTotalQuantity from "@/hooks/useCheckTotalQuantity";
import { usePathname } from "next/navigation";

export default function Header() {
    const quantity = useCheckTotalQuantity();

    const pathname = usePathname();

    return (
        <header className="container mx-auto px-4 flex justify-between items-center h-24">
            <div className="flex gap-12">
                <div>
                    <a href="/">
                        <Image src={logo} alt="Logo" />
                    </a>
                </div>
                <div className="flex gap-6 items-center font-monts">
                    <Link href="/">Home</Link>
                    <Link href="/catalog">Catalog</Link>
                </div>
            </div>
            <div className="flex gap-12 font-lato">
                <div className="flex flex-col items-end">
                    <a
                        href="tel:+995574155989"
                        className="text-gr-green text-xl"
                    >
                        +995 <b>574-155-989</b>
                    </a>
                    <a href="mailto:info@grassclean.ge" className="text-xs">
                        info<span className="text-gr-green">@</span>
                        grassclean.ge
                    </a>
                </div>
                <div className="flex gap-8">
                    <button className="flex items-center justify-center h-11 w-11 bg-gr-bg-gray rounded-full">
                        <Image src={user} alt="Cabinet" />
                    </button>
                    <a
                        href="/cart"
                        className={`${
                            pathname === "/cart"
                                ? "bg-gr-green"
                                : "bg-gr-bg-gray"
                        } flex items-center justify-center h-11 w-11 rounded-full relative`}
                    >
                        <Image
                            src={pathname === "/cart" ? cartWhite : cartGreen}
                            alt="Cart"
                        />
                        <span className="absolute -top-1 -right-1 w-5 h-5 bg-gr-green flex justify-center items-center rounded-full text-white text-xs">
                            {quantity}
                        </span>
                    </a>
                </div>
            </div>
        </header>
    );
}
