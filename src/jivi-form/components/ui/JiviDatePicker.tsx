import { DatePicker, Space } from 'antd';
import dayjs from 'dayjs';
import { Control, Controller } from 'react-hook-form';
import ExpandIcon from '../../../assets/images/expand.png'

interface JiviDatePickerProps {
    name: string;
    placeholder: string;
    control: Control<any>;
    prefix?: any;
}

const JiviDatePicker = (props: JiviDatePickerProps) => (
    <Controller
        name={props.name}
        control={props.control}
        render={({ field: { value, onChange, onBlur, ref }, fieldState }) => (
            <Space direction="vertical" className='w-full'>
                <DatePicker
                    variant='outlined'
                    size='large'
                    className='w-full'
                    required
                    suffixIcon={<img className='h-5 w-5' src={ExpandIcon}></img>}
                    name={props.name}
                    placeholder={props.placeholder}
                    onChange={(date) => {
                        onChange(date ? date.toDate() : null)
                        return;
                    }}
                    value={value ? dayjs(value) : null}
                    onBlur={onBlur}
                    ref={ref}
                    status={fieldState.error ? "error" : undefined} />
            </Space>
        )}
    />
);

export default JiviDatePicker;