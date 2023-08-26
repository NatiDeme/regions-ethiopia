"use client";
import Image from "next/image";
import Modal from "./components/Modal";
import Draggable from "react-draggable";
import { useState } from "react";
import Indicators from "./components/indicators";
import { XMarkIcon, EllipsisVerticalIcon } from "@heroicons/react/24/solid";
import data from "./data/ethiopian_region_isolated.json";

export default function Home() {
  const [content, setContent] = useState(data.maps[0]);
  const [modal, setModal] = useState(false);
  const [showDraggable, setShowDraggable] = useState(false);
  // const [isDragging, setIsDragging] = useState(false);
  // console.log(content);

  const toggleDraggable = (id) => {
    const country = data.maps.find((x) => x.map === id);
    setContent(country);
    setShowDraggable(!showDraggable);
  };

  const handleClose = () => {
    // setIsDragging(true);
    setShowDraggable(false);
  };

  // const handleDragStop = () => {
  //   setIsDragging(false);
  // };
  return (
    <>
      <div className="relative h-screen">
        {showDraggable && (
          <Draggable
            axis="both"
            handle=".handle"
            defaultPosition={{ x: 0, y: 0 }}
            grid={[5, 5]}
            bounds="parent"
            scale={1}
          >
            <div className=" zoom-in absolute top-0 right-0 z-10">
              <div className="relative resize w-[40rem] h-[29rem] overflow-scroll overflow-x-hidden max-h-min rounded-xl flex flex-col p-6 bg-white shadow-[0_5px_15px_rgba(0,0,0,0.35)] ">
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
        )}
        {data.maps.map((city, i) => (
          <button id={`${i}`} key={i} onClick={() => toggleDraggable(city.map)}>
            {" "}
            <Indicators bgprimary="bg-black" borderprimary="border-black" />
          </button>
        ))}
      </div>
    </>
  );
}
