import Image from "next/image";

// Import footer logo
import logo from "@/assets/images/logo-footer.png";

// Import icons footer
import phone from "@/assets/icons/phone.png";
import mail from "@/assets/icons/mail.png";
import location from "@/assets/icons/location.png";

export default function Footer() {
    return (
        <footer className="bg-gr-green">
            <div className="container mx-auto px-4 flex justify-between items-center h-60 text-white font-lato">
                <div className="w-72 flex flex-col gap-3">
                    <Image src={logo} alt="Logo" />
                    <p className="text-sm font-light">
                        2023 © Grass Clean. All rights reserved.
                    </p>
                    <p className="text-xs font-light">
                        All information provided on the site regarding product
                        features, balance availability, cost of goods is for
                        informational purposes only and is in no way a public
                        offer. For detailed information about availability and
                        cost of these goods and (or) services, please contact
                        your manager.
                    </p>
                </div>
                <div className="flex gap-32">
                    <ul className="flex flex-col gap-9 justify-center">
                        <li>
                            <a href="" className="flex items-center gap-3">
                                <Image src={phone} alt="Phone number" />
                                <h5>
                                    +995 <b>574-155-989</b>
                                </h5>
                            </a>
                        </li>
                        <li>
                            <a href="" className="flex items-center gap-3">
                                <Image src={mail} alt="Mail addres" />
                                <h5>info@grassclean.ge</h5>
                            </a>
                        </li>
                        <li>
                            <a href="" className="flex items-center gap-3">
                                <Image
                                    src={location}
                                    alt="Location on google map"
                                />
                                <h5>32 R. Agladze st</h5>
                            </a>
                        </li>
                    </ul>
                    <ul className="flex flex-col gap-2 list-disc">
                        <li>Household chemistry</li>
                        <li>leaning products</li>
                        <li>HoReCa</li>
                        <li>DutyBox</li>
                        <li>Food industry</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
