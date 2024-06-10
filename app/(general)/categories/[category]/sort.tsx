"use client";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export const SortBtn = ({}) => {
  const [show, setShow] = useState(false);

  const list = [
    {
      term: "",
      display: "None",
    },
    {
      term: "sort-latest",
      display: " New Arrival",
    },
    {
      term: "sort-lowestPrice",
      display: "Price: Low - High",
    },
    {
      term: "sort-highestPrice",
      display: "Price: High - Low",
    },
    {
      term: "filter-unisex",
      display: "Unisex",
    },
    {
      term: "filter-men",
      display: "Men",
    },
    {
      term: "filter-women",
      display: "Women",
    },
  ];

  return (
    <div className="relative z-10 w-24 py-2">
      <Button className="w-full py-1 rounded-full">
        Sort By <ChevronDown size={28} />
      </Button>
      <ul
        className={`bg-white absolute top-full w-full overflow-hidden rounded-3xl ${
          show ? "" : "hidden"
        }`}
      ></ul>
    </div>
  );
};
