import React from "react";

const Card = () => {
  return (
    <div className="w-full max-w-xs m-4 border-teal-500 border shadow-xl rounded-lg ">
      <img
        className="w-full h-48 object-cover"
        src="https://via.placeholder.com/400x300"
        alt="Card image"
      />
      <div className=" pt-2 text-center font-serif text-xl">Card tital</div>
      <div className="text-center pt-2 font-serif">importent text in card</div>

      <div className="pt-3 flex justify-evenly">
        <div className="">
          <label htmlFor="dropdown1" className="block text-gray-700"></label>
          <select
            id="dropdown1"
            className="block px-5 py-1 appearance-none text-center border-2 border-teal-500 rounded-lg"
          >
            {Array.from(Array(6), (e, i) => {
              return (
                <option key={i + 1} value={i + 1}>
                  {" "}
                  {i + 1}
                </option>
              );
            })}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="dropdown1" className="block text-gray-700"></label>
          <select
            id="dropdown1"
            className="block py-1 border-2 appearance-none px-4 border-teal-500 rounded-lg"
          >
            <option>Full</option>
            <option>Half</option>
          </select>
        </div>

        <div className="text-xl font-bold text-gray-800">₹99.99</div>
      </div>
    </div>
  );
};

export default Card;
