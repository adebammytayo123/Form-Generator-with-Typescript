import React from 'react';
import { Field, ErrorMessage } from 'formik';
import TextError from '../TextError';

const Select1 = (props: { [x: string]: any; label: any; name: any; options: any; }) => {
    const { label, name, options, ...rest } = props;
    if(props.multiple) {
        return (
            <div className="form-group col-12 col-md-6 col-lg-4 mb-3">
                <label htmlFor={name}>{label}</label>
                <Field
                    as="select"
                    id={name}
                    name={name}
                    className={props.inputClass || "form-control"}
                    {...rest}
                >
                    {options.map((option: { value: string | number | readonly string[] | null | undefined; key: React.ReactNode; }) => {
                        return (
                            <option key={option.value as string} value={option.value as []}>{option.key}</option>
                        )
                    })}
                </Field>
                <ErrorMessage name={name} component={TextError} />
            </div>
        )
    } else {
        return (
            <div className="form-group col-12 col-md-6 col-lg-4 mb-3">
                <label htmlFor={name}>{label}</label>
                <Field
                    as="select"
                    id={name}
                    name={name}
                    className={props.inputClass || "custom-select"}
                    {...rest}
                >
                    {options.map((option: { value: string | number | readonly string[] | null | undefined; key: React.ReactNode; }) => {
                        return (
                            <option key={option.value as string} value={option.value as string}>{option.key}</option>
                        )
                    })}
                </Field>
                <ErrorMessage name={name} component={TextError} />
            </div>
        )
    }
}

export default Select1
