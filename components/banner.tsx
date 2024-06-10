export const Banner = () => {
  return (
    <div className="w-full h-[180px] bg-[url('/salesbg.png')]">
      <h1 className="text-4xl  md:text-6xl font-bold">NEW SALES</h1>
      <p>
        UP TO <span className="w-fit bg-black">50% off</span>
      </p>
    </div>
  );
};
