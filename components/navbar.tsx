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
import axios from "axios";
import { env } from "@/lib/env";
import { ActiveLink } from "./ui/active-link";

export const Navbar = async () => {
  async function getCategories() {
    try {
      const response = await axios.get(`${env.API_BASE_URL}/all/category`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
  const categories: { name: string }[] = await getCategories();
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
                <ActiveLink
                  href={`/categories/${encodeURIComponent(name.trim())}`}
                  className="flex items-center gap-3 py-1 hover:text-destructive"
                >
                  <SheetClose>{name}</SheetClose>
                </ActiveLink>
              </li>
            ))}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
};
