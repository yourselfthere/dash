import React from "react";

export default function Navbar() {
  return (
    <div className=" h-10  flex items-center justify-between px-6 mb-5">
      <div className="text-gray-800 text-lg font-semibold">
        <span>
          <span className="text-gray-400 text-sm">Pages/</span>
          <span className="text-sm text-gray-600 "> Dashboard</span>
        </span>
        <div className="-mt-1">Dashboard</div>
      </div>
      <div className="flex items-center gap-1">
        <input
          type="text"
          placeholder="Type here..."
          className="border border-gray-300 p-2 rounded-lg mr-4"
        />
        <a className=" border-2 rounded-md flex justify-center items-center   outline-cyan-500 border-cyan-500 text-cyan-700  w-40 h-9">
          Online Builder
        </a>
        <a className="text-gray-500 ml-4">Sign In</a>
      </div>
    </div>
  );
}
