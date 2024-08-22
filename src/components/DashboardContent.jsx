import React from "react";
import Navbar from "./Navbar";
import PaidIcon from "@mui/icons-material/Paid";
import PublicIcon from "@mui/icons-material/Public";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import TouchAppIcon from "@mui/icons-material/TouchApp";
import PaymentIcon from "@mui/icons-material/Payment";
import ExtensionIcon from "@mui/icons-material/Extension";
import BarChart from "./BarChart";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LinearProgress from "@mui/material/LinearProgress";
import GradientLineChart from "./GradientLineChart";

export default function DashboardContent() {
  return (
    <div className="">
      <Navbar />

      <div className="grid grid-cols-4 gap-6">
        <div className="bg-white p-4 rounded-2xl shadow-sm flex justify-between">
          <div>
            <h3 className="font-semibold text-sm text-gray-500 mb-0  ">
              Today's Money
            </h3>
            <h5 className="font-bold text-lg text-gray-700 mb-0">
              $53,000 <span className="text-green-400 text-sm ">+55%</span>
            </h5>
          </div>
          <div className=" mr-4 h-12 w-12 place-content-center bg-gradient-to-r from-cyan-500 to-blue-500  text-center rounded-md">
            <PaidIcon />
          </div>
        </div>
        {/* //card2 */}
        <div className="bg-white p-4 rounded-2xl shadow-sm flex justify-between">
          <div>
            <h3 className="font-semibold text-sm text-gray-500 mb-0  ">
              Today's Users
            </h3>
            <h5 className="font-bold text-lg text-gray-700 mb-0">
              2,300 <span className="text-green-400 text-sm ">+3%</span>
            </h5>
          </div>
          <div className=" mr-4 h-12 w-12 place-content-center bg-gradient-to-r from-cyan-500 to-blue-500  text-center rounded-md">
            <PublicIcon />
          </div>
        </div>
        {/* card3 */}
        <div className="bg-white p-4 rounded-2xl shadow-sm flex justify-between">
          <div>
            <h3 className="font-semibold text-sm text-gray-500 mb-0  ">
              New Clients
            </h3>
            <h5 className="font-bold text-lg text-gray-700 mb-0">
              +3,462 <span className="text-red-500 text-sm ">-2%</span>
            </h5>
          </div>
          <div className=" mr-4 h-12 w-12 place-content-center bg-gradient-to-r from-cyan-500 to-blue-500  text-center rounded-md">
            <EmojiEventsIcon />
          </div>
        </div>
        {/* card4 */}
        <div className="bg-white p-4 rounded-2xl shadow-sm flex justify-between">
          <div>
            <h3 className="font-semibold text-sm text-gray-500 mb-0  ">
              Sales
            </h3>
            <h5 className="font-bold text-lg text-gray-700 mb-0">
              +103,430 <span className="text-green-400 text-sm ">+5%</span>
            </h5>
          </div>
          <div className=" mr-4 h-12 w-12 place-content-center bg-gradient-to-r from-cyan-500 to-blue-500  text-center rounded-md">
            <ShoppingCartIcon />
          </div>
        </div>
      </div>

      {/*  */}

      <div className="flex gap-6 mt-4 ">
        {/* rocket */}
        <div className="bg-white h-60 p-4 rounded-2xl shadow-sm basis-7/12 relative">
          <img
            src="/images/rocket.svg" // Update this with the path to your image
            alt="Description"
            className="absolute top-4 right-3 w-64 h-52 object-contain rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 "
            style={{ zIndex: 1 }}
          />

          <img
            src="/images/rocket-white.png" // Update this with the path to your image
            alt="Description"
            className="absolute top-10 right-2 w-auto h-44 object-contain rounded-lg"
            style={{ zIndex: 2 }}
          />
          <div className="relative z-10">
            <h3 className="font-semibold text-sm text-gray-500 mb-4">
              Built by developers
            </h3>
            <h5 className="font-bold text-lg text-gray-700 mb-4">
              Soft UI Dashboard
            </h5>
            <p className=" text-sm text-gray-500">
              From colors, cards, typography to complex
              <br className="mb-1" /> elements, you will find the full
              <br className="mb-1" /> documentation.
            </p>
            <footer className="mt-10 font-semibold text-sm text-gray-500 ">
              Read More
            </footer>
          </div>
        </div>

        <div className="bg-white p-4 rounded-2xl shadow-sm basis-5/12 relative">
          <div
            className="    z-0 bg-[url('/images/guy.jpg')] h-auto rounded-2xl overflow-hidden bg-cover p-7  relative
          "
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gray-600 via-black/50 to-transparent z-10"></div>
            <div className="relative z-20 ">
              <h3 className="font-semibold text-white text-lg mb-2">
                Work with rockets
              </h3>
              <p className="text-white">
                Wealth creation is an evolutionarily recent positive-sum game.
                It is all about who take the opportunity first.
              </p>
              <footer className="mt-12 font-semibold text-sm text-white ">
                Read More
              </footer>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-6 mt-4 ">
        <div className="bg-white  p-4  h-[420px] rounded-2xl shadow-sm basis-5/12">
          <div className="bg-gradient-to-r from-indigo-950  to-blue-950 rounded-2xl h-[201px]">
            <BarChart />
          </div>
          <h3 className="font-semibold text-lg pt-4">Active Users</h3>
          <p className="text-gray-600">(+23%) than last week </p>
          <div className="flex justify-between p-4">
            <div className="flex flex-row">
              <div className=" mr-4 h-6 w-6 place-content-center  bg-gradient-to-r from-cyan-500 to-blue-500  text-center rounded-md ">
                <LibraryBooksIcon
                  style={{ width: "75%", height: "75%", marginBottom: "8px" }}
                />
              </div>
              <div>Users</div>
            </div>
            <div className="flex flex-row">
              <div className=" mr-4 h-6 w-6 place-content-center bg-gradient-to-r from-cyan-500 to-blue-500  text-center rounded-md">
                <TouchAppIcon
                  style={{ width: "75%", height: "75%", marginBottom: "8px" }}
                />
              </div>
              <div>Clicks</div>
            </div>
            <div className="flex flex-row">
              <div className=" mr-4 h-6 w-6 place-content-center bg-gradient-to-r from-cyan-500 to-blue-500  text-center rounded-md">
                <PaymentIcon
                  style={{ width: "75%", height: "75%", marginBottom: "8px" }}
                />
              </div>
              <div>Sales</div>
            </div>
            <div className="flex flex-row">
              <div className=" mr-4 h-6 w-6 place-content-center bg-gradient-to-r from-cyan-500 to-blue-500  text-center rounded-md">
                <ExtensionIcon
                  style={{ width: "75%", height: "75%", marginBottom: "8px" }}
                />
              </div>
              <div>Items</div>
            </div>
          </div>
          <div className="flex justify-between  px-8 pt-2 text-xl text-blue-950 font-bold ">
            <div className="flex flex-col ">
              <div className=" ">
                <div>36K</div>
              </div>
              {/* <div className=""> line </div> */}
            </div>
            <div className="flex flex-col">
              <div className=" ">
                <div>2m</div>
              </div>
              {/* <div className=""> line </div> */}
            </div>
            <div className="flex flex-col">
              <div className=" ">
                <div>435$</div>
              </div>
              {/* <div className=""> line </div> */}
            </div>
            <div className="flex flex-col">
              <div className=" ">
                <div>43</div>
              </div>
              {/* <hr class="w-12  h-1 mx-auto  bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr> */}
            </div>
          </div>
        </div>

        <div className="bg-white  p-4 rounded-lg shadow-sm basis-7/12">
          <h3 className="font-semibold text-gray-700 text-lg mb-2">
            Sales Overview
          </h3>
          <p className="text-gray-600 text-sm">
            <span className="text-gray-500 font-semibold">4% more</span> in 2021
          </p>

          <div className=" rounded-2xl h-[300px] w-full relative pt-4">
            <GradientLineChart />
          </div>
        </div>
      </div>
    </div>
  );
}
