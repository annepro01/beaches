import React from "react";
import { FcConferenceCall } from "react-icons/fc";

function Staycation() {
  return (
    <div
      id="travel"
      className="items-center max-w-[1240px] my-6 mx-4 grid grid-cols-1 md:grid-cols-3 gap-5 place-content-center md:mx-auto"
    >
      <div className="flex gap-8 lg:flex flex-col justify-between items-center col-span-2">
        <div className="">
          <h1 className="max-w-[700px] mb-8">
            BEACHES THAT INLCUDES STAYCATION FOR TWO PEOPLE
          </h1>
          <p className="leading-10 ">
            The plush interiors and the view surrounding this boutique resort is
            just perfect for a relaxing vacation. Located in the Mactan island
            of the central region, this resort will give you a feeling of
            staying in a tropical hideaway despite keeping you close to all the
            best places to visit in Philippines. Along with a royal touch with
            its luxurious spa, its spacious villas and suites offer a palatial
            stay in Philippines.
          </p>
        </div>
        <div className="flex gap-6">
          <div className="flex gap-5">
            <FcConferenceCall
              className="bg-blue-500 p-2 rounded-xl shadow-lg"
              size={80}
            />
            <div>
              <h2>LEADING SERVICE</h2>
              <p>ALL-INCLUSIVE COMPANY FOR 10YEARS IN-A-ROW</p>
            </div>
          </div>
          <div className="flex gap-5">
            <FcConferenceCall
              className="bg-blue-500 p-2 rounded-xl shadow-lg"
              size={80}
            />
            <div>
              <h2>AUTOMATED BOOKINGS</h2>
              <p>ALL-INCLUSIVE COMPANY FOR 10YEARS IN-A-ROW</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="text-center p-8 border rounded-lg flex flex-col gap-6 mb-10">
          <h3 className="max-w-[260px] mx-auto">
            GET AN ADDITIONAL 20% OFF <br></br>
            <span className="font-bold text-red-500"> 8 HOURS LEFT </span>
          </h3>
          <button className="w-full p-2 bg-blue-800 text-white rounded-xl shadow-lg">
            {" "}
            BOOK NOW AND ENJOY{" "}
          </button>
        </div>
        {/* Bookings */}
        <div className="grid gap-6">
          <div className="flex flex-col">
            <label>Destination</label>
            <select className="border rounded-md p-2">
              <option>Bohol</option>
              <option>Cebu</option>
              <option>Palawan</option>
              <option>Baguio</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label>Check-in</label>
            <input type="date"></input>
          </div>
          <div className="flex flex-col">
            <label>Check-out</label>
            <input type="date"></input>
          </div>
          <button className="w-full p-2 bg-blue-800 text-white rounded-xl shadow-lg">
            {" "}
            Rates & Availabilities{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Staycation;
