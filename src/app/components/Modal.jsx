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
        <div className=" zoom-in absolute top-0 right-0 z-10">
          <div className="relative resize-x w-[40rem] h-screen overflow-x-hidden max-h-min rounded-xl flex flex-col bg-black/[.85] shadow-[0_5px_15px_rgba(0,0,0,0.35)] ">
            <div className="flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <button className="handle box-content w-4 h-4 p-1 text-white border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-white hover:opacity-75 hover:no-underline cursor-grab active:cursor-grabbing">
                <EllipsisVerticalIcon className="h-6 w-6 text-white" />
              </button>
              <h5
                className="text-xl font-medium leading-normal text-white"
                id="exampleModalScrollableLabel"
              >
                {contents.title}
              </h5>
              <button
                onClick={() => handleClose()}
                className="box-content w-4 h-4 p-1 text-white border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-white hover:opacity-75 hover:no-underline"
              >
                <XMarkIcon className="h-6 w-6 text-white" />
              </button>
            </div>
            <div className="flex-auto overflow-y-auto relative p-4">
              <div className="inline-block text-center">
                <h1 className="text-2xl font-bold tracking-tight text-white">
                  {contents.title}
                </h1>
              </div>
              <p className=" mb-3 leading-tight text-base font-normal text-white">
                {contents.description}
              </p>
              <div className="inline-flex flex-wrap gap-4 justify-center pt-5">
                {contents.images.map((img, i) => (
                  <div
                    key={i}
                    className="cursor-pointer"
                    onClick={() => openImageModal(i)}
                  >
                    <Image
                      className="h-auto rounded-md bg-white"
                      src={img.image_path}
                      width={250}
                      height={250}
                      alt="Picture of the author"
                    />
                  </div>
                ))}
              </div>
            </div>
            {/* <div className="flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
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
        <div className="fixed top-0 right-0 z-50 w-screen h-screen bg-black flex justify-center items-center">
          <Image
            className="max-h-full max-w-full"
            width={600}
            height={600}
            src={contents.images[selectedImageIndex].image_path}
            alt="Full-screen"
          />
          <button
            className="absolute top-4 right-4 text-white"
            onClick={closeImageModal}
          >
            Close
          </button>
        </div>
      )}
    </>
  );
};

export default Modal;
