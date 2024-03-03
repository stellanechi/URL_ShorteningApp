// import React from "react";
// import loginstyle from "../pages/login.module.css";

// src/Login.js
// import React from 'react';

const Login = () => {
  return (
    <div className=" flex items-center justify-center">
      <div className="bg-white p-20 rounded shadow-md w-2/5">
        <h2 className="flex justify-center text-3xl font-black mb-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          Login
        </h2>
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-600">
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>

          <button
            type="submit"
            className="px-6 py-2 rounded font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 ..."
          >
            Login
          </button>

          {/* <button
            type="submit"
            className="flex justify-center bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
          >
            Login
          </button> */}
        </form>
      </div>
    </div>
  );
};

export default Login;
