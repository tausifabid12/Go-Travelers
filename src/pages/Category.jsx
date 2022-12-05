import React from "react";
import { useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Category = ({ category }) => {
  const [hover, setHover] = useState(false);

  const { thum, cat_name } = category;
  const navigate = useNavigate();
  const gotoPlaces = () => {
    navigate(`/destination/${cat_name}`);
  };

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={gotoPlaces}
      className="hero grid grid-cols-4 w-full mx-4 h-96 rounded-xl shadow-xl image-full  relative cursor-pointer ease-in-out duration-500 hover:scale-110 "
      style={{
        backgroundImage: `linear-gradient( rgba(0, 0, 0, ${
          hover ? "0.8" : "0.5"
        }), rgba(0, 0, 0, ${hover ? "0.8" : "0.5"}) ),url("${thum}")`,
      }}
    >
      <div
        className={` text-center   ${
          hover ? "absolute ease-in-out duration-500" : "hidden"
        }`}
      >
        <span className=" text-white text-6xl ">
          <FaArrowCircleRight></FaArrowCircleRight>
        </span>
      </div>
      <div className="text-white absolute bottom-6 font-bold">
        <h2 className="text-4xl ">{cat_name}</h2>
      </div>
    </div>
  );
};

export default Category;
