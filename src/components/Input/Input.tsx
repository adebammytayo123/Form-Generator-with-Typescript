import React, { useState } from "react";
import hide from './hide.svg';
import show from './show.svg';

export type InputProps = {
    type: | string | "button" | "checkbox" | "date" | "email" | "file" | "hidden" | "number" | "password" | "radio" | "search" | "tel" | "text" | "time" | "url";
    name: string;
    value?: any;
    placeholder?: string;
    disabled?: boolean;
    hidden?: boolean;
    inputClass?: string;
    labelClass?: string;
    inputStyle?: {};
    labelStyle?: {};
    onChange?: (value: string) => void;
    accept?: string | "image/*" | "text/*" | "application/*" | "video/*";
    autocomplete?: "on" | "off";
    autofocus?: boolean;
    checked?: any;
    max?: number;
    maxlength?: number;
    min?: number;
    minlength?: number;
    readonly?: boolean;
    required?: boolean;
    step?: number;
    label?: string;
    feedbackClass?: string;
    errorText?: string;
    color?: | "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark" | "link";
};

export default function Input(props: InputProps) {
    const [value, setValue] = useState(props.value);
    const [visibility, setVisibility] = useState(false);
    const id = `input-${props.name}-${Math.random()}`;

    const change = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (props.onChange) {
            props.onChange(event.target.value);
        }

        if (props.type === 'checkbox') {
            setValue(event.target.checked);
        } else {
            setValue(event.target.value);
        }
    };

    const togglePassword = () => {
        setVisibility(!visibility);
    };

    if (['checkbox', 'radio'].includes(props.type)) {
        return (
            <div className="form-group col-12 col-md-6 col-lg-4 mb-3">
                <label
                    className={props.labelClass || "form-check-label"}
                    style={props.labelStyle}
                    htmlFor={id}
                >
                    {props.label} {props.required ? '*' : ''}
                    <input
                        type={props.type}
                        className={props.inputClass || "form-check-input"}
                        id={id}
                        value={value}
                        required={props.required}
                        onChange={change}
                        name={props.name}
                        disabled={props.disabled}
                        hidden={props.hidden}
                        style={props.inputStyle}
                        autoFocus={props.autofocus}
                        checked={props.checked}
                        readOnly={props.readonly}
                    />
                </label>
                <small
                    className={props.feedbackClass || "form-text text-danger"}>
                    {props.errorText}
                </small>
            </div>
        );
    } else if (props.type === "file") {
        return (
            <div className="custom-file col-12 col-md-6 col-lg-4 mb-3">
                <input
                    type={props.type}
                    className={props.inputClass || "custom-file-input"}
                    id={id}
                    required={props.required}
                    onChange={change}
                    name={props.name}
                    disabled={props.disabled}
                    hidden={props.hidden}
                    style={props.inputStyle}
                    accept={props.accept}
                    autoFocus={props.autofocus}
                    placeholder={props.placeholder}
                    readOnly={props.readonly}
                />
                <label
                    className={props.labelClass || "custom-file-label"}
                    style={props.labelStyle}
                    htmlFor={id}
                >
                    {props.label}
                </label>
                <small
                    className={props.feedbackClass || "form-text text-danger"}>
                    {props.errorText}
                </small>
            </div>
        );
    }
    else if (props.type === "password") {
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
                <div className="input-group">
                    <input
                        type={visibility ? "text" : "password"}
                        className={props.inputClass || "form-control"}
                        id={id}
                        placeholder={props.placeholder}
                        value={value}
                        required={props.required}
                        onChange={change}
                        name={props.name}
                        disabled={props.disabled}
                        hidden={props.hidden}
                        style={props.inputStyle}
                        accept={props.accept}
                        autoComplete={props.autocomplete}
                        autoFocus={props.autofocus}
                        checked={props.checked}
                        max={props.max}
                        maxLength={props.maxlength}
                        min={props.min}
                        minLength={props.minlength}
                        readOnly={props.readonly}
                        step={props.step}
                    />
                    <div className="input-group-append">
                        <div className="input-group-text">
                            <img onClick={togglePassword} src={visibility ? show : hide} style={{ width: "1.5rem" }} alt="hide" />
                        </div>
                    </div>
                </div>
                <small
                    className={props.feedbackClass || "form-text text-danger"}>
                    {props.errorText}
                </small>
            </div>
        );
    } else {
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
                <input
                    type={props.type}
                    className={props.inputClass || "form-control"}
                    id={id}
                    placeholder={props.placeholder}
                    value={value}
                    required={props.required}
                    onChange={change}
                    name={props.name}
                    disabled={props.disabled}
                    hidden={props.hidden}
                    style={props.inputStyle}
                    accept={props.accept}
                    autoComplete={props.autocomplete}
                    autoFocus={props.autofocus}
                    checked={props.checked}
                    max={props.max}
                    maxLength={props.maxlength}
                    min={props.min}
                    minLength={props.minlength}
                    readOnly={props.readonly}
                    step={props.step}
                />
                <small
                    className={props.feedbackClass || "form-text text-danger"}>
                    {props.errorText}
                </small>
            </div>
        );
    }
}
