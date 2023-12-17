import { Slider } from "@mui/material";

// Style
const style = {
    inputPrice: "h-8 rounded-lg border-2 border-gr-green w-28 p-2",
};

export default function PriceFilter({
    value,
    setPriceSlider,
    setPriceInput,
}: {
    value: number[];
    setPriceSlider: (event: Event, newValue: number | number[]) => void;
    setPriceInput: (newValue: number[]) => void;
}) {
    return (
        <div>
            <h3>Price</h3>
            <Slider
                value={value}
                onChange={setPriceSlider}
                valueLabelDisplay="auto"
                max={2000}
                min={1}
                sx={{
                    color: "#52af77",
                }}
            />
            <div className="flex gap-12 justify-center">
                <div className="flex flex-col">
                    <span>min</span>
                    <input
                        type="number"
                        className={style.inputPrice}
                        value={value[0]}
                        onChange={(valueInput) =>
                            setPriceInput([
                                Number(valueInput.target.value),
                                value[1],
                            ])
                        }
                    />
                </div>
                <div className="flex flex-col">
                    <span>max</span>
                    <input
                        type="number"
                        className={style.inputPrice}
                        value={value[1]}
                        onChange={(valueInput) =>
                            setPriceInput([
                                value[0],
                                Number(valueInput.target.value),
                            ])
                        }
                    />
                </div>
            </div>
        </div>
    );
}
