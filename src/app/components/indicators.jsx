const Indicators = () => {
  return (
    <>
      <div className="relative w-[70px] h-[70px] border-4 animate-spin-slow border-black border-dashed rounded-full"></div>
      <div className="absolute animate-spin-slower flex items-center justify-center border-2 border-dashed rounded-full top-[7px] left-[7px] w-14 h-14 border-slate-950">
        <div className="w-[44px] h-[44px] bg-black rounded-full " />
      </div>
    </>
  );
};

export default Indicators;
