import React from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import DashboardContent from "./components/DashboardContent";

export default function App() {
  return (
    // <div className="flex">
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <div className="flex-1 p-6 bg-gray-100">
          <DashboardContent />
        </div>
      </div>
    </div>
  );
}
