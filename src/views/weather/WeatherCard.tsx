import React from "react";
import Image from "next/image";
import Sunny from "@/assets/weather-icons/wi-day-sunny.svg";
import Location from "@/assets/weather-icons/location.svg";
import WeatherCards from "./WeatherCards";

export default function WeatherCard() {
  return (
    <div className=" bg-gray-400 rounded-[30px] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 py-8 px-10 mb-6">
      <div className="flex justify-between mb-[50px]">
        <div>
          <div className="flex ml-[6px]">
            <Image alt="" src={Location} priority width={20} />
            <p className="ml-[10px] text-[25px]">New York</p>
          </div>
          <p className="text-[90px]">32°F</p>
          <p className="text-[20px]">Sunny</p>
          <p className="">2024-01-25T07:00:00+08:00</p>
        </div>
        <div>
          <Image priority src={Sunny} alt="" width={180} height={180} />
        </div>
      </div>
      <WeatherCards />
    </div>
  );
}
