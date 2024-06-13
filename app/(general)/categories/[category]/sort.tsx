"use client";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { MouseEventHandler, useState } from "react";

export const SortBtn = ({}) => {
  const [show, setShow] = useState(false);
  const [term, setTerm] = useState("");

  const list = [
    {
      term: "",
      display: "None",
    },
    {
      term: "sort-latest",
      display: "New Arrival",
    },
    {
      term: "sort-lowest_price",
      display: "Price: Low - High",
    },
    {
      term: "sort-highest_price",
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
      <Button
        className="w-full py-1 rounded-full"
        onClick={() => {
          setShow((v) => !v);
        }}
      >
        Sort By <ChevronDown size={28} />
      </Button>
      <ul
        className={`absolute top-full right-0 py-4 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50 shadow-foreground/15 shadow-sm rounded-sm ${
          show ? "" : "hidden"
        }`}
      >
        {list.map((item, index) => {
          return (
            <ListItem
              key={index}
              {...item}
              activeFilter={term}
              onclick={() => {
                setTerm(item.term);
                setShow(false);
              }}
            />
          );
        })}
      </ul>
    </div>
  );
};

const ListItem = ({
  term,
  display,
  activeFilter,
  onclick,
}: {
  term: string;
  display: string;
  activeFilter: string;
  onclick: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <li>
      <button
        className={`text-nowrap px-5 py-1 w-full text-left ${
          activeFilter === term ? "bg-foreground text-background" : ""
        }`}
        onClick={onclick}
      >
        {display}
      </button>
    </li>
  );
};
