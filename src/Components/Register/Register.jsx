import axios from "axios";
import React, { useState } from "react";

export default function Register() {
  let [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  async function submit(e) {
    e.preventDefault();
    let  {data}  = await axios.post(
      "https://routeegypt.herokuapp.com/signup",
      user
    );

    console.log(data);
  }

  function getFormValue(e) {
    let myUser = { ...user };
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
    console.log(user);
  }

  return (
    <div className="my-5">
      <h1 className="my-5">Registeration Form</h1>
      <form onSubmit={submit}>
        <div className="input-gp my-3">
          <label htmlFor="first_name">First Name:</label>
          <input
            type="text"
            onChange={getFormValue}
            id="first_name"
            className="form-control my-2"
            name="firstName"
          />
        </div>
        <div className="input-gp my-3">
          <label htmlFor="last_name">Last Name:</label>
          <input
            type="text"
            onChange={getFormValue}
            id="last_name"
            className="form-control my-2"
            name="lastName"
          />
        </div>
        <div className="input-gp my-3">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            onChange={getFormValue}
            id="age"
            className="form-control my-2"
            name="age"
          />
        </div>
        <div className="input-gp my-3">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            onChange={getFormValue}
            id="email"
            className="form-control my-2"
            name="email"
          />
        </div>
        <div className="input-gp my-3">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            onChange={getFormValue}
            id="password"
            className="form-control my-2"
            name="password"
          />
        </div>
        <div className="d-flex justify-content-end">
          <button type="submit" className="btn btn-info">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}
