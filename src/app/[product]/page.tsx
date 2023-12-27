import { getSimpleProduct } from "@/magento/module-product/Api/get-product";
import ProductSimple from "@/magento/module-product/view/ProductSimple";

export async function generateMetadata({
    params,
}: {
    params: { product: string };
}) {
    const data = (await getSimpleProduct(params.product)).products.items[0];

    return {
        title: data.name,
    };
}

export default async function page({
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
