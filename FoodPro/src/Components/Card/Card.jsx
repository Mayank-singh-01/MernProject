import React from "react";

const Card = () => {
  return (
    <div className="w-full sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        className="w-full h-48 object-cover"
        src="https://via.placeholder.com/400x300"
        alt="Card image"
      />

      <div className="p-6">
        <div className="mb-4">
          <label htmlFor="dropdown1" className="block text-gray-700">
            Dropdown 1
          </label>
          <select
            id="dropdown1"
            className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          >
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="dropdown2" className="block text-gray-700">
            Dropdown 2
          </label>
          <select
            id="dropdown2"
            className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          >
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
        </div>

        <div className="text-xl font-bold text-gray-800">$99.99</div>
      </div>
    </div>
  );
};

export default Card;
