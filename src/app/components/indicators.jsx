const Indicators = ({ bgprimary, borderprimary }) => {
  return (
    <>
      <div className="w-[70px] h-[70px] animate-wiggle">
        <div
          className={`relative w-[70px] h-[70px] border-4 animate-spin-slow ${borderprimary} border-dashed rounded-full`}
        ></div>
        <div
          className={`absolute animate-spin-slower  flex items-center justify-center border-2 border-dashed rounded-full top-[7px] left-[7px] w-14 h-14 ${borderprimary}`}
        >
          <div className={`w-[44px] h-[44px] ${bgprimary} rounded-full `} />
        </div>
      </div>
    </>
  );
};

export default Indicators;
