import React from 'react';
import Input, { InputProps } from "./Input/Input";
import Select, { SelectProps } from "./Select/Select";
import Textarea, { TextareaProps } from "./Textarea/Textarea"
import Button from './Button';

const Form = () => {
  const inputs: InputProps[] = [
    {
      label: 'Full Name',
      name: 'name',
      type: 'text',
      placeholder: 'Enter Name..',
      required: true,
      value: '',
      errorText: 'Full name is required !' || 'Name must be atleast 10 characters long',
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "a@example.com",
      required: true,
      value: '',
      errorText: 'Email is required !' || 'Please enter a valid email',
    },
    {
      label: "Password",
      name: "password",
      type: 'password',
      placeholder: "Enter Password",
      required: true,
      value: '',
      errorText: 'Password is required !' || 'Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji',
    },
    {
      label: "Age",
      name: "number",
      type: "number",
      placeholder: "Age",
      required: true,
      value: '',
      errorText: 'Age is Required !' || 'User must be above 18 years of Age',
    },
    {
      label: "Date",
      name: "date",
      type: "date",
      required: true,
      value: '',
      errorText: 'Date is Required !' || 'Please enter a valid date',
    },
    {
      label: "File",
      name: "file",
      type: "file",
      accept: "image/*",
      required: true,
      value: '',
      errorText: 'File is required !' || 'Please select a file',
    },
    {
      label: "Terms and conditions",
      name: "checkbox",
      type: "checkbox",
      required: false,
      errorText: 'Required !',
    },
    {
      label: "Male",
      name: "gender",
      type: "radio",
      value: "male",
      required: false,
      errorText: 'Required !',
    },
    {
      label: "Female",
      name: "gender",
      type: "radio",
      value: "female",
      required: false,
      errorText: 'Required !',
    },
  ];

  const selects: SelectProps[] = [
    {
      required: true,
      disabled: false,
      name: "select_Favorite_Fruits",
      multiple: true,
      label: "Select Favorite Fruits",
      errorText: "Please select your preferred fruits !",
      options: [
        { value: "apple", label: "Apple" },
        { value: "banana", label: "Banana" },
        { value: "cherry", label: "Cherry" },
        { value: "mango", label: "Mango" },
        { value: "orange", label: "Orange" },
        { value: "pawpaw", label: "Paw Paw" },
      ],
    },
  ];
  const texts: TextareaProps[] = [
    {
      label: "Comment",
      name: "comment",
      type: "text",
      value: "",
      required: true,
      placeholder: "Enter your comment here..",
      cols: 3,
      rows: 3,
      maxlength: 150,
      autofocus: false,
      readonly: false,
      disabled: false,
      errorText: 'Please leave a comment !',
    },
  ]
  return (
    <form className="row">
      {inputs.map((input, index) => (
        <Input key={index} {...input} />
      ))}
      {selects.map((select, index) => (
        <Select key={index} {...select} />
      ))}
      {texts.map((text, index) => (
        <Textarea key={index} {...text} />
      ))}
      <Button
        type="submit"
        color="primary"
        size="sm"
        block
        outline
        onClick={(e) => {
          e.preventDefault();
          console.log(inputs);
          console.log(selects)
          console.log(texts)
        }}
      >
        Send
        </Button>
    </form>
  )

}

export default Form;
