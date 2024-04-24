import { MouseEventHandler, UIEventHandler, useEffect, useRef, useState } from "react";
import MarkerIcon from '../../../assets/images/weight-marker.png';
import { Control, Controller } from "react-hook-form";

const selections = [...Array(300).keys()].map(i => i + 1);

const BigLine = () => {
    return (
        <span
            className="block h-16 w-0 border-solid border-2 border-jiviDarkGray">
        </span>
    )
}

const SmallLine = () => {
    return (
        <span
            className="block h-8 w-0 border-solid border-[1px] border-jiviGray">
        </span>
    )
}

interface JiviWeightPickerProps {
    name: string;
    control: Control<any>;
}

const JiviWeightPicker = (props: JiviWeightPickerProps) => {

    const pickerRef = useRef<HTMLInputElement>(null);
    const [isMouseDown, setIsMouseDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [selectedValue, setSelectedValue] = useState(50);

    useEffect(() => {
        if (pickerRef.current) {
            pickerRef.current.scrollLeft = (selectedValue - 1) * 16;
        }
    }, [])


    const handleMouseDown: MouseEventHandler = (e) => {
        setIsMouseDown(true);

        if (pickerRef.current) {
            setStartX(e.pageX - pickerRef.current.offsetLeft);
            setScrollLeft(pickerRef.current.scrollLeft);


        }
    }

    const handleMouseLeave = () => {
        setIsMouseDown(false);
    }

    const handleMouseUp = () => {
        setIsMouseDown(false);
    }

    const handleMouseMove: MouseEventHandler = (e) => {

        if (!isMouseDown) return selectedValue;
        e.preventDefault();
        if (pickerRef.current) {
            const x = e.pageX - pickerRef.current.offsetLeft!;
            const walk = x - startX;
            const scroll = scrollLeft - walk;
            const nextMark = (scroll % 16 != 0) ? scroll + (16 - (scroll % 16)) : scroll;
            pickerRef.current.scrollLeft = nextMark;
            const currentSelected = Math.ceil(pickerRef.current.scrollLeft / 16) + 1;
            setSelectedValue(currentSelected);
            return currentSelected;
        }
    }

    const handleScroll: UIEventHandler = (e) => {
        e.preventDefault();
        if (pickerRef.current) {
            const currentSelected = Math.ceil(pickerRef.current.scrollLeft / 16) + 1;
            setSelectedValue(currentSelected);
            return currentSelected;
        }
        return selectedValue;
    }

    return <>
        <Controller
            name={props.name}
            control={props.control}
            render={({ field }) => (
                <div
                    className="mt-16 flex overflow-x-auto no-scrollbar items-center cursor-pointer"
                    ref={pickerRef}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={(e) => {
                        field.onChange(handleMouseMove(e))
                    }}
                    onScroll={(e) => {
                        field.onChange(handleScroll(e))
                    }}
                >
                    <div className="absolute left-1/2 min-w-8">
                        <img className="right-2 w-8" src={MarkerIcon}></img>
                    </div>
                    <div className="block min-w-[50%]"></div>
                    {selections.map((value, index) => (
                        <>
                            <div
                                key={index}
                                className="flex items-center justify-end min-w-4"
                            >
                                {
                                    value !== selectedValue && value != 0 && value % 5 == 0 && value % 10 != 0 &&
                                    <div className="flex flex-col items-end justify-center">
                                        <BigLine />
                                        <p>&nbsp;</p>
                                    </div>
                                }
                                {
                                    value !== selectedValue && value != 0 && value % 10 == 0 &&
                                    <div className="flex flex-col items-end justify-center">
                                        <BigLine />
                                        <p>{value}</p>
                                    </div>
                                }
                                {
                                    value !== selectedValue && value != 0 && value % 5 != 0 &&
                                    <div className="mb-4">
                                        <SmallLine />
                                    </div>
                                }
                            </div>
                        </>
                    ))}
                    <div className="block min-w-[50%]"></div>
                </div>
            )}
        />
    </>
}

export default JiviWeightPicker;