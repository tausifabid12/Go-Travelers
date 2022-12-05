import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../ProviderContext";

const LogIn = () => {
  const [error, setError] = useState("");
  const { logInUser } = useContext(AuthContext);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigateToCurrentPage = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    const fromElement = e.target;
    const email = fromElement.email.value;
    const password = fromElement.password.value;

    logInUser(email, password)
      .then((result) => {
        navigateToCurrentPage(from, { replace: true });
        alert("sign up success");
        fromElement.reset();
        setError("");
      })
      .catch((error) => setError(error.message));
  };
  return (
    <div className="hero min-h-screen bg-white pt-24">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-center">Log in now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi.
          </p>
          <p className="text-center text-red-500 font-bold">{error}</p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn bg-yellow-400 border-0 text-gray-900 font-extrabold hover:text-white"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
