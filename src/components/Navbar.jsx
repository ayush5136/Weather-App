import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar({ onSearch }) {
  const [inputValue, setInputValue] = useState("");
  return (
    <div
      className="flex justify-between  items-center p-2   m-4 rounded-4xl backdrop-blur-xl
shadow-[0_0_10px_1px_black]    text-black "
    >
      <img
        className="w-14 rounded-4xl"
        src="https://i.pinimg.com/736x/0b/d6/f0/0bd6f026808ea57f3034f014ef62bbe5.jpg"
        alt="weather icon"
      />
      <form
        className="flex gap-3"
        onSubmit={(e) => {
          e.preventDefault();
          if (onSearch) onSearch(inputValue.trim());
          setInputValue("");
        }}
      >
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className=" text-black pl-3 py-0.5  rounded-2xl gap-1 border   focus:border-transparent"
          type="text"
          placeholder="Search for your city"
        />
        <button
          type="submit"
          className="border px-3 py-0.5 cursor-pointer rounded-2xl active:bg-gray-100"
        >
          Search
        </button>
      </form>
      <ul className="flex gap-10 pr-7">
        <li className="text-lg  text-white">
          <Link to="/">Home</Link>
        </li>
        <li className="text-lg text-white">
          <Link to="/news">News</Link>
        </li>
      </ul>
    </div>
  );
}
