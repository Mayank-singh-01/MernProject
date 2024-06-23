import React from "react";

export default function Login() {
  return (
    <div className="flex background-image ">
      <form className="bg-teal-500 bg-opacity-70 mx-auto p-10 rounded-lg">
        <p className="font-serif font-bold text-xl">Email</p>
        <input
          type="email"
          placeholder="Enter your Email"
          size="60"
          className="flex-grow p-1 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
        />
        <p className="font-serif font-bold text-xl">Password</p>
        <input
          type="text"
          placeholder="Password"
          size="60"
          className="flex-grow p-1 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
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
