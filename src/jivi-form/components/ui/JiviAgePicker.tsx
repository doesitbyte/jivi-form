import { Control, Controller } from 'react-hook-form';
import Picker from 'react-mobile-picker'

interface JiviAgePickerProps {
    name: string;
    control: Control<any>;
}

const selections = {
    age: [...Array(150).keys()].map(i => (i + 1).toString()),
}

const defaultAge = {
    age: "25",
}

const JiviAgePicker = (props: JiviAgePickerProps) => {

    return (
        <Controller
            name={props.name}
            control={props.control}
            render={({ field }) => (
                <div className='flex justify-center items-center'>
                    <Picker
                        value={field.value ? {
                            age: field.value.toString()
                        } : defaultAge}
                        onChange={(value) => {
                            field.onChange(parseInt(value.age));
                        }} wheelMode='natural' height={400} itemHeight={80}>
                        <Picker.Column name={"age"}>
                            {selections.age.map(option => (
                                <Picker.Item key={option} value={option}>
                                    {({ selected }) => (
                                        <span
                                            className={
                                                selected ?
                                                    "cursor-pointer w-[128px] flex justify-center items-center rounded-[24px] leading-[100px] text-[72px] font-bold bg-jiviBlue text-white border-solid border-8 border-blue-200/90" :
                                                    // `cursor-pointer text-jiviDarkGray text-4xl font-bold`
                                                    `cursor-pointer text-jiviDarkGray text-${(6 - Math.abs(parseInt(field.value || defaultAge.age) - parseInt(option))).toString() + "xl"} font-bold`
                                            }
                                        >
                                            {option}
                                        </span>

                                    )}
                                </Picker.Item>
                            ))}
                        </Picker.Column>
                    </Picker>
                </div>
            )}
        />

    )
}

export default JiviAgePicker;