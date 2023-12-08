import ProductItem from "@/components/Checkout/ProductItem/ProductItem";

const style = {
    baseFlex: "flex justify-between",
};

export default function page() {
    return (
        <section className="bg-gr-bg-gray">
            <div className="container mx-auto p-4 flex gap-8">
                <div className="w-8/12 py-5 flex flex-col gap-4">
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                </div>
                <div className="w-4/12 font-monts py-5">
                    <h2 className="text-2xl font-semibold text-center">
                        Summarizing
                    </h2>
                    <div className="bg-white p-5 mt-5 flex flex-col gap-5 rounded-xl">
                        <div className="bg-gr-bg-gray p-3 flex flex-col gap-3 rounded-lg">
                            <div className={style.baseFlex}>
                                <h5>Goods:</h5>
                                <span>134.48&#8382;</span>
                            </div>
                            <div className={style.baseFlex}>
                                <h5>Total weight:</h5>
                                <span>3,6 kg</span>
                            </div>
                            <div className={style.baseFlex}>
                                <h5>VAT (20%, included in the price):</h5>
                                <span>34.48&#8382;</span>
                            </div>
                            <div className={style.baseFlex}>
                                <h5>Shipping:</h5>
                                <span className="text-gr-green">free</span>
                            </div>
                        </div>
                        <div className="flex text-xl justify-between">
                            <h4 className="font-semibold">Total:</h4>
                            <span className="text-gr-green">
                                174.48<b>&#8382;</b>
                            </span>
                        </div>
                        <button className="bg-gr-green w-full h-9 rounded-md text-white font-monts">
                            Place an order
                        </button>
                        <div className="flex flex-col gap-3">
                            <h4 className="text-base font-semibold">
                                Discount code:
                            </h4>
                            <div className="flex gap-3">
                                <input
                                    className="bg-gray-200 w-3/4 rounded-md p-2 h-9 box-border"
                                    type="text"
                                    placeholder="PROMO"
                                />
                                <button className="w-1/5 bg-gr-green h-9 rounded-md text-white font-monts text-sm">
                                    Apply
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
