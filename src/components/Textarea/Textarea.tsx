import React from 'react'
import { Field, ErrorMessage } from 'formik';
import TextError from '../TextError';

const Textarea = (props: { [x: string]: any; name: any; labelClass?: any; labelStyle?: any; label: any; required?: any; inputClass?: any; }) => {
    const id = `input-${props.name}-${Math.random()}`;
    const {name, label, ...rest} = props;
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
            <Field
                as="textarea"
                className={props.inputClass || "form-control"}
                id={id}
                required={props.required}
                {...rest}
                name={name}
                type={props.type}
            />
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default Textarea;
