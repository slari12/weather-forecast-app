"use client";

import React, { useState } from "react";
import Image from "next/image";
import Sunny from "@/assets/weather-icons/wi-day-sunny.svg";
import Location from "@/assets/weather-icons/location.svg";

const API_KEY = "8jwnkHfy7YZE3LTNoggEtyOMkolz9NrO";
//set cities
//new york
// http://dataservice.accuweather.com/forecasts/v1/daily/5day/379727/?apikey=8jwnkHfy7YZE3LTNoggEtyOMkolz9NrO

//Akersberga
//http://dataservice.accuweather.com/forecasts/v1/daily/5day/310403/?apikey=8jwnkHfy7YZE3LTNoggEtyOMkolz9NrO

//310686
//Sweden
//http://dataservice.accuweather.com/forecasts/v1/daily/5day/310686/?apikey=8jwnkHfy7YZE3LTNoggEtyOMkolz9NrO

export default function Home() {
  const [cityInput, setCityInput] = useState("");

  async function getNewYorkData() {
    console.log("ny");
    try {
      const serverRes = await fetch(
        "http://dataservice.accuweather.com/forecasts/v1/daily/5day/379727/?" +
          "apikey=" +
          API_KEY
      );
      const data = await serverRes.json();
    } catch (error) {}
  }
  async function getAkersbergaData() {
    console.log("ny");
    try {
      const serverRes = await fetch(
        "http://dataservice.accuweather.com/forecasts/v1/daily/5day/310403/?" +
          "apikey=" +
          API_KEY
      );
      const data = await serverRes.json();
    } catch (error) {}
  }
  async function getSwedenData() {
    console.log("ny");
    try {
      const serverRes = await fetch(
        "http://dataservice.accuweather.com/forecasts/v1/daily/5day/310686/?" +
          "apikey=" +
          API_KEY
      );
      const data = await serverRes.json();
    } catch (error) {}
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-r from-slate-500 to-gray-800">
      <div className="flex gap-5">
        <button
          type="submit"
          className="hover:pointer hover:text-slate-300 ml-[15px]"
          onClick={() => getNewYorkData()}
        >
          New York
        </button>

        <button
          type="submit"
          className="hover:pointer hover:text-slate-300 ml-[15px]"
          onClick={() => getAkersbergaData()}
        >
          Akersberga
        </button>
        <button
          type="submit"
          className="hover:pointer hover:text-slate-300 ml-[15px]"
          onClick={() => getSwedenData()}
        >
          Sweden
        </button>
      </div>

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
        <div className="flex gap-5">
          <div className="weather-cards bg-gray-600 w-[200px] px-10 py-40 rounded-md">
            q
          </div>
          <div className="weather-cards bg-gray-600 w-[200px] px-10 py-40 rounded-md">
            q
          </div>
          <div className="weather-cards bg-gray-600 w-[200px] px-10 py-40 rounded-md">
            q
          </div>
          <div className="weather-cards bg-gray-600 w-[200px] px-10 py-40 rounded-md">
            q
          </div>
          <div className="weather-cards bg-gray-600 w-[200px] px-10 py-40 rounded-md">
            q
          </div>
        </div>
      </div>
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left"></div>
    </main>
  );
}
