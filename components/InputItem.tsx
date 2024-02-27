import { InputType } from "@/types/types";
import FrostedBlock from "./FrostedBlock";
import { ChangeEvent } from "react";


interface InputItemProps {
    type?: InputType;
    identifier: string;
    title: string;
    className?: string;
    children?: React.ReactNode;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputItem: React.FC<InputItemProps> = ({
    type,
    identifier,
    title,
    className,
    children,
    onChange
}) => {
    return (
        <div className="flex flex-col gap-2">
            <label htmlFor={identifier}>{title}</label>
            {!children && onChange && 
                <input type={type} name={identifier} id={identifier} className="p-2 rounded-lg frosted" onChange={(e) => onChange(e)}/>
            }
            {children && children}
        </div>
    );
}

export default InputItem;