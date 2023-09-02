"use client";
import React, { useState, createRef, useEffect } from "react";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline";
import Indicators from "../indicators";
import hello from '../../../../public/ethiopia.geojson'
import locations from '../../../../public/basinPin.json'
import mapboxgl from "mapbox-gl";

const Welcome = (props) => {
  const [display, setDisplay] = useState(true);
  const [flyStart, setFlyStart] = useState(false);
  let markerRef = createRef()

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

    if(target == start){
      map.removeLayer('me')
      map.removeSource('me')
    } else {
      map.addSource('me',{
        'type': 'geojson',
        'data': hello
      })
      map.addLayer({
        'id': 'me', 
        'type': 'line',
        'source': 'me', 
        'layout': {},
        'paint': {
          'line-color': '#000',
          'line-width': 1
        }
        });
        locations.features.map((n) => {
          const marker =  new mapboxgl.Marker({
            color: 'black'
          })
        .setLngLat(n.geometry.coordinates)
        .addTo(map);
        marker._element.id = n.id;
        })
      

    }  
  };

  useEffect(()=> {
  }, [setFlyStart])


  useEffect(()=> {
    if(display == false & map){ 

    }
  }, [display])

  const handleClick = () => {
    setDisplay(false);
    const target = end;
    flyTo(target);
  };

 
  const handleReverse = () => {
    setFlyStart(false);
    const target = start;
    for (let x=0; x <= 11; x++){
      document.getElementById(x).remove()
    }
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
          className={`absolute z-10 right-2 top-2 ${display ? "hidden" : ""}`}
          onClick={handleReverse}
        >
          <ArrowUturnLeftIcon className="h-8 w-8 text-white" />
        </button>
      </div>
    </div>
  );
};

export default Welcome;
