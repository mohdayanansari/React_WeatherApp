import React, { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";

const Temp = () => {
  const [searchValue, setSearchValue] = useState("pune");
  const [tempInfo, setTempInfo] = useState({});

  const getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=${process.env.REACT_APP_APPID}`;
      // console.log(process.env.REACT_APP_APPID);
      const res = await fetch(url);
      const data = await res.json();

      const { temp, humidity, pressure } = data.main;
      const { main: weathermood } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;

      const myNewWeatherInfo = {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
      };

      setTempInfo(myNewWeatherInfo);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeatherInfo();
  }, []);

  return (
    <>
      <div className="h-screen w-screen p-10 relative">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-700 text-2xl sm:text-4xl lg:text-6xl pb-10 uppercase font-bold text-center my-font">
          Search for weather
        </h1>
        <div className="flex justify-center w-full gap-2 mb-16">
          <input
            type="search"
            placeholder="search..."
            autoFocus
            id="search"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
            className="w-8/12 sm:w-5/12 lg:w-5/12 rounded-lg text-white text-opacity-70 bg-color outline-none border-none text-2xl shadow-inner"
          />
          <button
            className="bg-gradient-to-l px-5 lg:w-2/12 rounded-lg text-xl text-white bg-blue-400 from-blue-700 "
            onClick={getWeatherInfo}
            type="button"
          >
            Search
          </button>
        </div>

        <WeatherCard {...tempInfo} />


        <p className="text-white text-center text-xs lg:mt-2 mt-5 text-opacity-50">Made by <a href="https://github.com/objectorienteddev07">Ayan Ansari</a> || 2021</p>
      </div>

      {/* <div className="wrap">
        <input
          type="search"
          placeholder="search..."
          autoFocus
          id="search"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          className="searchTerm"
        />

        <button className="searchButton" onClick={getWeatherInfo} type="button">
          Search
        </button>
      </div>

      <WeatherCard {...tempInfo} /> */}
    </>
  );
};

export default Temp;
