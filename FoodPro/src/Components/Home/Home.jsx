// import React, { useEffect, useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearchengin } from "@fortawesome/free-brands-svg-icons";
// // import Navbar from "../Header/Header";
// import Card from "../Card/Card";
// import Carousel from "../Carousel/Carousel";

// export default function Home() { 

//   const [search, setSearch] = useState([]);
//   const [foodCat, setFoodCat] = useState([]);
//   const [foodItem, setFoodItem] = useState([]);

//   const loadData = () => {
//     fetch("http://localhost:5002/api/foodData", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data.foodData, data.foodCategory);
//         setFoodItem(data.foodData);
//         setFoodCat(data.foodCategory);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   };

//   useEffect(() => {
//     loadData();
//   }, []);

//   return (
//     <div>
//       <div>
//         const MainComponent = () => {
//   const images = [
//     "../image/pizza3.jpg",
//     "../image/burgar0.jpg",
//     "../image/momos.avif",
//     "../image/pastanew.jpg",
//   ];

//   const Carousel = ({ images }) => {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [searchTerm, setSearchTerm] = useState("");

//     useEffect(() => {
//       const interval = setInterval(() => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//       }, 3000);

//       return () => clearInterval(interval);
//     }, [images.length]);

//     const handleSearchChange = (e) => {
//       setSearchTerm(e.target.value);
//     };

//     const handleSearchSubmit = (e) => {
//       e.preventDefault();
//       // Handle the search submit logic here
//       console.log("Search term submitted:", searchTerm);
//     };

//     const handlePrevClick = () => {
//       setCurrentIndex(
//         (prevIndex) => (prevIndex - 1 + images.length) % images.length
//       );
//     };

//     const handleNextClick = () => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     };

//     return (
//       <div className="relative w-screen mt-16 h-96">
//         <div className="absolute top-10 left-1/2 transform -translate-x-1/2 z-10 w-1/2 mt-8">
//           <form onSubmit={handleSearchSubmit} className="flex items-center">
//             <input
//               type="text"
//               placeholder="Search..."
//               value={searchTerm}
//               onChange={handleSearchChange}
//               className="flex-grow p-2 text-gray-700 bg-white border border-gray-300 rounded-l-full focus:outline-none focus:border-gray-500"
//               aria-label="Search"
//             />
//             <button
//               type="submit"
//               className="py-2 px-4 bg-teal-500 text-white rounded-r-full hover:bg-teal-700 focus:outline-none"
//               aria-label="Submit search"
//             >
//               <FontAwesomeIcon
//                 icon={faSearchengin}
//                 style={{ width: "22px", height: "22px" }}
//               />
//             </button>
//           </form>
//         </div>

//         <div className="overflow-hidden relative w-full h-full">
//           {images.map((image, index) => (
//             <div
//               key={index}
//               className={`absolute inset-0 transition-opacity duration-1000 ${
//                 index === currentIndex ? "opacity-100" : "opacity-0"
//               }`}
//             >
//               <img
//                 src={image}
//                 alt={`Slide ${index}`}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           ))}
//         </div>

//         <button
//           onClick={handlePrevClick}
//           className="absolute top-1/2 left-10 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-full"
//           aria-label="Previous slide"
//         >
//           &#10094;
//         </button>

//         <button
//           onClick={handleNextClick}
//           className="absolute top-1/2 right-10 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-full"
//           aria-label="Next slide"
//         >
//           &#10095;
//         </button>
//       </div>
//     );
//   };

//   return (
//     <div>
//       <Carousel images={images} />
//     </div>
//   );
// };
//       </div>

// {/* 88888888888888888888888888888 */}

//       <div className="flex flex-col items-center my-10 gap-y-10">
//         {foodCat.length !== 0 ? (
//           foodCat.map((category) => (
//             <div key={category._id} className="w-full text-center">
//               <h2 className="text-3xl font-bold text-teal-500 mb-4">
//                 {category.CategoryName}
//               </h2>
//               <div className="flex justify-around gap-x-10 mx-7 gap-y-5 flex-wrap">
//                 {foodItem.length !== 0 ? (
//                   foodItem
//                     .filter(
//                       (item) => item.CategoryName === category.CategoryName
//                     )
//                     .map((item) => (
//                       <div key={item._id} className="mb-4">
//                         <Card
//                           foodName = {item.name}
//                           options = {item.options[0]}
//                           imageSrc={item.img}
//                          />
//                       </div>
//                     ))
//                 ) : (
//                   <div>No such data found</div>
//                 )}
//               </div>
//             </div>
//           ))
//         ) : (
//           <div>Loading...</div>
//         )}
//       </div>
//     </div>
//   );
// }


import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchengin } from "@fortawesome/free-brands-svg-icons";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel"; // Import the Carousel if it is a separate component

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = () => {
    fetch("http://localhost:5002/api/foodData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.foodData, data.foodCategory);
        setFoodItem(data.foodData);
        setFoodCat(data.foodCategory);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredItems = foodItem.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const images = [
    "../image/pizza3.jpg",
    "../image/burgar0.jpg",
    "../image/momos.avif",
    "../image/pastanew.jpg",
  ];

  const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);

      return () => clearInterval(interval);
    }, [images.length]);

    const handlePrevClick = () => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
    };

    const handleNextClick = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
      <div className="relative w-screen mt-16 h-96">
        <div className="overflow-hidden relative w-full h-full">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={image}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        <button
          onClick={handlePrevClick}
          className="absolute top-1/2 left-10 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-full"
          aria-label="Previous slide"
        >
          &#10094;
        </button>

        <button
          onClick={handleNextClick}
          className="absolute top-1/2 right-10 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-full"
          aria-label="Next slide"
        >
          &#10095;
        </button>
      </div>
    );
  };

  return (
    <div>
      <Carousel images={images} />

      <div className="flex justify-center mt-8">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="flex-grow p-2 text-gray-700 bg-white border border-gray-300 rounded-full focus:outline-none focus:border-gray-500"
          aria-label="Search"
        />
      </div>

      <div className="flex flex-col items-center my-10 gap-y-10">
        {foodCat.length !== 0 ? (
          foodCat.map((category) => (
            <div key={category._id} className="w-full text-center">
              <h2 className="text-3xl font-bold text-teal-500 mb-4">
                {category.CategoryName}
              </h2>
              <div className="flex justify-around gap-x-10 mx-7 gap-y-5 flex-wrap">
                {filteredItems.length !== 0 ? (
                  filteredItems
                    .filter(
                      (item) => item.CategoryName === category.CategoryName
                    )
                    .map((item) => (
                      <div key={item._id} className="mb-4">
                        <Card
                          foodName={item.name}
                          options={item.options[0]}
                          imageSrc={item.img}
                        />
                      </div>
                    ))
                ) : (
                  <div>No such data found</div>
                )}
              </div>
            </div>
          ))
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
}



