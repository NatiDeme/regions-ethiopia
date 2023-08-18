import Image from "next/image";
const Modal = ({ contents }) => {
  return (
    <>
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
        {contents.title}
      </div>
    </>
  );
};

export default Modal;
