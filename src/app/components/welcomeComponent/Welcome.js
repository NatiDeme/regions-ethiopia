"use client";
import React, { useState } from "react";
import Indicators from "../indicators";

const Welcome = (props) => {
  const [display, setDisplay] = useState(true);
  const { map } = props;
  const flyTo = () => {
    map.flyTo({
      center: [38.74, 9.03],
      duration: 10000,
      zoom: 5,
      essential: true, // this animation is considered essential with respect to prefers-reduced-motion
    });
  };
  const handleClick = () => {
    setDisplay(false);
    flyTo();
  };
  return (
    <div
      className={` absolute inset-0 backdrop-blur-sm bg-black/[.5] ${
        display ? "" : "hidden"
      }`}
    >
      <div className=" flex flex-col pt-[5%] items-center">
        <h1 class="text-[14rem]  font-cursive font-bold text-white">Welcome</h1>
        <h2 class="text-4xl font-medium font-Copperplate leading sm:text-5xl text-sky-500">
          To Ministry of Water and Energy
        </h2>
        <h2 class="text-4xl font-medium font-Copperplate leading sm:text-5xl text-white">
          Digital Museum
        </h2>
        <p class=" mt-8 mb-12 text-lg text-white max-w-lg text-center">
          The twelve river basins in Ethiopia are some of the most diverse
          ecological regions on earth.
        </p>
        <div class="flex flex-wrap justify-center">
          <button
            onClick={handleClick}
            class="px-8 py-3 m-2 text-lg font-semibold rounded bg-[#3277d0] text-white"
          >
            Get started
          </button>
        </div>
      </div>
      {/* <button type="button">
        <Indicators bgprimary="bg-black" borderprimary="border-black" />
      </button> */}
    </div>
  );
};

export default Welcome;
