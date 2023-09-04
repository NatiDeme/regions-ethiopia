"use client";
import React, { useState, createRef, useEffect } from "react";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline";
import hello from "../../../../public/ethiopia.geojson";
import locations from "../../../../public/basinPin.json";
import data from "../../../../public/ethiopian_region_isolated.json";
import mapboxgl from "mapbox-gl";
import Modal from "../Modal";

const Welcome = (props) => {
  const [display, setDisplay] = useState(true);
  const [content, setContent] = useState(data.maps[0]);
  const [showDraggable, setShowDraggable] = useState(false);
  let markerRef = createRef();

  const start = {
    center: [90, 0],
    zoom: 2.3,
  };
  const end = {
    center: [38.74, 9.03],
    zoom: 5.7,
  };
  const { map } = props;

  const popup = new mapboxgl.Popup({
    closeButton: false, // Remove the close button
    closeOnClick: false, // Prevents closing when clicking the map
  });

  const flyTo = (target) => {
    map.flyTo({
      ...target,
      duration: 10000,
      essential: true, // this animation is considered essential with respect to prefers-reduced-motion
    });

    if (target == start) {
      map.removeLayer("me");
      map.removeSource("me");
    } else {
      map.addSource("me", {
        type: "geojson",
        data: hello,
      });
      map.addLayer({
        id: "me",
        type: "line",
        source: "me",
        layout: {},
        paint: {
          "line-color": "#000",
          "line-width": 1,
        },
      });
      locations.features.map((n) => {
        const marker = new mapboxgl.Marker({
          color: "black",
        })
          .setLngLat(n.geometry.coordinates)
          .addTo(map);
        marker._element.id = n.id;
        marker._element.classList.add("custom-marker");
      });

      for (let i = 1; i <= 12; i++) {
        document
          .getElementById(i)
          .addEventListener("click", () => toggleDraggable(i));
      }
    }
  };

  const toggleDraggable = (id) => {
    const country = data.maps.find((x) => x.map === id);
    const markers = document.querySelectorAll(".custom-marker");
    markers.forEach((marker) => {
      marker.classList.remove("active-marker");
    });

    // Add "active-marker" class to the clicked marker
    const clickedMarker = document.getElementById(id);
    if (clickedMarker) {
      clickedMarker.classList.add("active-marker");
    }
    setContent(country);
    setShowDraggable(!showDraggable);
  };

  // useEffect(() => {}, [setFlyStart]);

  // useEffect(() => {
  //   if ((isAtStart == false) & map) {
  //   }
  // }, []);

  const handleClick = () => {
    setDisplay(false);
    const target = end;
    flyTo(target);
  };
  const handleReverse = () => {
    setDisplay(true);
    for (let x = 1; x <= 12; x++) {
      document.getElementById(x).remove();
    }
    const target = start;
    flyTo(target);
  };
  return (
    <div className="">
      <div
        className={` z-10 absolute inset-0 backdrop-blur-sm bg-black/[.5] ${
          display ? "" : "hidden"
        }`}
      >
        <div className=" flex flex-col pt-[5%] items-center">
          <h1 className="md:text-[14rem] text-[6rem]  font-cursive font-bold text-white">
            Welcome
          </h1>
          <h2 className="text-4xl font-medium text-center font-Copperplate leading sm:text-5xl text-sky-500">
            To Ministry of Water and Energy
          </h2>
          <h2 className="text-4xl font-medium text-white font-Copperplate leading sm:text-5xl">
            Digital Exhibition
          </h2>
          <p className="max-w-lg px-10 mt-8 mb-12 text-lg text-center text-white ">
            The twelve river basins in Ethiopia are some of the most diverse
            ecological regions on earth.
          </p>
          <div className="flex flex-wrap justify-center">
            <button
              onClick={handleClick}
              className="px-8 py-3 m-2 text-lg font-semibold rounded bg-[#3277d0] text-white"
            >
              Get started
            </button>
          </div>
        </div>
      </div>
      <div className="relative">
        {showDraggable && (
          <Modal setShowDraggable={setShowDraggable} contents={content} />
        )}
      </div>
      <div>
        {!showDraggable && (
          <button
            className={`absolute right-4 top-6 z-10  ${
              display ? "hidden" : ""
            }`}
            onClick={handleReverse}
          >
            <a
              href="#_"
              class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-[#3277d0]   rounded-full shadow-md group"
            >
              <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#3277d0]  group-hover:translate-x-0 ease">
                <ArrowUturnLeftIcon className="w-6 h-6 text-white" />
              </span>
              <span class="absolute flex items-center justify-center w-full h-full text-[#3277d0]  transition-all duration-300 transform group-hover:translate-x-full ease">
                HOME
              </span>
              <span class="relative invisible">Button Text</span>
            </a>
          </button>
        )}
      </div>
    </div>
  );
};

export default Welcome;
