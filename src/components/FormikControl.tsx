import React from 'react';
import Input from '../components/Input/Input'
import Textarea from './Textarea/Textarea';
import Select1 from './Select/Select';


const FormikControl = (props: { control: any; type?: string; label: string; name: string; 
    placeholder?: string;  inputClass?: string; labelClass?: string; inputStyle?: {}; labelStyle?: {}; required?: boolean; value?: string | []; accept?: string; options?: any; multiple?: boolean; 
}) => {
    const { control,label, name, options, ...rest } = props;
    switch(control) {
        case 'input': return <Input label={label} name={name} {...rest} />
        case 'textarea': return <Textarea label={label} name={name} {...rest} />
        case 'select': return <Select1  label={label} name={name} options={options} {...rest} />
            default: return null;
    }
}

export default FormikControl;
