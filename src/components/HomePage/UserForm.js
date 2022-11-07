import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";


function UserForm(props) {
  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [name, setName] = useState();

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const submitHandler = (e) => {

    e.preventDefault();

    console.log(name, email);

    const person = {
      name: name,
      email: email
    };
    console.log(person);

    let url = "http://localhost:8080/persons";

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(person),
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => console.log(json))
      .catch((err) => console.error("error:" + err));

    navigate("/questions");
  };

  return (
      <form>
        <label>Email</label>
        <input
          type="email"
          onChange={emailHandler}
          id="emailId"
        />
        <br></br>
        <label>UserName</label>
        <input
          type="text"
          onChange={nameHandler}
          id="textId"
        />
        <br></br>
        <button
          id="submit"
          onClick={submitHandler}
        >
          Submit
        </button>
      </form>
  );
}

export default UserForm;
