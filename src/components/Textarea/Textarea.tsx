import React, { useState } from 'react'

export type TextareaProps = {
    type: string | "text"
    name: string;
    value?: any;
    placeholder?: string | undefined;
    cols: number;
    rows: number;
    disabled?: boolean | undefined;
    autofocus?: boolean | undefined;
    readonly?: boolean;
    required?: boolean;
    maxlength?: number;
    label: string;
    labelClass?: string;
    labelStyle?: {};
    inputStyle?: {};
    inputClass?: string;
    onChange?: (value: string) => void;
    feedbackClass?: string;
    errorText?: string;
}

const Textarea = (props: TextareaProps) => {
    const [value, setValue] = useState(props.value)
    const id = `input-${props.name}-${Math.random()}`;

    const change = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (props.onChange) {
            props.onChange(event.target.value);
        }
        setValue(event.target.value);
    };

    return (
        <div className="form-group col-12 col-md-6 col-lg-4 mb-3">
            <label
                className={props.labelClass}
                style={props.labelStyle}
                htmlFor={id}
            >
                {props.label}
            </label>
            <span className="text-danger">{props.required ? '*' : ''}</span>
            <textarea
                className={props.inputClass || "form-control"}
                id={id}
                placeholder={props.placeholder}
                value={value}
                required={props.required}
                onChange={change}
                name={props.name}
                disabled={props.disabled}
                style={props.inputStyle}
                autoFocus={props.autofocus}
                maxLength={props.maxlength}
                readOnly={props.readonly}
            />
            <small
                className={props.feedbackClass || "form-text text-danger"}>
                {props.errorText}
            </small>
        </div>
    )
}

export default Textarea;
