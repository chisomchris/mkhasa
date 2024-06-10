"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cards } from "./swiper-cards";

function CustomInd({ count, current }: { count: number; current: number }) {
  return (
    <ul className="flex gap-3 items-center">
      {Array.from({ length: count }).map((_, index) => {
        return (
          <li
            key={index}
            className={`${
              index + 1 === current ? "h-2" : "h-1"
            } w-12 rounded-full block bg-foreground`}
          />
        );
      })}
    </ul>
  );
}

export function Swiper() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="sm:px-12">
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{
          loop: true,
          align: "start",
        }}
        setApi={setApi}
      >
        <CarouselContent>
          {cards.map((card, index) => (
            <CarouselItem key={index} className="lg:basis-1/2">
              <div className="grid place-items-center">{card}</div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:block" />
        <CarouselNext className="hidden sm:block" />
      </Carousel>
      <div className="py-4 grid justify-center">
        <CustomInd current={current} count={count} />
      </div>
    </div>
  );
}
