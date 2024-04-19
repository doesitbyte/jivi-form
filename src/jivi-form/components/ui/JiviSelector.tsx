import { Select, Space } from 'antd';
import { Control, Controller } from 'react-hook-form';
import ExpandIcon from '../../../assets/images/expand.png';

interface JiviSelectorProps {
    name: string;
    placeholder: string;
    control: Control<any>;
    prefix?: any;
}

const JiviSelector = (props: JiviSelectorProps) => (
    <Controller
        control={props.control}
        name={props.name}
        render={({ field, fieldState }) => (
            <Space direction='vertical' className='w-full bg-jiviLightGray'>
                <Select
                    variant='outlined'
                    placeholder={props.placeholder}
                    className='w-full'
                    size='large'
                    suffixIcon={<img className='h-5 w-5' src={ExpandIcon}></img>}
                    status={fieldState.error ? "error" : undefined}
                    options={[
                        { value: 0, label: 'Male' },
                        { value: 1, label: 'Female' },
                        { value: 2, label: 'Other' },
                    ]}
                    {...field}
                />
            </Space>
        )}
    />
)

export default JiviSelector;