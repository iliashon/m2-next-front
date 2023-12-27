import { GetCategory } from "@/magento/module-catalog/Api/get_category";
import Catalog from "@/magento/module-catalog/view/Catalog";

export default async function page({
    params,
}: {
    params: { category: string };
}) {
    const data = (await GetCategory(params.category)).categories.items[0];

    return (
        <>
            <Catalog category_data={data} />
        </>
    );
}
