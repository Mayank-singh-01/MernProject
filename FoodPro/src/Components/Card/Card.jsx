import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faOpencart } from "@fortawesome/free-brands-svg-icons";
import "./app.css";

const Card = ({ imageSrc, title, price }) => {
  return (
    <div className="w-full text-teal-500 max-w-xs m-4 border-teal-500 border shadow-xl rounded-b-md">
      <img
        className="w-full h-48 object-cover"
        src={
          imageSrc ||
          "https://media.istockphoto.com/photos/paneer-tikka-at-skewers-in-black-bowl-at-dark-slate-background-paneer-picture-id1186759790?k=20&m=1186759790&s=612x612&w=0&h=e9MlX_7cZtq9_-ORGLPNU27VNP6SvDz7s-iwTxrf7wU="
        }
        alt="Card image"
      />
      <div className="pt-2 text-center font-semibold text-red-700 font-serif text-xl">
        {title || "Card title"}
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
            <option>Full</option>
            <option>Half</option>
          </select>
        </div>
        <div>
          <button
            className="border-2 font-bold active:text-white active:bg-teal-500 border-teal-500 rounded-lg px-2 py-1 flex items-center"
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
          Price : ₹{price || "99.9"}
        </p>
      </div>
    </div>
  );
};

export default Card;
