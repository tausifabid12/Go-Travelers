import React from "react";
import { useState } from "react";
import Calendar from "react-calendar";
import { Link } from "react-router-dom";
import "../App.css";

const Booking = () => {
  const [date, setDate] = useState(new Date());
  const [isOnFocus, setIsOnFocus] = useState(false);
  const calenderContainerClass = `mx-auto w-96 absolute ${
    isOnFocus ? "block" : "hidden"
  }`;
  const handleFocus = () => {
    setIsOnFocus(!isOnFocus);
  };
  const handleCalenderClick = () => {
    setIsOnFocus(!isOnFocus);
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row w-full">
        <div className="text-center md:text-left  500 w-1/2">
          <h1 className="text-5xl font-bold ">Book now!</h1>
          <p className="py-6">
            Get the best deal. Enjoy your vacation. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Eaque, qui.
          </p>
          {date.length > 0 ? (
            <p>
              <span>Start:</span>
              {date[0].toDateString()}
              &nbsp; &nbsp;
              <span>End:</span>
              {date[1].toDateString()}
            </p>
          ) : (
            <p>
              <span>Default selected date:</span>
              {date.toDateString()}
            </p>
          )}
        </div>
        <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100 relative">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Origin</span>
              </label>
              <input
                type="text"
                placeholder="Origin"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Destination</span>
              </label>
              <input
                type="text"
                placeholder="Destination"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="label">
                    <span className="label-text">From</span>
                  </label>
                  <input
                    value={date}
                    onFocus={handleFocus}
                    type="text"
                    className="input input-bordered w-full"
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text">To</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered w-full"
                    value={date}
                    onFocus={handleFocus}
                  />
                </div>
              </div>
            </div>
            <div className="form-control mt-6">
              <Link
                to="/bookingInfo"
                className="btn bg-yellow-400 border-0 font-bold text-gray-900"
              >
                Book
              </Link>
            </div>
          </div>
          {/* -----------------calender ----------------------- */}
          <div className={calenderContainerClass}>
            <div className="mx-auto">
              <h1 className="header">React Calendar</h1>
              <div>
                <Calendar
                  onChange={setDate}
                  value={date}
                  //   onClickDay={() => setShowTime(true)}
                  onClickDay={handleCalenderClick}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
