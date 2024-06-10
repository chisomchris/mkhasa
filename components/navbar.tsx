"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "./ui/sheet";

export const Navbar = ({}) => {
  const categories = [
    {
      name: "Perfume one",
    },
    {
      name: "Perfume 2",
    },
    {
      name: "Perfume four",
    },
  ];

  // const css = `
  //               body {
  //                     overflow: hidden;
  //                   }
  //             `;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="px-2 bg-primary-foreground">
          <Menu size={28} />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <h2 className="font-bold text-2xl text-left mb-4">Categories</h2>
        </SheetHeader>

        <nav>
          <ul>
            {categories.map(({ name }, index) => (
              <li key={index}>
                <SheetClose asChild>
                  <Link
                    href={`/categories/${encodeURIComponent(name)}`}
                    className="flex items-center gap-3 py-1 hover:text-destructive"
                  >
                    {name}
                  </Link>
                </SheetClose>
              </li>
            ))}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
};
