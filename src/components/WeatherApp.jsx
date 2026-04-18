import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import WeatherCard from "./WeatherCard.jsx";
import News from "../Pages/News.jsx"

export default function WeatherApp() {
  const [city, setCity] = useState("Indore");

  return (
    <div className=" h-screen  overflow-hidden bg-[url(https://images.pexels.com/photos/32025116/pexels-photo-32025116.jpeg)] bg-cover bg-center  ">
      <BrowserRouter>
       <Navbar onSearch={setCity} />

      
        <Routes>
          <Route path="/" element={<WeatherCard city={city} />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
