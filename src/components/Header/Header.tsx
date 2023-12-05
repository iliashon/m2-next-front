import Image from "next/image";
import Link from "next/link";

// Import icons
import user from "@/assets/icons/user.png";
import cart from "@/assets/icons/cart.png";

export default function Header() {
    return (
        <div className="container mx-auto px-4 flex justify-between items-center h-24">
            <div className="flex gap-12">
                <div>
                    <img
                        src="https://grass.loc/media/logo/default/image_28.png"
                        alt="Logo"
                    />
                </div>
                <div className="flex gap-6 items-center font-monts">
                    <Link href="/">About us</Link>
                    <Link href="/">Partners</Link>
                    <Link href="/">Categories</Link>
                    <Link href="/">Catalog</Link>
                </div>
            </div>
            <div className="flex gap-12 font-lato">
                <button className="font-light hover:font-medium">EN</button>
                <div className="flex flex-col items-end">
                    <a href="" className="text-gr-green text-xl">
                        +995 <b>574-155-989</b>
                    </a>
                    <a href="" className="text-xs">
                        info<span className="text-gr-green">@</span>
                        grassclean.ge
                    </a>
                </div>
                <div className="flex gap-8">
                    <button className="flex items-center justify-center h-11 w-11 bg-gr-bg-gray rounded-full">
                        <Image src={user} alt="Cabinet" />
                    </button>
                    <button className="flex items-center justify-center h-11 w-11 bg-gr-bg-gray rounded-full relative">
                        <Image src={cart} alt="Cart" />
                        <span className="absolute -top-2 -right-2 w-5 h-5 bg-gr-green flex justify-center items-center rounded-full text-white text-xs">
                            0
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}
