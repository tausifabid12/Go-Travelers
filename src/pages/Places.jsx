import React from "react";
import bgImg from "../assets/hero-img.jpg";
import Place from "./sharedComponents/Place";

const Places = ({ places }) => {
  return (
    <div
      className="min-h-screen w-full "
      style={{
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6) ),url("${bgImg}")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="text-left  text-white pl-8 py-16">
        <h3 className="text-6xl pb-5">Travel list</h3>
        <p className="text-xl">Choose the best deal for you</p>
      </div>
      <div className="w-full ">
        <div className="grid grid-cols-2 gap-y-10">
          {places.map((place) => (
            <Place place={place} key={place.place_id}></Place>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Places;
