"use client";
import Modal from "./components/Modal";
import { useState } from "react";
import Indicators from "./components/indicators";
import data from "./data/ethiopian_region_isolated.json";

export default function Home() {
  const [content, setContent] = useState(data.maps[0]);
  const [showDraggable, setShowDraggable] = useState(false);
  // const [isDragging, setIsDragging] = useState(false);
  // console.log(content);

  const toggleDraggable = (id) => {
    const country = data.maps.find((x) => x.map === id);
    setContent(country);
    setShowDraggable(!showDraggable);
  };
  return (
    <>
      <div className="relative h-screen">
        {showDraggable && (
          <Modal setShowDraggable={setShowDraggable} contents={content} />
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
