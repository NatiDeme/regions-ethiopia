import Image from "next/image";
const Modal = ({ contents }) => {
  return (
    <>
      <div className="inline-block text-center">
        <h1 className="text-2xl font-bold tracking-tight  text-gray-900">
          {contents.title}
        </h1>
      </div>
      <p className="flex-1 mb-3 leading-tight text-sm font-normal text-gray-700 ">
        {contents.description}
      </p>
      <div>
        <Image
          src={contents.image_path}
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </div>
      <div className="flex-[10%] flex justify-center items-center">
        {contents.title}
      </div>
    </>
  );
};

export default Modal;
