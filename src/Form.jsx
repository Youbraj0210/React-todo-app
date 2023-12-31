import React from "react";
import "./Form.css";
import { useState } from "react";

export const Form = () => {
  let [formData, setFormData] = useState({
    fullname: "",
    password: "",
  });

  let handleChange = (e) => {
    setFormData((current) => {
      return { ...current, [e.target.name]: e.target.value };
    });

  };

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      fullname: "",
      password: "",
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="Form">
        <label htmlFor="fullname">fullname</label>
        <input
          type="text"
          name="fullname"
          id="fullname"
          placeholder="enter fullname"
          value={formData.fullname}
          onChange={handleChange}
        />
        <label htmlFor="password">password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="enter password"
          value={formData.password}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </>
  );
};
