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
      <div className="wrap">
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

      <WeatherCard tempInfo={tempInfo}  />
    </>
  );
};

export default Temp;
