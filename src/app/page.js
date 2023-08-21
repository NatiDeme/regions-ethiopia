"use client";
import Image from "next/image";
import Modal from "./components/Modal";
import Draggable from "react-draggable";
import { useState } from "react";
import Indicators from "./components/indicators";
import { XMarkIcon, EllipsisVerticalIcon } from "@heroicons/react/24/solid";
import data from "./data/ethiopian_region_isolated.json";

export default function Home() {
  console.log(data.maps[0]);
  const [content, setContent] = useState(data.maps[0]);
  console.log(content);

  const handleClick = (id) => {
    const country = data.maps.find((x) => x.map === id);
    setContent(country);
    document.getElementById("firstElem").style.display = "block";
  };
  const handleClose = () => {
    document.getElementById("firstElem").style.display = "none";
  };
  return (
    <>
      <div className="relative h-screen">
        <Draggable
          axis="both"
          handle=".handle"
          defaultPosition={{ x: 0, y: 0 }}
          position={null}
          grid={[5, 5]}
          bounds="parent"
          scale={1}
        >
          <div id="firstElem" className=" hidden absolute z-10 resize">
            <div className="relative w-[40rem]  h-[30rem] overflow-scroll overflow-x-hidden max-h-min rounded-xl flex flex-col p-6 bg-white shadow-[0_5px_15px_rgba(0,0,0,0.35)] ">
              <button
                className="absolute top-2 right-2 w-min text-2xl bg-transparent border-none cursor-pointer"
                onClick={() => handleClose()}
              >
                <XMarkIcon className="h-6 w-6 text-black" />
              </button>
              <button className="handle absolute top-2 left-2 w-min text-2xl bg-transparent border-none cursor-pointer">
                <EllipsisVerticalIcon className="h-6 w-6 text-black" />
              </button>

              <Modal className contents={content} />
            </div>
          </div>
        </Draggable>
        {data.maps.map((city, i) => (
          <button id={`${i}`} key={i} onClick={() => handleClick(city.map)}>
            {" "}
            <Indicators bgprimary="bg-black" borderprimary="border-black" />
          </button>
        ))}
      </div>
    </>
  );
}
