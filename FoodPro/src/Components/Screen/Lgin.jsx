import React from "react";
import "../Screen/app.css";

export default function Login() {
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
      </form>
    </div>
  );
}
