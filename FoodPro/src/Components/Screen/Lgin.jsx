import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Screen/app.css";

export default function Login() {

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:5002/api/createuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      });

      const json = await response.json();
      alert(json.message);
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    <div className="flex background-image ">
      <form className="bg-teal-500 bg-opacity-70 mx-auto p-10 rounded-lg">
        <p className="custom-text">Email</p>
        <input
          type="email"
          placeholder="Enter your Email"
          size="60"
          className="input-field"
        />
        <p className="custom-text">Password</p>
        <input
          type="text"
          placeholder="Password"
          size="60"
          className="input-field"
        />

        <br />
        <button
          type="submit"
          className="font-serif font-bold  mt-4 px-4 py-2 bg-teal-800 active:text-gray-500 text-white rounded-lg"
        >
          Submit
        </button>
        <Link
          to="/CreatUser"
          className="font-serif font-bold px-4 ml-4 py-3 bg-red-800 active:text-gray-500 text-white rounded-lg"
        >
          New User
        </Link>
      </form>
    </div>
  );
}
