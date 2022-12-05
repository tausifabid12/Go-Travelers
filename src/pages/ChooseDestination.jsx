import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Category from "./Category";

const ChooseDestination = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://go-travlers-server.vercel.app/category")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="min-w-full min-h-screen mt-24">
      <div className="text-left pl-12 py-12">
        <h1 className=" text-6xl text-gray-900 pb-3">Most Popular Tours</h1>
        <p className=" text-xl text-gray-900">
          Latin literature from 45 BC, making it over 2000 years old
        </p>
      </div>

      <div className="flex">
        {categories.map((category) => (
          <Category key={category?.cat_id} category={category}></Category>
        ))}
      </div>
    </div>
  );
};

export default ChooseDestination;
