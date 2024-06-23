import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Screen/app.css";

export default function Signup() {

  const [credentials, setcredentials] = useState(second)

  const handleSubmit = async (event) => {
    event.preventDefault();
    const respons = fetch("http://localhost:5002/api/creatuser",{
      method:"POST",
      header:{
        "Content-type":"application/json"
      }
    });
  };

  return (
    <div className="flex background-image">
      <form
        onSubmit={handleSubmit}
        className="bg-teal-500 bg-opacity-70 mx-auto p-10 rounded-lg"
      >
        <p className="font-serif font-bold text-xl">Name</p>
        <input
          type="text"
          placeholder="Enter your name"
          size="60"
          className="flex-grow p-1 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
        />
        <p className="font-serif font-bold text-xl">Email address</p>
        <input
          type="email"
          placeholder="E-mail"
          size="60"
          className="flex-grow p-1 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
        />
        <p className="font-serif font-bold text-xl">Address</p>
        <input
          type="text"
          placeholder="Enter your full address"
          size="60"
          className="flex-grow p-1 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
        />
        <p className="font-serif font-bold text-xl">Password</p>
        <input
          type="password"
          placeholder="Password"
          size="60"
          className="flex-grow p-1 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
        />
        <br />
        <button
          type="submit"
          className="font-serif font-bold mt-4 px-4 py-2 bg-teal-800 active:text-gray-500 text-white rounded-lg"
        >
          Submit
        </button>
        <Link
          to="/login"
          className="font-serif font-bold px-4 ml-4 py-3 bg-red-800 active:text-gray- text-white rounded-lg"
        >
          Already a User
        </Link>
      </form>
    </div>
  );
}
