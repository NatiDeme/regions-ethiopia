const Modal = ({ setOpenModal, contents }) => {
  return (
    <div className="fixed z-[1] flex justify-center items-center w-screen h-screen bg-[#C8C8C8]">
      <div className="w-[31.25rem] h-[31.25rem] rounded-xl flex flex-col p-6 bg-white shadow-[0_5px_15px_rgba(0,0,0,0.35)] ">
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
          <h1>{contents.title}</h1>
        </div>
        <div className="flex-[50%] flex justify-center items-center text-2xl text-center">
          <p>The next page looks amazing. Hope you want to go there!</p>
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
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
