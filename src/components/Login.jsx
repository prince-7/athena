import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex justify-center flex-col items-center h-full">
      <form className="animate__animated animate__fadeIn w-1/5 px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-500 text-md mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="jonas@winden.com"
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-500 text-md mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
            required
          />
          {/* <p className="text-red-500 text-xs italic">
            Please choose a password.
          </p> */}
        </div>
        <div className="flex items-center justify-between">
          <button
            className="btn-normal font-bold py-2 px-4 rounded duration-500 focus:outline-none focus:shadow-outline"
            type="button"
          >
            Sign In
          </button>
          <Link to="/register">
            <span className="inline-block align-baseline font-bold text-sm link duration-500">
              New? Sign up!
            </span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;