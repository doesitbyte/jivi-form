import { Slider as BaseSlider, SliderProps } from '@mui/base/Slider';
import React from 'react';
import clsx from 'clsx';

const resolveSlotProps = (fn: any, args: any) =>
    typeof fn === 'function' ? fn(args) : fn;

const JiviSlider = React.forwardRef<HTMLSpanElement, SliderProps>((props, ref) => {
    return (
        <BaseSlider
            ref={ref}
            {...props}
            slotProps={{
                ...props.slotProps,
                root: (ownerState) => {
                    const resolvedSlotProps = resolveSlotProps(
                        props.slotProps?.root,
                        ownerState,
                    );
                    return {
                        ...resolvedSlotProps,
                        className: clsx(
                            `h-1.5 w-full py-4 inline-flex items-center relative touch-none ${ownerState.disabled
                                ? 'opacity-50 cursor-default pointer-events-none text-slate-300'
                                : `hover:opacity-100 cursor-pointer`
                            }`,
                            resolvedSlotProps?.className,
                        ),
                    };
                },
                rail: (ownerState) => {
                    const resolvedSlotProps = resolveSlotProps(
                        props.slotProps?.rail,
                        ownerState,
                    );
                    return {
                        ...resolvedSlotProps,
                        className: clsx(
                            'block absolute w-full h-[6px] bg-jiviGray',
                            resolvedSlotProps?.className,
                        ),
                    };
                },
                track: (ownerState) => {
                    const resolvedSlotProps = resolveSlotProps(
                        props.slotProps?.track,
                        ownerState,
                    );

                    return {
                        ...resolvedSlotProps,
                        className: clsx(
                            'block absolute h-[6px] rounded-sm bg-current',
                            resolvedSlotProps?.className,
                        ),
                    };
                },
                thumb: (ownerState, { active }) => {
                    const resolvedSlotProps = resolveSlotProps(
                        props.slotProps?.thumb,
                        ownerState,
                    );
                    return {
                        ...resolvedSlotProps,
                        className: clsx(
                            `absolute w-[20px] h-[20px] -ml-1.5 box-border rounded-md border-solid border-2 border-white outline-0 bg-current transition ${active
                                ? 'scale-[1.2] outline-none'
                                : ''
                            }`,
                            resolvedSlotProps?.className,
                        ),
                    };
                },
                mark: (ownerState) => {
                    const resolvedSlotProps = resolveSlotProps(
                        props.slotProps?.mark,
                        ownerState,
                    );

                    return {
                        ...resolvedSlotProps,
                        className: clsx(
                            `absolute w-[0px] h-[10px] -translate-x-1/4 -translate-y-1/4 box-border border-solid border-[1.5px] border-current`,
                            resolvedSlotProps?.className,
                        ),
                    };
                },
                markLabel: (ownerState) => {
                    const resolvedSlotProps = resolveSlotProps(
                        props.slotProps?.markLabel,
                        ownerState,
                    );

                    return {
                        ...resolvedSlotProps,
                        className: clsx(
                            `absolute text-jiviDarkGray text-sm font-semibold top-6`,
                            resolvedSlotProps?.className,
                        ),
                    };
                },
                valueLabel: (ownerState) => {
                    const resolvedSlotProps = resolveSlotProps(
                        props.slotProps?.valueLabel,
                        ownerState,
                    );

                    return {
                        ...resolvedSlotProps,
                        className: clsx(
                            `absolute text-jiviDarkGray text-sm font-semibold top-6`,
                            resolvedSlotProps?.className,
                        ),
                    };
                },
            }}
        />
    );
});

export default JiviSlider;