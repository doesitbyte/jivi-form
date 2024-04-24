import { useState } from "react";
import { FormPageComponent } from "../../utils/formPageProps";
import JiviHeader from "../ui/JiviHeader";
import JiviWeightPicker from "../ui/JiviWeightPicker";


const WeightPicker: FormPageComponent = ({ formMethods }) => {
    const [kgs, setKgs] = useState(true);

    const handleUnitChange = (unit: string) => {
        (unit == "kgs") ? setKgs(true) : setKgs(false);
    }

    type boxProps = {
        unit: string;
    }
    const SelectedBox = (props: boxProps) => (
        <button
            onClick={() => {
                handleUnitChange(props.unit)
            }}
            className="basis-1/2 flex justify-center items-center bg-jiviBlack text-white p-4 rounded-xl font-semibold">
            {props.unit}
        </button>
    )

    const UnselectedBox = (props: boxProps) => (
        <button
            onClick={() => {
                handleUnitChange(props.unit)
            }}
            className="basis-1/2 flex justify-center items-center font-semibold">
            {props.unit}
        </button>
    )

    return (
        <>
            <JiviHeader title="Details" />
            <p className="my-6 text-jiviBlack font-extrabold text-[30px]">What is your weight?</p>
            <div className="flex">
                {kgs ? <UnselectedBox unit="lbs" /> : <SelectedBox unit="lbs" />}
                {!kgs ? <UnselectedBox unit="kgs" /> : <SelectedBox unit="kgs" />}
            </div>
            <div className="mt-8 flex justify-center items-baseline">
                <span className="text-[60px] font-extrabold text-jiviBlack">{formMethods.watch("weight")}</span>
                <span className="ml-2 text-[24px] font-semibold text-jiviDarkGray">{kgs ? "kgs" : "lbs"}</span>
            </div>
            <div>
                <JiviWeightPicker
                    name="weight"
                    control={formMethods.control}
                />
            </div>
        </>
    )
}

export default WeightPicker;