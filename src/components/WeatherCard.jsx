import React, { useEffect, useState } from "react";

const WeatherCard = ({
  temp,
  humidity,
  pressure,
  weathermood,
  name,
  speed,
  country,
  sunset,
}) => {
  const [weatherState, setWeatherState] = useState();

  useEffect(() => {
    if (weathermood) {
      switch (weathermood) {
        case "Clouds":
          setWeatherState("wi-day-cloudy");
          break;
        case "Haze":
          setWeatherState("wi-fog");
          break;
        case "Clear":
          setWeatherState("wi-day-sunny");
          break;
        case "Rain":
          setWeatherState("wi-day-rain");
          break;
        case "Mist":
          setWeatherState("wi-dust");
          break;

        default:
          setWeatherState("wi-day-sunny");
          break;
      }
    }
  }, [weathermood]);

  let sec = sunset;
  let date = new Date(sec * 1000);
  let timeStr = `${date.getHours()}:${date.getMinutes()}`;
  return (
    <>
      <div className="w-full flex flex-col items-center ">
        <i className={`wi ${weatherState} text-white text-9xl`}></i>
        <p className="text-blue-500 text-lg font-light pt-8">{weathermood}</p>
        <p className="text-white text-xl text-opacity-60 font-semibold tracking-widest">
          {name}, {country}
        </p>
        <h1 className="text-8xl sm:text-9xl lg:text-9xl py-5 text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-red-700">
          {temp}&deg;
        </h1>
        <p className="text-white font-semibold text-opacity-70 mb-5">
          {new Date().toLocaleString()}
        </p>
        <div className="grid grid-cols-2 lg:grid-row-1 lg:grid-flow-col place-content-center gap-4 p-2">
          {/* ------------------------------------------------------------------ */}
          <div className="flex items-center ring ring-blue-400 ring-offset-2 ring-offset-black gap-2 bg-white p-4 rounded-lg shadow">
            <i
              className={
                "wi wi-sunset text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-blue-700 text-2xl lg:text-4xl"
              }
            ></i>
            <p className="text-sm">
              {timeStr} PM <br />
              Sunset
            </p>
          </div>
          {/* ------------------------------------------------------------------ */}

          <div className="flex items-center ring ring-blue-400 ring-offset-2 ring-offset-black gap-3 bg-white p-4 rounded-lg shadow">
            <i
              className={
                "wi wi-humidity text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-blue-700 text-2xl lg:text-4xl"
              }
            ></i>
            <p className="text-sm">
              {humidity} <br />
              Humidity
            </p>
          </div>
          {/* ------------------------------------------------------------------ */}

          <div className="flex items-center ring ring-blue-400 ring-offset-2 ring-offset-black gap-2 bg-white p-4 rounded-lg shadow">
            <i
              className={
                "wi  wi-rain text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-blue-700 text-2xl lg:text-4xl"
              }
            ></i>
            <p className="text-sm">
              {pressure} <br />
              Pressure
            </p>
          </div>
          {/* ------------------------------------------------------------------ */}

          <div className="flex items-center ring ring-blue-400 ring-offset-2 ring-offset-black gap-2 bg-white p-2 rounded-lg shadow">
            <i
              className={
                "wi wi-strong-wind text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-blue-700 text-2xl lg:text-4xl"
              }
            ></i>
            <p className="text-sm">
              {speed} <br />
              Speed
            </p>
          </div>
        </div>
      </div>

      {/* ================================= */}
      {/* Temperature Card */}
      {/* <article className="widget">
        <div className="weatherIcon">
          <i className={`wi ${weatherState}`}></i>
        </div>
        <div className="weatherInfo">
          <div className="temperature">
            <span>{temp}&deg;</span>
          </div>
          <div className="description">
            <div className="weatherCondition">{weathermood}</div>
            <div className="place">
              {name}, {country}
            </div>
          </div>
        </div>
        <div className="date">{new Date().toLocaleString()}</div>

        
        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-sunset"}></i>
              </p>
              <p className="extra-info-leftside">
                {timeStr} PM <br />
                Sunset
              </p>
            </div>
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-humidity"}></i>
              </p>
              <p className="extra-info-leftside">
                {humidity} <br />
                Humidity
              </p>
            </div>
          </div>
          <div className="weather-extra-info">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-rain"}></i>
              </p>
              <p className="extra-info-leftside">
                {pressure} <br />
                Pressure
              </p>
            </div>
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-strong-wind"}></i>
              </p>
              <p className="extra-info-leftside">
                {speed} <br />
                Speed
              </p>
            </div>
          </div>
        </div>
      </article> */}
    </>
  );
};

export default WeatherCard;
