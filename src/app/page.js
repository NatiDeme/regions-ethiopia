"use client";
import Image from "next/image";
import Modal from "./components/Modal";
import Draggable from "react-draggable";
import { useState } from "react";
import Indicators from "./components/indicators";
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
      <div
        id="firstElem"
        className=" hidden fixed z-[1] w-screen h-full bg-transparent"
      >
        <Draggable
          axis="both"
          handle=".handle"
          defaultPosition={{ x: 0, y: 0 }}
          position={null}
          grid={[10, 10]}
          scale={1}
        >
          <div className="handle">
            <div className="w-[50rem] max-h-min mt-10 rounded-xl flex flex-col p-6 bg-white shadow-[0_5px_15px_rgba(0,0,0,0.35)] ">
              <div className="w-full flex justify-end">
                <button
                  className="text-2xl bg-transparent border-none cursor-pointer"
                  onClick={() => handleClose()}
                >
                  X
                </button>
              </div>
              <Modal contents={content} />
            </div>
          </div>
        </Draggable>
      </div>
      {data.maps.map((city, i) => (
        <button id={`${i}`} key={i} onClick={() => handleClick(city.map)}>
          {" "}
          <Indicators bgprimary="bg-black" borderprimary="border-black" />
        </button>
      ))}
    </>
  );
}
