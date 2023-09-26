import React from 'react'
import { useState } from "react";

const Form = () => {

  const [formData, setformData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isVisible: false,
    mode: "",
  });

  console.log(formData);

  const changeHandler = (event) => {
    const { name, value, checked, type } = event.target;
    setformData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(formData);
  };
  return (
    <div>
      <hr/>
      <h1>This is from</h1>
        <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="First Name"
          onChange={changeHandler}
          name="firstName"
          value={formData.firstName}
        />

        <br />
        <br />

        <input
          type="text"
          placeholder="Last Name"
          onChange={changeHandler}
          name="lastName"
          value={formData.lastName}
        />

        <br />
        <br />

        <input
          type="email"
          placeholder="email"
          onChange={changeHandler}
          name="email"
          value={formData.email}
        />

        <br />
        <br />

        <textarea
          placeholder="Enter your comments"
          onChange={changeHandler}
          name="comments"
          value={formData.comments}
        />

        <br />
        <br />

        <label htmlFor="isVisible">Am I Visible</label>
        <input
          type="checkbox"
          onChange={changeHandler}
          name="isVisible"
          id="isVisible"
          checked={formData.isVisible}
        />

        <br />
        <br />

        <fieldset>
          <legend>MODE : </legend>
          <label htmlFor="online mode">online mode</label>
          <input
            type="radio"
            onChange={changeHandler}
            name="mode"
            id="online mode"
            value={"online mode"}
            checked={formData.mode === "online mode"}
          />

          <br />
          <br />

          <label htmlFor="offline mode">offline mode</label>
          <input
            type="radio"
            onChange={changeHandler}
            name="mode"
            id="offline mode"
            value={"offline mode"}
            checked={formData.mode === "online mode"}
          />
        </fieldset>

        <br />
        <br />

        <label htmlFor="favCar">select your favCar : </label>

        <select
          name="favCar"
          id="favCar"
          onChange={changeHandler}
          value={formData.favCar}
        >
          <option value="fortuner">fortuner</option>
          <option value="thar">thar</option>
          <option value="scorpio">scorpio</option>
        </select>

        <br />
        <br />

        <button>Submit</button>
      </form>
    </div>
  )
}

export default Form