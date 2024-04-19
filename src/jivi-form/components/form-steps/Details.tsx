import { FormPageComponent } from '../../utils/formPageProps';
import MarkLabel from '../ui/JiviSliderMarkLabel';
import JiviInputBox from '../ui/JiviInputBox';
import userImg from '../../../assets/images/user.png';
import JiviDatePicker from '../ui/JiviDatePicker';
import JiviSelector from '../ui/JiviSelector';
import JiviSliderControlledPicker from '../ui/JiviSliderControlled';
import JiviHeader from '../ui/JiviHeader';

const Details: FormPageComponent = ({ formMethods }) => {

    const { formState: { errors } } = formMethods

    const marksHeartRate = [
        {
            value: 60,
            label: <MarkLabel text='60' left={true} />,
        },
        {
            value: 70,
        },
        {
            value: 80,
        },
        {
            value: 90,
        },
        {
            value: 100,
        },
        {
            value: 110,
        },
        {
            value: 120,
            label: <MarkLabel text='>120' left={false} />
        },
    ];

    const marksBPSys = [
        {
            value: 120,
            label: <MarkLabel text='<=120' left={true} />,
        },
        {
            value: 130,
        },
        {
            value: 140,
        },
        {
            value: 150,
            label: <MarkLabel text='>150' left={false} />
        },
    ];

    const marksBPDia = [
        {
            value: 60,
            label: <MarkLabel text='<60' left={true} />,
        },
        {
            value: 65,
        },
        {
            value: 70,
        },
        {
            value: 75,
        },
        {
            value: 80,
            label: <MarkLabel text='>80' left={false} />
        },
    ];

    return (
        <>
            <JiviHeader title="Details" />
            <section className=''>
                <div>
                    <p className='text-sm font-bold'>
                        Heart Rate
                    </p>
                    <div className='mb-2 text-jiviBlue'>
                        <JiviSliderControlledPicker
                            name='heartRate'
                            control={formMethods.control}
                            defaultValue={90}
                            marks={marksHeartRate}
                            max={120}
                            min={60}
                            step={1}
                        />
                    </div>
                </div>
                <div>
                    <p className='text-sm font-bold'>
                        Blood Pressure
                    </p>
                    <div className=' text-jiviRed'>
                        <JiviSliderControlledPicker
                            name='bpSys'
                            control={formMethods.control}
                            defaultValue={140}
                            marks={marksBPSys}
                            max={150}
                            min={120}
                            step={1}
                        />
                    </div>
                    <div className='mb-2 text-jiviRed'>
                        <JiviSliderControlledPicker
                            name='bpDia'
                            control={formMethods.control}
                            defaultValue={75}
                            marks={marksBPDia}
                            max={80}
                            min={60}
                            step={1}
                        />
                    </div>
                </div>

                <div className=''>
                    <label
                        htmlFor='name'
                        className='text-sm font-bold'
                    >
                        Name<span className='text-jiviRed'>*</span>
                    </label>
                    <div className='mt-2'>
                        <JiviInputBox
                            control={formMethods.control}
                            name='name'
                            placeholder='Please enter your name'
                            prefix={
                                <img className='h-5 w-5 mx-1' src={userImg}></img>
                            }
                        />
                        {errors.name?.message && (
                            <p className='mt-2 text-sm font-semibold text-jiviRed'>
                                {errors.name.message}
                            </p>
                        )}
                    </div>
                </div>

                <div className='w-full'>
                    <label
                        htmlFor='dateOfBirth'
                        className='text-sm font-bold'
                    >
                        Date of Birth<span className='text-jiviRed'>*</span>
                    </label>
                    <div className='mt-2'>
                        <JiviDatePicker
                            control={formMethods.control}
                            name='dateOfBirth'
                            placeholder='Select Date'
                            prefix={
                                <img className='h-6 w-6' src={userImg}></img>
                            }
                        />
                        {errors.dateOfBirth?.message && (
                            <p className='mt-2 text-sm font-semibold text-jiviRed'>
                                {errors.dateOfBirth.message}
                            </p>
                        )}
                    </div>
                </div>

                <div className='w-full'>
                    <label
                        htmlFor='dateOfBirth'
                        className='text-sm font-bold'
                    >
                        Gender <span className='text-jiviRed'>*</span>
                    </label>
                    <div className='mt-2'>
                        <JiviSelector
                            control={formMethods.control}
                            name='gender'
                            placeholder='Select Gender'
                            prefix={
                                <img className='h-6 w-6' src={userImg}></img>
                            }
                        />
                        {errors.gender?.message && (
                            <p className='mt-2 text-sm font-semibold text-jiviRed'>
                                {errors.gender.message}
                            </p>
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Details;