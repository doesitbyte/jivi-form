import { Control, Controller } from "react-hook-form";
import JiviSlider from "./JiviSlider";
import SliderValueLabel from "./JiviSliderValueLabel";
import { Mark } from "@mui/base";
import React from "react";

interface JiviSliderControlledProps {
    name: string;
    control: Control<any>;
    marks: boolean | readonly Mark[];
    step: number,
    min: number,
    max: number,
    defaultValue: number,
}

const JiviSliderControlledPicker: React.FC<JiviSliderControlledProps> = (props: JiviSliderControlledProps) => {
    return (<Controller
        name={props.name}
        control={props.control}
        render={({ field }) => (
            <JiviSlider className='mb-8'
                marks={props.marks}
                step={props.step}
                min={props.min}
                max={props.max}
                defaultValue={props.defaultValue}
                slots={{ valueLabel: SliderValueLabel }}
                // onChangeCommitted={(e, value) => {
                //     field.onChange(value as number);
                // }
                {...field}
            />
        )}
    />)
}

export default JiviSliderControlledPicker;