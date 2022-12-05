import React from "react";
import { useNavigate } from "react-router-dom";

const Place = ({ place }) => {
  const { place_name, thum, dec } = place;
  const navigateToBooking = useNavigate();
  const gotoBookings = () => {
    navigateToBooking(`/places/${place_name}`);
  };
  return (
    <div className="carousel-item w-full  justify-center ">
      <div className="card w-[90%] glass h-[581px] p-4 shadow-xl">
        <figure>
          <img src={thum} className="w-full h-[350px] rounded-xl " alt="car!" />
        </figure>
        <div className="card-body text-white ">
          <h2 className="card-title text-2xl font-bold">{place_name}</h2>
          <p className="text-left text-lg">{dec}</p>
          <div className="card-actions justify-end">
            <button
              onClick={gotoBookings}
              className="btn bg-yellow-500  text-white  font-bold"
            >
              Book now!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Place;
