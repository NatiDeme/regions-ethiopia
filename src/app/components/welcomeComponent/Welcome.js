"use client";
import React, { useState } from "react";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline";
import Indicators from "../indicators";

const Welcome = (props) => {
  const [display, setDisplay] = useState(true);
  const [flyStart, isAtStart] = useState(true);
  const start = {
    center: [90, 0],
    zoom: 2.3,
  };
  const end = {
    center: [38.74, 9.03],
    zoom: 5.7,
  };
  const { map } = props;
  const flyTo = (target) => {
    map.flyTo({
      ...target,
      duration: 10000,
      essential: true, // this animation is considered essential with respect to prefers-reduced-motion
    });
  };
  const handleClick = () => {
    setDisplay(false);
    const target = end;
    flyTo(target);
  };
  const handleReverse = () => {
    isAtStart(false);
    const target = start;
    flyTo(target);
    setDisplay(true);
  };
  return (
    <>
      <div
        className={` absolute inset-0 backdrop-blur-sm bg-black/[.5] ${
          display ? "" : "hidden"
        }`}
      >
        <div className=" flex flex-col pt-[5%] items-center">
          <h1 class="text-[14rem]  font-cursive font-bold text-white">
            Welcome
          </h1>
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
      <div className="">
        <button
          className={`absolute right-2 top-2 ${display ? "hidden" : ""}`}
          onClick={handleReverse}
        >
          <ArrowUturnLeftIcon className="h-8 w-8 text-white" />
        </button>
      </div>
    </>
  );
};

export default Welcome;
