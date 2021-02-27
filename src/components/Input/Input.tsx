import React, { useState } from "react";
import hide from './hide.svg';
import show from './show.svg';
import { Field, ErrorMessage } from 'formik';
import TextError from "../TextError";

export default function Input(props: {
    [x: string]: any; name: any; label: any;
}) {
    const [visibility, setVisibility] = useState(false);
    const id = `input-${props.name}-${Math.random()}`;

    const { label, name, ...rest } = props;

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
                    {label} {props.required ? '*' : ''}
                    <Field
                        type={props.type}
                        className={props.inputClass || "form-check-input"}
                        id={id}
                        required={props.required}
                        {...rest}
                    />
                </label>
                <ErrorMessage name={name} />
            </div>
        );
    } else if (props.type === "file") {
        return (
            <div className="custom-file col-12 col-md-6 col-lg-4 mb-3">
                <Field
                    type={props.type}
                    className={props.inputClass || "custom-file-input"}
                    required={props.required}
                    id={id}
                    name={name}
                />
                <label
                    className={props.labelClass || "custom-file-label"}
                    style={props.labelStyle}
                    htmlFor={id}
                >
                    {label}
                </label>
                <ErrorMessage name={name} />
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
                    {label}
                </label>
                <span className="text-danger">{props.required ? '*' : ''}</span>
                <div className="input-group">
                    <Field
                        type={visibility ? "text" : "password"}
                        className={props.inputClass || "form-control"}
                        required={props.required}
                        id={id}
                        name={name}
                    />
                    <div className="input-group-append">
                        <div className="input-group-text">
                            <img onClick={togglePassword} src={visibility ? show : hide} style={{ width: "1.5rem" }} alt="hide" />
                        </div>
                    </div>
                </div>
                <ErrorMessage
                    // className={props.feedbackClass || "form-text text-danger"} 
                    name={name} />
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
                <Field
                    type={props.type}
                    className={props.inputClass || "form-control"}
                    required={props.required}
                    id={id}
                    placeholder={props.placeholder}
                    name={props.name}
                />
                <ErrorMessage
                    component={TextError}
                    name={name} />
            </div>
        );
    }
}
