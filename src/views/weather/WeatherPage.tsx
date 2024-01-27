import React from "react";
import WeatherInput from "@/components/SearchBar";
import WeatherCard from "./WeatherCard";

export default function WeatherPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-r from-slate-500 to-gray-800">
      <WeatherInput />
      <WeatherCard />
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left"></div>
    </main>
  );
}
