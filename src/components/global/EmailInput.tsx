import { FC } from "react";
import { AiOutlineMail } from "react-icons/ai";

type InputFieldProps = {
    placeholder?: string;
    onChange?: (e: any) => void;
    type?: string;
    name?: string;
    value?: string;
    className?: string;

}

const EmailInput: FC<InputFieldProps> = (props) => {
    const { placeholder, onChange, type, name, value, className } = props;
    return (
        <div className={`w-full flex items-center border px-3 py-2 shadow-ss ${className}`}>
            <AiOutlineMail className="text-gray-400 mr-2" />
            <input
                type={type}
                name={name}
                className="flex-grow border-none outline-none placeholder:text-sm"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default EmailInput;
