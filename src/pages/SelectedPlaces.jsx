import React from "react";
import { useLoaderData } from "react-router-dom";
import Places from "./Places";

const SelectedPlaces = () => {
  const places = useLoaderData();
  return <Places places={places}></Places>;
};

export default SelectedPlaces;
