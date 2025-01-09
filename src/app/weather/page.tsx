"use client";
import getWeather from "@/app/api/getWeather";
import { useState, useEffect } from "react";
import Header from "../components/ui/header";
import LoadingData from "../components/ui/loaders/loadingData";
import WeatherCard from "../components/cards/weatherCard";
import type { Metadata } from "next";
import BgLineEffect from "../components/ui/bgLineEffect/bgLineEffect";

export default function Weather() {
  const [weatherData, setWeatherData] = useState<any>(null);
  const [city, setCity] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getWeather(city);
        setWeatherData(data);
      } catch (error) {
        console.error("Error fetching weather:", error);
        setWeatherData(null);
      }
    };

    fetchData();
  }, [city]);

  const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  return (
    <>
      <BgLineEffect />
      <Header title="Weather App" target="/" />
      <div className="flex flex-col justify-center items-center w-full">
        <div className="flex flex-row items-center sm:w-[50%] lg:w-[20%]">
          <input
            type="text"
            id="city"
            className="input input-bordered w-[100%] mb-4"
            value={city}
            placeholder="Input the city..."
            onChange={handleCityChange}
          />
        </div>
        {weatherData ? (
          <WeatherCard weatherData={weatherData} />
        ) : (
          <LoadingData text="Waiting to input a city name" />
        )}
      </div>
    </>
  );
}
