import Catalog from "@/magento/module-catalog/view/Catalog";

export async function generateMetadata() {
    return {
        title: "Catalog",
    };
}

export default function page() {
    return (
        <>
            <Catalog />
        </>
    );
}
