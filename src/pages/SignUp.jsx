import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../ProviderContext";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [error, setError] = useState("");
  const { createUser } = useContext(AuthContext);

  const handleSignUp = (e) => {
    e.preventDefault();
    const fromElement = e.target;
    // const name = fromElement.name.value;
    const email = fromElement.email.value;
    const password = fromElement.password.value;

    createUser(email, password)
      .then((result) => {
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
          <h1 className="text-5xl font-bold text-center">Register now!</h1>
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
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input input-bordered"
              />
            </div>
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
                <a href="/" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <Link
                to="/"
                type="submit"
                className="btn bg-yellow-400 border-0 text-gray-900 font-extrabold hover:text-white"
              >
                Sign up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
