import "flowbite";
import "apexcharts";
import cloudSunSunny from "../assets/cloud-sun-sunny.png";
import geofaceing from "../assets/geofacing.png";

import { AreaChartComponent } from "../Components/AreaChartComponent";

export const Home = () => {
  return (
    <>
      <h3 className=" text-gray-800 font-bold mb-2">Dashboard</h3>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-6/12 lg:w-7/12 bg-primary-300 rounded">
          {/* Content for the left column */}

          <AreaChartComponent />
        </div>
        <div className="w-full md:w-6/12 lg:w-5/12 bg-primary-300 rounded p-4 lg:p-8">
          {/* top */}
          <h3 className=" text-gray-900 font-bold ">Weather</h3>
          {/* weather top */}
          <div className="flex items-center gap-6">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                width={64}
                height={64}
                style={{
                  shapeRendering: "geometricPrecision",
                  textRendering: "geometricPrecision",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                }}
              >
                <path
                  d="M41.27 18.66c6.89 1.84 10.98 8.92 9.13 15.81-.65 2.43-1.95 4.51-3.66 6.11a8.9 8.9 0 0 0-7.84-4.68c-.55 0-1.09.04-1.61.14-1.82-4.8-6.39-8.25-11.79-8.42 1.92-6.79 8.94-10.79 15.77-8.96z"
                  style={{
                    fill: "#ffc106",
                  }}
                />
                <path
                  d="M12.29 53.71h-.1a6.96 6.96 0 0 1-6.97-6.96c0-3.81 3.05-6.9 6.85-6.97.45-6.8 6.1-12.17 13.02-12.17 5.58 0 10.34 3.5 12.2 8.43.52-.1 1.06-.14 1.61-.14 4.52 0 8.27 3.38 8.83 7.75 2.78 0 5.03 2.26 5.03 5.03a5.03 5.03 0 0 1-4.91 5.03H12.29z"
                  style={{
                    fill: "#aacef4",
                  }}
                />
                <path
                  d="M55.52 39.85a1.245 1.245 0 1 1-1.24 2.16l-1.73-1c-.59-.34-.8-1.1-.46-1.7.35-.59 1.11-.8 1.7-.46l1.73 1zM20.34 22.41c-.6-.34-.8-1.1-.46-1.7.34-.59 1.1-.8 1.7-.46l1.73 1c.59.34.8 1.1.45 1.7-.34.6-1.1.8-1.69.46l-1.73-1zm6.71-7.63c-.34-.6-.13-1.36.46-1.7.6-.34 1.36-.14 1.7.46l1 1.73c.34.59.13 1.36-.46 1.7-.6.34-1.36.13-1.7-.46l-1-1.73zm9.63-3.25a1.25 1.25 0 0 1 2.5 0v2a1.25 1.25 0 0 1-2.5 0v-2zm9.97 2a1.248 1.248 0 0 1 2.16 1.25l-1 1.73c-.35.6-1.11.8-1.71.46-.59-.35-.79-1.11-.45-1.71l1-1.73zm7.63 6.72c.6-.34 1.36-.13 1.7.46.34.6.14 1.36-.46 1.7l-1.73 1c-.59.34-1.35.14-1.7-.46-.34-.6-.13-1.36.46-1.7l1.73-1zm3.25 9.63a1.25 1.25 0 0 1 0 2.5h-2a1.25 1.25 0 0 1 0-2.5h2z"
                  style={{
                    fill: "#ffc106",
                    fillRule: "nonzero",
                  }}
                />
              </svg>
            </span>

            <div className=" flex flex-col gap-2">
              <div className="flex gap-3 items-center">
                <p className=" font-medium text-gray-800">Today</p> |
                <p className=" text-gray-400 text-xs">24 June 2021</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gray-900 font-bold">24° C</span>
                <span className=" font-medium text-gray-700">Parly Cloudy</span>
              </div>
            </div>
          </div>
          <p className="mt-5 text-gray-500 text-sm  font-medium mb-5">
            7 Days Weather
          </p>
          {/* 7 days weather wrapper */}
          <div className="flex justify-between">
            {/* weather */}
            <div className="flex flex-col gap-1">
              <img height="30" width="30" src={cloudSunSunny} alt="" />
              <p className="text-xs sm:text-sm font-medium">28-32</p>
              <p className="text-sm">Mon</p>
            </div>
            <div className="flex flex-col gap-1">
              <img height="30" width="30" src={cloudSunSunny} alt="" />
              <p className="text-xs sm:text-sm font-medium">28-32</p>
              <p className="text-sm">Mon</p>
            </div>
            <div className="flex flex-col gap-1">
              <img height="30" width="30" src={cloudSunSunny} alt="" />
              <p className="text-xs sm:text-sm font-medium">28-32</p>
              <p className="text-sm">Mon</p>
            </div>
            <div className="flex flex-col gap-1">
              <img height="30" width="30" src={cloudSunSunny} alt="" />
              <p className="text-xs sm:text-sm font-medium">28-32</p>
              <p className="text-sm">Mon</p>
            </div>
            <div className="flex flex-col gap-1">
              <img height="30" width="30" src={cloudSunSunny} alt="" />
              <p className="text-xs sm:text-sm font-medium">28-32</p>
              <p className="text-sm">Mon</p>
            </div>
            <div className="flex flex-col gap-1">
              <img height="30" width="30" src={cloudSunSunny} alt="" />
              <p className="text-xs sm:text-sm font-medium">28-32</p>
              <p className="text-sm">Mon</p>
            </div>
            <div className="flex flex-col gap-1">
              <img height="30" width="30" src={cloudSunSunny} alt="" />
              <p className="text-xs sm:text-sm font-medium">28-32</p>
              <p className="text-sm">Mon</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mt-5">
        <div className="w-full md:w-5/12 bg-primary-300 rounded">
          <div className="flex justify-between border-b p-4 lg:p-8">
            <h3 className="text-gray-900 font-semibold ">Hardware Devices</h3>
            <a href="#" className=" underline text-blue-600  font-semibold ">
              View All
            </a>
          </div>
          <ul className="">
            <li className=" flex justify-between border-b px-4 lg:px-8 py-2">
              <span className=" text-black text-sm font-medium ">
                Pest Analytics
              </span>
              <span className=" text-green-500 text-sm  font-medium ">
                Currently Active
              </span>
            </li>
            <li className=" flex justify-between border-b px-4 lg:px-8 py-2">
              <span className=" text-black text-sm font-medium">
                Moisture Tester
              </span>
              <span className=" text-green-500 text-sm font-medium ">
                Currently Active
              </span>
            </li>
            <li className=" flex justify-between border-b px-4 lg:px-8 py-2">
              <span className=" text-black text-sm font-medium">
                Temparature device
              </span>
              <span className=" text-yellow-600 text-sm  font-medium ">
                Currently Not Active
              </span>
            </li>
            <li className=" flex justify-between border-b px-4 lg:px-8 py-2">
              <span className=" text-black text-sm font-medium">
                Disease Analytics device
              </span>
              <span className=" text-green-500 text-sm  font-medium ">
                Currently Active
              </span>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-3/12 bg-primary-300 rounded">
          <div className="flex justify-between border-b p-4 lg:p-8">
            <h3 className="text-gray-900 font-semibold ">Crop Details</h3>
            <a href="#" className=" underline text-blue-600  font-semibold ">
              View All
            </a>
          </div>
          <ul className="">
            <li className=" flex justify-between border-b px-4 lg:px-8 py-2">
              <span className=" text-black font-medium text-sm lg:text-base">
                Potato
              </span>
              <span className=" text-black font-medium text-sm  lg:text-base ">
                1 Acer
              </span>
            </li>
            <li className=" flex justify-between border-b px-4 lg:px-8 py-2">
              <span className=" text-black font-medium text-sm ">Ginger</span>
              <span className=" text-black font-medium text-sm   ">
                1.5 Acer
              </span>
            </li>
            <li className=" flex justify-between border-b px-4 lg:px-8 py-2">
              <span className=" text-black font-medium text-sm ">Onion</span>
              <span className=" text-black font-medium text-sm   ">2 Acer</span>
            </li>
            <li className=" flex justify-between border-b px-4 lg:px-8 py-2">
              <span className=" text-black font-medium text-sm ">Tomato</span>
              <span className=" text-black font-medium text-sm   ">4 Acer</span>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-4/12 bg-primary-300 rounded p-4 lg:p-8">
          <h3 className="text-gray-900 font-semibold ">GeoFenced Area</h3>
          <div className="mt-4">
            <img height="200" src={geofaceing} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
