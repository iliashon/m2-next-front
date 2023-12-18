import Image from "next/image";

// Import Icons
import check from "@/assets/icons/check.svg";
import cross from "@/assets/icons/cross.svg";
import { TStockStatus } from "@/magento/Types/TStockStatus";

export default function StockStatus({
    stock_status,
}: {
    stock_status: TStockStatus;
}) {
    const WhichStockStatus = () => {
        if (stock_status === "IN_STOCK") {
            return (
                <>
                    <p className="text-green-500">in stock</p>
                    <Image src={check} alt="" />
                </>
            );
        } else {
            return (
                <>
                    <p className="text-red-400">out of stock</p>
                    <Image src={cross} alt="" />
                </>
            );
        }
    };

    return <div className="flex gap-1">{WhichStockStatus()}</div>;
}
