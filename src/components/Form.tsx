import React from 'react';
// import Input, { InputProps } from "./Input/Input";
// import Select, { SelectProps } from "./Select/Select";
// import Textarea, { TextareaProps } from "./Textarea/Textarea"
import Button from './Button';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormikControl';



const FormContainer = () => {
 
  const dropDownOptions = [
    {key: 'select an option', value: ''},
    {key: 'option 1', value: 'option1'},
    {key: 'option 2', value: 'option2'},
    {key: 'option 3', value: 'option3'},
  ]

  const InitialValues = {
    name: '',
    email: '', 
    password: '',
    age: '',
    date: '',
    file: '',
    description: '',
    selectOption: '',
  };
  const validationSchema = Yup.object({
    name: Yup.string().required('required!'),
    email: Yup.string().required('required!'),
    password: Yup.string().required('required!'),
    age: Yup.number().required('required!')
    .min(18)
    .max(50),
    date: Yup.string().required('required!'),
    file: Yup.string().required('required!'),
    description: Yup.string().required('required!'),
    selectOption: Yup.string().required('required!'),
  })
  const onSubmit = (values: any, { resetForm }: any) => {
  console.log('form data', values);
  alert(JSON.stringify(values));
  resetForm({values: ""})
}

  return (
    <Formik initialValues={InitialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {
        formik => <div className="container my-4">
          <Form className='row'>
          <FormikControl control='input' type='text' label='Full Name' name='name' placeholder= 'Full Name...' value = 'name' required={true}
          />
          <FormikControl control='input' type='email' label='Email' name='email' placeholder= 'a@example.com'value = 'email' required={true}
          />
          <FormikControl control='input' type='password' label='Password' name='password' placeholder= 'Password..' value= 'password' required={true}
          />
          <FormikControl control='input' type='number' label='Age' name='age' placeholder= 'Age..'value = 'age' required={true}
          />
          <FormikControl control='input' type='date' label='Date' name='date' value = 'date' required={true}
          />
          <FormikControl control='input' type='file' label='File' name='file' value = 'file' 
          placeholder='file...' required={true} accept= "image/*"
          />
          <FormikControl control='textarea' type='text' label='Description' name='description'  placeholder= 'Enter text here..' required={true} 
          /><FormikControl control='select' label='Select a topic' name='selectOption' options ={dropDownOptions} required={true} 
          />
          <Button
            type="submit"
            color="primary"
            size="sm"
            block
            outline
          >
            Send
        </Button>
        </Form>
        </div>
      }
    </Formik>
  )
  
}

export default FormContainer;
