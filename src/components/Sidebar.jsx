import React from "react";

export default function Sidebar() {
  return (
    <div className="h-auto w-64 p-5  bg-gray-100">
      <h2 className="text-2xl font-semibold mb-8">Soft UI Dashboard</h2>
      <ul>
        <li className="mb-4 p-2 hover:bg-gray-700 rounded-lg cursor-pointer">
          Home
        </li>
        <li className="mb-4 p-2 hover:bg-gray-700 rounded-lg cursor-pointer">
          Profile
        </li>
        <li className="mb-4 p-2 hover:bg-gray-700 rounded-lg cursor-pointer">
          Settings
        </li>
        <li className="mb-4 p-2 hover:bg-gray-700 rounded-lg cursor-pointer">
          Logout
        </li>
      </ul>
    </div>
  );
}
