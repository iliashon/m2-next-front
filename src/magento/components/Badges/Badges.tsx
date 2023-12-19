export default function Badges({
    saleAtr,
    newAtr,
}: {
    newAtr: 1 | 0;
    saleAtr: 1 | 0;
}) {
    return (
        <div className="absolute text-xs top-3 right-3 flex gap-1 z-10">
            {saleAtr === 1 ? (
                <span className="bg-red-400 px-2 py-1 rounded-lg text-white">
                    <b>Sale</b>
                </span>
            ) : (
                ""
            )}

            {newAtr === 1 ? (
                <span className="bg-teal-700 px-2 py-1 rounded-lg text-white">
                    <b>New</b>
                </span>
            ) : (
                ""
            )}
        </div>
    );
}
