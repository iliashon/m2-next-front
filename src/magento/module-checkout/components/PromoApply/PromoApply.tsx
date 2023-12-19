export default function PromoApply() {
    return (
        <div className="flex flex-col gap-3">
            <h4 className="text-base font-semibold">Discount code:</h4>
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
    );
}
