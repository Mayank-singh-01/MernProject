import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faOpencart } from "@fortawesome/free-brands-svg-icons";
import "./app.css";

const Card = ({ imageSrc, foodName, options }) => {

  let priceOptions = Object.keys(options)

  return (
    <div className="w-full bg-gray-100 text-teal-500 max-w-xs xl:m-5 lg:m-5 md:m-5 shadow-xl rounded-xl">
      <img
        className="w-full h-48 rounded-t-xl object-cover"
        src={imageSrc}
        alt="Card image"
        style={{ width: "400px", }}
      />
      <div className="pt-2 text-center font-semibold text-red-700 font-serif text-xl">
        {foodName || "Card title"}
      </div>

      <div className="pt-3 flex font-bold justify-evenly">
        <div>
          <label htmlFor="quantity" className="block text-gray-700 sr-only">
            Quantity
          </label>
          <select
            id="quantity"
            className="select-style"
            aria-label="Select quantity"
          >
            {Array.from(Array(6), (e, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="size" className="block text-gray-700 sr-only">
            Size
          </label>
          <select id="size" className="select-style">
            {priceOptions.map((data) => {
              return (
                <option key={data} value={data}>
                  {" "}
                  {data}{" "}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <button
            className="border-2 font-bold bg-white active:text-white active:bg-teal-500 border-teal-500 rounded-lg px-2 py-1 flex items-center"
            aria-label="Add to cart"
          >
            Add to
            <FontAwesomeIcon
              icon={faOpencart}
              className="ml-1"
              style={{ width: "20px", height: "20px" }}
            />
          </button>
        </div>
      </div>
      <div>
        <p className="text-lg font-bold text-center text-teal-500 mb-2">
          Price : ₹{"99.9"}
        </p>
      </div>
    </div>
  );
};

export default Card;
