import { Input } from 'antd';
import { Control, Controller } from 'react-hook-form';

interface JiviInputBoxProps {
    name: string;
    placeholder: string;
    control: Control<any>;
    prefix?: any;
}

const JiviInputBox = (props: JiviInputBoxProps) => {
    return (
        <Controller
            name={props.name}
            control={props.control}
            render={({
                field: { value, onChange, onBlur, }, fieldState
            }) => (
                <Input
                    className=''
                    status={fieldState.error ? "error" : undefined}
                    size='large'
                    variant='outlined'
                    prefix={props.prefix}
                    name={props.name}
                    placeholder={props.placeholder}
                    required
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                />
            )
            }
        />
    );
};

export default JiviInputBox;