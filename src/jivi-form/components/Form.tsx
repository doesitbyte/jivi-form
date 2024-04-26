import { useState } from 'react'
import { motion } from 'framer-motion'
import { FormDataSchema, TFormDataSchema } from '../utils/formSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler } from 'react-hook-form'
import Details from './form-steps/Details'
import Preview from './form-steps/Preview'
import { Button } from 'antd'
import Success from './form-steps/Success'
import axios from 'axios'
import AgePicker from './form-steps/Age'
import WeightPicker from './form-steps/Weight'

export default function Form() {
    const [step, setStep] = useState(0)
    const [loading, setLoading] = useState(false);


    const formMethods = useForm<TFormDataSchema>({
        mode: "onChange",
        resolver: zodResolver(FormDataSchema),
        defaultValues: {
            bpDia: 75,
            bpSys: 140,
            heartRate: 90,
            age: 25,
            weight: 60,
        }
    })

    const processForm: SubmitHandler<TFormDataSchema> = async data => {
        setLoading(true);
        try {
            const res = await axios.post("https://dummyjson.com/http/200", data);
            if (res.status === 200) {
                setStep(step => step + 1)
                formMethods.reset();
            } else {
                throw new Error;
            }
        } catch {
            alert("Something went wrong! Please try again.")
        }
        setLoading(false);
    }

    const next = async () => {
        const output = await formMethods.trigger();
        if (!output) return
        setStep(step => step + 1)
    }

    return (
        <>
            <main className='flex flex-col h-full p-4'>
                {/* Form */}
                <div className='basis-10/12'>
                    <form onSubmit={formMethods.handleSubmit(processForm)}>
                        {step === 0 && (
                            <motion.div
                                initial={{ y: '100%', opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                            >
                                <Details formMethods={formMethods} />

                            </motion.div>
                        )}

                        {step === 1 && (
                            <motion.div
                                initial={{ x: '100%', opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                            >
                                <WeightPicker formMethods={formMethods} />
                            </motion.div>
                        )}

                        {step === 2 && (
                            <motion.div
                                initial={{ x: '100%', opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                            >
                                <AgePicker formMethods={formMethods} />
                            </motion.div>
                        )}

                        {step === 3 && (
                            <motion.div
                                initial={{ x: '100%', opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                            >
                                <Preview formMethods={formMethods} />
                            </motion.div>
                        )}

                        {step === 4 && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                            >
                                <Success />
                            </motion.div>
                        )}
                    </form>
                </div>

                {/* Navigation */}
                <nav className='basis-2/12'>
                    {(step === 0 || step === 1 || step === 2)
                        && (
                            <motion.div
                                initial={{ y: '100%', opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                            >
                                <Button
                                    type='default'
                                    className={(formMethods.formState.isValid) ?
                                        "w-full h-[70px] rounded-xl hover:bg-jiviBlue hover:opacity-90 bg-jiviBlue font-semibold text-white font-jivi text-md" :
                                        "w-full h-[70px] rounded-xl hover:bg-jiviGray hover:opacity-90 bg-jiviGray font-semibold text-white font-jivi text-md"
                                    }
                                    onClick={next}
                                >
                                    {"Next"}
                                </Button>
                            </motion.div>
                        )}

                    {step === 3
                        && (
                            <motion.div
                                initial={{ x: '100%', opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                            >
                                <div className='flex flex-row justify-between'>
                                    <Button
                                        type="text"
                                        className='basis-1/2 mr-2 h-[70px] bg-jiviGray text-white font-jivi text-md font-semibold'
                                        onClick={() => setStep(0)}
                                        disabled={loading}
                                    >
                                        {"Edit"}
                                    </Button>
                                    <Button
                                        type="primary"
                                        className='basis-1/2 ml-2 h-[70px] bg-jiviBlue text-white font-jivi text-md font-semibold'
                                        onClick={
                                            formMethods.handleSubmit(processForm)
                                        }
                                        loading={loading}
                                    >
                                        {"Submit"}
                                    </Button>
                                </div>
                            </motion.div>
                        )}

                    {step === 4
                        && (
                            <motion.div
                                initial={{ y: '100%', opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                            >
                                <Button
                                    type='default'
                                    className="w-full h-[70px] rounded-xl hover:bg-jiviBlue hover:opacity-90 bg-jiviBlue font-semibold text-white font-jivi text-md"
                                    onClick={() => setStep(0)}
                                >
                                    {"Submit Again"}
                                </Button>
                            </motion.div>
                        )}
                </nav>
            </main>
        </>
    )
}
