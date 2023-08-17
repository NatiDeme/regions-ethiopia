"use client";
import Image from "next/image";
import styles from "./components/modal.css";
import Modal from "./components/Modal";
import { useState } from "react";
import Indicators from "./components/indicators";
import data from "./data/ethiopian_region_isolated.json";

export default function Home() {
  console.log(data.maps[0]);
  const [content, setContent] = useState();
  const [modalOpen, setModalOpen] = useState(false);

  const handleClick = (id) => {
    const country = data.maps.find((x) => x.map === id);
    setModalOpen(true);
    setContent(country);
  };
  return (
    <>
      {modalOpen && <Modal setOpenModal={setModalOpen} contents={content} />}
      {data.maps.map((city, i) => (
        <button id={`${i}`} key={i} onClick={() => handleClick(city.map)}>
          {" "}
          <Indicators bgprimary="bg-black" borderprimary="border-black" />
        </button>
      ))}
    </>
  );
}
