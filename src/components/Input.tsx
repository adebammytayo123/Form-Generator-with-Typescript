import React from 'react';


type OptionProps = {
    value: any;
    label: string|number;
    selected: boolean;
    disabled: boolean;
};

interface FieldProps  {
    fieldType?: 'input' | 'select' | 'textarea';
    type?: 'button'|'checkbox'|'date'|'email'|'file'|'hidden'|'number'|'password'|'radio'|'search'|'tel'|'text'|'time'|'url';
    name: string;
    value?: any;
    options?: string[] | OptionProps[];
    rows?: number;
    cols?: number;
    placeholder: string;
    disabled?: boolean;
    hidden?: boolean;
    className?: string;
    style?: {};
    onChange:(e:any)=>void;
    accept?: string|'image/'|'text/'|'application/'|'video/';
};



const Input : React.FC<FieldProps>  = ({name,type,placeholder,onChange, className}) => {
    return (
        <>
            <input type={type} name={name} placeholder={placeholder} onChange={onChange} className={className} />
        </>
    )
}

export default Input
