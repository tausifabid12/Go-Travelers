import React from "react";
import { Link } from "react-router-dom";
import heroImg from "../assets/hero-img.jpg";

const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url("${heroImg}")` }}
    >
      <div className="hero-overlay bg-black bg-opacity-80"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="w-3/4 text-white">
          <h1 className="mb-5 text-6xl font-bold text-white">
            Find your next destination With{" "}
            <span className="text-yellow-400">Go travelers</span>
          </h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Link to="/destination">
            <button className="btn bg-yellow-500  text-white font-bold ">
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
