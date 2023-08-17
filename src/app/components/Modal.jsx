import Image from "next/image";
const Modal = ({ setOpenModal, contents }) => {
  return (
    <div className="fixed z-[1] flex justify-center items-center w-screen h-full bg-[#C8C8C8]">
      <div className="w-[100rem] max-h-min mt-10 rounded-xl flex flex-col p-6 bg-white shadow-[0_5px_15px_rgba(0,0,0,0.35)] ">
        <div className="flex justify-end">
          <button
            className="text-2xl bg-transparent border-none cursor-pointer"
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="inline-block mt-3 text-center">
          <h1 className="text-2xl">{contents.title}</h1>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="flex items-center justify-center col-span-2 text-base text-center ">
            <p className="">{contents.description}</p>
          </div>
          <div>
            <Image
              src={contents.image_path}
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
        </div>
        <div className="flex-[20%] flex justify-center items-center">
          <button
            className="m-3 text-xl text-white border-none rounded-lg cursor-pointer w-36 h-11 bg-sky-500"
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
