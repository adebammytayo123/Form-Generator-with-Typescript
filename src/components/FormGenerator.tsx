import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";

const FormGenerator = () => {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    age: 0,
    password: "",
    check: "",
  });

  const onChange = (event: Event) => {
    const { name, value }: any = event.target;
    setInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form action="" style={{ width: "300px", margin: "auto" }}>
      <div className="form-group">
        <label htmlFor="first name">First Name</label>
        <Input
          type="text"
          name="name"
          value={info.name}
          onChange={onChange}
          placeholder="Enter name"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <Input
          type="email"
          placeholder="name@example.com"
          name="email"
          value={info.email}
          onChange={onChange}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="age">Age</label>
        <Input
          type="number"
          placeholder="Enter age"
          name="age"
          value={info.age}
          onChange={onChange}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <Input
          type="password"
          placeholder="Password"
          name="password"
          value={info.password}
          onChange={onChange}
          className="form-control"
        />
      </div>
      <div className="form-check">
        <Input
          type="checkbox"
          placeholder="choose type"
          name="check"
          value={info.check}
          onChange={onChange}
          className="form-check-input"
        />
        <label htmlFor="accept-terms" className="form-check-label">
          Accept Terms &amp; Conditions
        </label>
      </div>
      <Button
        color="primary"
        outline
        block
        onClick={(e) => {
          e?.preventDefault();
          console.log(info);
        }}
      >
        Send
      </Button>
    </form>
  );
};

export default FormGenerator;
