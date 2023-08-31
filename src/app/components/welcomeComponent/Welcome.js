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
  const [isFlying, setIsflying] = useState(false);
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
  const flyTo = (target) => {
    map.interactive = false;
    disableInteractions();
    map.flyTo({
      ...target,
      duration: 10000,
      essential: true, // this animation is considered essential with respect to prefers-reduced-motion
    });

    if (target == start) {
      map.removeLayer("me");
      map.removeSource("me");
      const marker = new mapboxgl.Marker();
      marker.remove();
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
        const marker = new mapboxgl.Marker()
          .setLngLat(n.geometry.coordinates)
          .addTo(map);
        marker._element.id = n.id;
      });

      for (let i = 1; i <= 12; i++) {
        document
          .getElementById(i)
          .addEventListener("click", () => toggleDraggable(i));
      }
    }
  };
  function disableInteractions() {
    map.dragPan.disable(); // Disable dragging
    map.scrollZoom.disable(); // Disable scroll zooming
    map.touchZoomRotate.disable(); // Disable touch zooming and rotating
    map.dragRotate.disable(); // Disable drag rotation
    map.boxZoom.disable(); // Disable box zooming
    map.doubleClickZoom.disable(); // Disable double-click zooming
  }

  const toggleDraggable = (id) => {
    const country = data.maps.find((x) => x.map === id);
    setContent(country);
    setShowDraggable(!showDraggable);
  };

  // useEffect(() => {}, [setFlyStart]);

  // useEffect(() => {
  //   console.log(display);
  //   if ((display == false) & map) {
  //   }
  // }, [display]);

  const handleClick = () => {
    setDisplay(false);
    const target = end;
    flyTo(target);
  };
  const handleReverse = () => {
    const target = start;
    flyTo(target);
    setDisplay(true);
  };
  return (
    <div className="">
      <div
        className={` z-10 absolute inset-0 backdrop-blur-sm bg-black/[.5] ${
          display ? "" : "hidden"
        }`}
      >
        <div className=" flex flex-col pt-[5%] items-center">
          <h1 className="text-[14rem]  font-cursive font-bold text-white">
            Welcome
          </h1>
          <h2 className="text-4xl font-medium font-Copperplate leading sm:text-5xl text-sky-500">
            To Ministry of Water and Energy
          </h2>
          <h2 className="text-4xl font-medium font-Copperplate leading sm:text-5xl text-white">
            Digital Museum
          </h2>
          <p className=" mt-8 mb-12 text-lg text-white max-w-lg text-center">
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
            className={`absolute right-2 top-2 z-10  ${
              display ? "hidden" : ""
            }`}
            onClick={handleReverse}
          >
            <ArrowUturnLeftIcon className="h-8 w-8 text-white" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Welcome;
