import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../ProviderContext";

const Header = () => {
  const { logOut, user } = useContext(AuthContext);
  console.log(user);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };

  return (
    <div className="navbar bg-[#131914]   fixed top-0 z-50 text-white text-xl ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/" className="hover:text-yellow-400">
                Home
              </Link>
            </li>

            <li>
              <Link to="/destination" className="hover:text-yellow-400">
                Destinations
              </Link>
            </li>
            <li>
              <Link to="/allPackages" className="hover:text-yellow-400">
                AllPackages
              </Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          daisyUI
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to="/" className="hover:text-yellow-400">
              Home
            </Link>
          </li>

          <li>
            <Link to="/destination" className="hover:text-yellow-400">
              Destinations
            </Link>
          </li>
          <li>
            <Link to="/allPackages" className="hover:text-yellow-400">
              AllPackages
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user?.uid ? (
          ""
        ) : (
          <div>
            <Link to="/logIn">
              <button className="btn btn-outline glass text-white btn-sm mr-4  hover:text-yellow-400">
                Log in
              </button>
            </Link>
            <Link to="/signUp">
              <button className="btn btn-outline glass text-white btn-sm mr-4 hover:text-yellow-400">
                Sign up
              </button>
            </Link>
          </div>
        )}

        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://placeimg.com/80/80/people" alt="profile pic" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow-xl bg-base-100 rounded-box w-52"
          >
            <li>
              <button className="justify-between text-gray-900 font-bold">
                Profile
                <span className="badge">New</span>
              </button>
            </li>
            <li>
              <button className="text-gray-900 font-bold">{user?.email}</button>
            </li>
            <li>
              {user?.uid && (
                <button
                  onClick={handleLogOut}
                  className="text-gray-900 font-bold"
                >
                  Logout
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
