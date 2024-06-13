import heroimg1 from "@/assets/Getpaid.png";
import rectangle from "@/assets/Rectangle7.png";
import Image from "next/image";
import dolceimg1 from "@/assets/slider2.svg";
import heroimg from "@/assets/slider1.png";
import elipses from "@/assets/ellipse.png";
import { Button } from "./ui/button";

const SwiperCard = () => {
  return (
    <div className="relative min-h-[240px] max-w-3xl grid items-center w-full bg-gradient-to-tr from-destructive/35 via-gray-800/50 to-destructive rounded-3xl overflow-hidden sm:min-h-[300px] dark:via-background dark:to-destructive">
      <div className="z-50 px-4 min-[420px]:px-9 lg:px-6">
        <h1 className="text-white font-bold leading-tight">
          <span>Step into A world</span>
          <br />
          <span> of scented</span>
          <br />
          <span>seduction</span>
        </h1>

        <p className="hidden text-xs max-w-48 text-white md:block md:text-sm">
          Discover your signature scent, one spritz at a time.
        </p>
        <Button className="px-4 text-xs mt-3 font-bold text-destructive bg-white rounded-full  md:px-6">
          Explore Collection
        </Button>
      </div>

      <Image
        alt=""
        src={elipses}
        className="absolute top-0 right-0 h-3/5 w-auto"
      />
      <div className="absolute bottom-0 overflow-hidden rounded-3xl right-0 max-h-[95%] aspect-[7/5]">
        <Image alt="" src={heroimg} className="w-full h-full" />
      </div>
    </div>
  );
};

const SwiperCard1 = () => {
  return (
    <div className="relative min-h-[240px] max-w-3xl grid items-center w-full rounded-3xl overflow-hidden sm:min-h-[300px]">
      <div className="z-50 px-4 min-[420px]:px-9 lg:px-6">
        <h1 className="text-black font-bold leading-tight">
          <span>Scented dreams,</span>
          <br />
          <span> bottled just for</span>
          <br />
          <span>You</span>
        </h1>

        <p className="hidden text-xs max-w-48 text-black md:block md:text-sm">
          Eleveate your senses with our enchating Fragnances
        </p>
        <Button className="px-4 text-xs mt-3 font-bold bg-destructive text-white rounded-full md:px-6">
          Explore Collection
        </Button>
      </div>

      <div className="absolute bottom-0 top-0 left-0 right-0 overflow-hidden rounded-3xl">
        <Image
          alt=""
          src={dolceimg1}
          className="w-full h-full object-cover object-right"
        />
      </div>
    </div>
  );
};

export const SwiperCard2 = () => {
  return (
    <div className="relative min-h-[240px] max-w-3xl grid items-center w-full bg-[#A40001] rounded-3xl overflow-hidden sm:min-h-[300px]">
      <div className="z-50 px-4 min-[420px]:px-9 lg:px-6">
        <h1 className="text-white font-bold leading-tight">
          <span> Swift & Fast</span>
          <br />
          <span>Delivery</span>
        </h1>

        <p className="hidden text-xs text-white max-w-52 md:block md:text-sm">
          Swift delivery, seamless service, bringing convenience to your
          doorstep.
        </p>
        <Button className="px-4 text-xs mt-3 font-bold text-destructive bg-white rounded-full md:px-6">
          Explore Collection
        </Button>
      </div>

      <Image
        alt=""
        src={rectangle}
        className="absolute top-0 right-0 h-3/5 w-auto"
      />
      <div className="absolute bottom-0 overflow-hidden rounded-3xl right-0 max-h-[95%] aspect-[5/4]">
        <Image alt="" src={heroimg1} className="w-full h-full" />
      </div>
    </div>
  );
};

export const cards = [
  <SwiperCard key={0} />,
  <SwiperCard1 key={1} />,
  <SwiperCard2 key={2} />,
];
