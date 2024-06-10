export const Banner = () => {
  return (
    <div className="w-full text-white h-[180px] bg-[url('/salesbg.png')] grid place-items-center relative overflow-hidden">
      <div>
        <h1 className="text-4xl  md:text-6xl font-bold">NEW SALES</h1>
        <p className="font-semibold">
          UP TO{" "}
          <span className="w-fit inline-block p-2 font-bold bg-black">50%</span>{" "}
          off
        </p>
      </div>
      <div className="bg-primary-foreground absolute h-4/5 aspect-square rounded-full -right-9 -bottom-20">
        <div className="absolute aspect-square rounded-full w-5 -top-2 left-2 bg-inherit" />
      </div>
    </div>
  );
};
