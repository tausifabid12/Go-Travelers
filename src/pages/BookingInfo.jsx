import React from "react";
import { Link } from "react-router-dom";

const BookingInfo = () => {
  return (
    <div className="flex min-h-screen justify-center items-center mt-10">
      <div className="mockup-phone border-yellow-400 ">
        <div className="camera"></div>
        <div className="display">
          <div className="artboard artboard-demo phone-1">
            <h4 className=" text-green-500 text-6xl font-bold">Success !!</h4>
            <p className="text-gray-900 text-xl my-5 font-semibold">
              Booking Successfull
            </p>
            <Link to="/" className="text-gray-900 font-semibold">
              Explore More Offers
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingInfo;
