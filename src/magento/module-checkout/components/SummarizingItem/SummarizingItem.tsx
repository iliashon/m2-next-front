const style = {
    baseFlex: "flex justify-between",
};

export default function SummarizingItem({
    label,
    value,
}: {
    label: string;
    value: number;
}) {
    return (
        <div className={style.baseFlex}>
            <h5>{label}:</h5>
            <span>-{value}$</span>
        </div>
    );
}
