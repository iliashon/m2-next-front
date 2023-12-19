import Breadcrump from "@/magento/components/Breadcrump/Breadcrump";
import ProductSimple from "@/magento/module-product/view/ProductSimple";

export default async function Product({
    params,
}: {
    params: { product: string };
}) {
    return (
        <>
            <ProductSimple url_key={params.product} />
        </>
    );
}
