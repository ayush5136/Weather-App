import React, { useState, useEffect } from "react";

export default function WeatherCard({ city = "Indore" }) {
  let [weatherData, setWeatherData] = useState();

  async function fetchWeatherData() {
    try {
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a3c8430baf7efabc97401fe641efc92d&units=metric`
      );
      let data = await response.json();
      setWeatherData(data);

    } catch (err) {
      console.log("Error fetching weather data", err);
    }
  }

  useEffect(() => {
    if (city) fetchWeatherData();
  }, [city]);

  const temp = weatherData?.main?.temp;
  const desc = weatherData?.weather?.[0]?.description;
  const humidity = weatherData?.main?.humidity;
  const wind = weatherData?.wind?.speed;
  const feelsLike = weatherData?.main?.feels_like;

  return (
    <div className=" mt-30 rounded-4xl p-9 flex flex-col gap-9 backdrop-blur-xl items-center justify-self-center self-center shadow-[0_0_10px_1px_black]">
      <div className="flex gap-25">
        <h1 className="text-2xl ">
          <i className="fa-solid fa-location-dot"></i> {weatherData?.name || city}
        </h1>
        <h1 className="text-2xl ">
          {weatherData?.sys?.country || "--"}
        </h1>
      </div>
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-6xl font-bold">{temp ? Math.round(temp) + "°C" : "--"}</h1>
        <h1>{desc || "--"}</h1>
      </div>
      <div className="flex gap-10">
        <div>
          <h2 className="text-xl">Humidity</h2>
          <h2>{humidity ? humidity + "%" : "--"}</h2>
        </div>
        <div>
          <h2 className="text-xl">Wind</h2>
          <h2>{wind ? wind + " km/h" : "--"}</h2>
        </div>
        <div>
          <h2 className="text-xl">Feels Like</h2>
          <h2>{feelsLike ? Math.round(feelsLike) + "°C" : "--"}</h2>
        </div>
      </div>
    </div>
  );
}
