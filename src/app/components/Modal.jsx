/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Draggable from "react-draggable";
import React, { useState } from "react";
import { XMarkIcon, EllipsisVerticalIcon } from "@heroicons/react/24/solid";

const Modal = ({ contents, setShowDraggable }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const openImageModal = (index) => {
    setSelectedImageIndex(index);
  };
  const handleClose = () => {
    setShowDraggable(false);
    const markers = document.querySelectorAll(".custom-marker");
    markers.forEach((marker) => {
      marker.classList.remove("active-marker");
    });
  };
  const closeImageModal = () => {
    setSelectedImageIndex(null);
  };
  return (
    <>
      <Draggable
        axis="both"
        handle=".handle"
        defaultPosition={{ x: 0, y: 0 }}
        grid={[5, 5]}
        bounds="parent"
        scale={1}
      >
        <div className="absolute top-0 right-0 z-10 zoom-in">
          <div className="relative resize-x w-[22rem] md:w-[40rem]  h-screen overflow-x-hidden rounded-xl flex flex-col bg-black/[.85] shadow-[0_5px_15px_rgba(0,0,0,0.35)] ">
            <div className="flex items-center justify-between flex-shrink-0 p-4 border-b border-gray-200 handle rounded-t-md">
              <button className="box-content w-4 h-4 p-1 text-white border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-white hover:opacity-75 hover:no-underline cursor-grab active:cursor-grabbing">
                <EllipsisVerticalIcon className="w-6 h-6 text-white" />
              </button>
              <h5
                className="text-2xl font-bold leading-normal tracking-tight text-white "
                id="exampleModalScrollableLabel"
              >
                {contents.title}
              </h5>
              <button
                onClick={() => handleClose()}
                className="box-content w-4 h-4 p-1 text-white border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-white hover:opacity-75 hover:no-underline"
              >
                <XMarkIcon className="w-6 h-6 text-white" />
              </button>
            </div>
            <div className="relative flex-auto p-8 overflow-y-auto">
              <div className="flex justify-center">
                <img
                  className=" h-[20rem] w-[20rem] "
                  src={contents.image_path}
                  alt="Picture of the basin"
                />
              </div>
              <p className="px-3 mb-3 text-base font-normal leading-tight text-white ">
                {contents.description}
              </p>
              <div className="pt-5 space-x-0 space-y-2 columns-2">
                {contents.images.map((img, i) => (
                  <div
                    key={i}
                    className="flex justify-center cursor-point"
                    onClick={() => openImageModal(i)}
                  >
                    {img.image_path ? (
                      <img
                        className="h-auto rounded-md"
                        src={img.image_path}
                        alt="Picture of the basin"
                      />
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
            {/* <div className="flex flex-wrap items-center justify-end flex-shrink-0 p-4 border-t border-gray-200 rounded-b-md">
              <button
                onClick={() => handleClose()}
                className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Close
              </button>
            </div> */}
          </div>
        </div>
      </Draggable>
      {selectedImageIndex !== null && (
        <div className="fixed top-0 right-0 z-50 flex justify-center w-screen h-screen bg-black ">
          <img
            className=""
            src={contents.images[selectedImageIndex].image_path}
            alt="Full-screen"
          />
          <button
            className="absolute px-4 py-2 font-bold text-white bg-blue-500 rounded top-4 right-4 hover:bg-blue-700"
            onClick={closeImageModal}
          >
            <XMarkIcon className="w-6 h-6 text-white" />
          </button>
        </div>
      )}
    </>
  );
};

export default Modal;
