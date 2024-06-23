import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faOpencart} from "@fortawesome/free-brands-svg-icons";

const Card = () => {
  return (
    <div className="w-full text-teal-500 max-w-xs m-4 border-teal-500 border shadow-xl rounded-lg ">
      <img
        className="w-full h-48 object-cover"
        src="https://via.placeholder.com/400x300"
        alt="Card image"
      />
      <div className=" pt-2 text-center font-semibold text-red-700  font-serif text-xl">
        Card tital
      </div>

      <div className="pt-3 flex font-bold justify-evenly">
        <div className="">
          <label htmlFor="dropdown1" className="block text-gray-700"></label>
          <select
            id="dropdown1"
            className="focus:outline-none focus:border-teal-500 block px-5 py-1 appearance-none text-center border-2 border-teal-500 rounded-lg"
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
            className="focus:outline-none focus:border-teal-500 block py-1 border-2 appearance-none px-4 border-teal-500 rounded-lg"
          >
            <option>Full</option>
            <option>Half</option>
          </select>
        </div>
        <div>
          <button className="border-2 font-bold border-teal-500 rounded-lg px-2 py-1 ">
            Add to
            <FontAwesomeIcon
              icon={faOpencart}
              style={{ width: "20px", height: "20px" }}
            />
          </button>
        </div>
      </div>
      <div>
        <p className=" text-lg font-bold text-center text-teal-500 mb-2">
          Price : ₹99.9
        </p>
      </div>
    </div>
  );
};

export default Card;
