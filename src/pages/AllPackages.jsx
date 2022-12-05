import React from "react";
import { useLoaderData } from "react-router-dom";
import Places from "./Places";

const AllPackages = () => {
  const places = useLoaderData();
  return (
    <div className="pt-16">
      <Places places={places}></Places>
    </div>
  );
};

export default AllPackages;
