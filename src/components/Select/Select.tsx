import React, { useState } from 'react';

type OptionsProps = {
    value: string;
    label?: string;
    selected?: boolean;
    disabled?: boolean;
};

export type SelectProps = {
    options: OptionsProps[];
    autofocus?: boolean;
    disabled?: boolean;
    multiple?: boolean;
    name: string;
    label?: string;
    required?: boolean;
    value?: string | string[];
    onChange?: (value: string | string[]) => void;
    inputClass?: string;
    inputStyle?: {};
    labelClass?: string;
    labelStyle?: {};
    feedbackClass?: string;
    errorText?: string;
};

export default function Select(props: SelectProps) {
    const [value, setValue] = useState(props.value);
    const id = `input-${props.name}-${Math.random()}`;

    const change = (event: React.ChangeEvent<HTMLSelectElement & { value: string | string[] }>) => {
        if (props.multiple) {
            const options = event.target.options;
            const values = [];
            for (let i = 0; i < options.length; i++) {
                const option = options.item(i);
                if (option?.selected) {
                    values.push(option.value);
                }
            }
            if (props.onChange) {
                props.onChange(values);
            }
            setValue(values);
        } else {
            if (props.onChange) {
                props.onChange(event.target.value);
            }
            setValue(event.target.value);

        }
    };

    if (!props.multiple) {
        return (
            <div className="col-12 col-md-6 col-lg-4 mb-3">
                <label
                    htmlFor={id}
                    className={props.labelClass}
                    style={props.labelStyle}
                >
                    {props.label} {props.required ? '*' : ''}
                </label>
                <select
                    autoFocus={props.autofocus}
                    multiple={props.multiple}
                    name={props.name}
                    required={props.required}
                    value={value}
                    onChange={change}
                    className={props.inputClass || "custom-select"}
                    style={props.inputStyle}
                    id={id}
                >
                    {props.options.map(option => (
                        <option
                            key={option.value}
                            value={option.value}
                            label={option.label || option.value}
                            disabled={option.disabled}
                        />
                    ))}
                </select>
                <small
                    className={props.feedbackClass || "form-text text-danger"}>
                    {props.errorText}
                </small>
            </div>
        );
    } else {
        return (
            <div className="col-12 col-md-6 col-lg-4 mb-3">
                <label
                    htmlFor={id}
                    className={props.labelClass}
                    style={props.labelStyle}
                >
                    {props.label}
                </label>
                <span className="text-danger">{props.required ? '*' : ''}</span>
                <select
                    autoFocus={props.autofocus}
                    multiple={props.multiple}
                    name={props.name}
                    required={props.required}
                    value={value}
                    onChange={change}
                    className={props.inputClass || "form-control"}
                    style={props.inputStyle}
                    id={id}
                >
                    {props.options.map(option => (
                        <option
                            key={option.value}
                            value={option.value}
                            label={option.label || option.value}
                            disabled={option.disabled}
                        />
                    ))}
                </select>
                <small
                    className={props.feedbackClass || "form-text text-danger"}>
                    {props.errorText}
                </small>
            </div>
        );
    }
}

