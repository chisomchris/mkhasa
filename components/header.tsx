import { Menu, Search, ShoppingCart, User, X } from "lucide-react";
import Link from "next/link";
import { Wrapper } from "./ui/wrapper";
import { ModeToggle } from "./ui/toggle-theme";
import { Logo } from "./ui/logo";
import { Input } from "./ui/input";
import { Navbar } from "./navbar";
import { Suspense } from "react";
import { Button } from "./ui/button";

export const Header = async () => {
  return (
    <header className="bg-primary-foreground">
      <Wrapper className="relative flex items-center justify-between gap-x-8 pb-[64px] md:pb-4">
        <div className="flex items-center gap-2 md:gap-4">
          <Suspense
            fallback={
              <Button variant="outline" className="px-2 bg-primary-foreground">
                <Menu size={28} />
              </Button>
            }
          >
            <Navbar />
          </Suspense>
          <Logo />
        </div>

        <form className="absolute bottom-2 w-full group md:relative md:w-fit md:bottom-0">
          <Input
            id="search"
            type="text"
            placeholder="Search For item"
            className="w-full px-6 peer dark:bg-accent/40"
            edge="pill"
          />
          <button
            aria-label="search for product"
            className="absolute -translate-y-1/2 right-3 top-1/2 md:hidden md:group-focus-within:block"
            type="button"
          >
            <Search />
          </button>
        </form>

        <div className="flex items-center justify-between gap-2 sm:gap-4">
          <ModeToggle />
          <CartButton />
          <User />
        </div>
      </Wrapper>
    </header>
  );
};

const CartButton = () => {
  return (
    <Link href="/cart" className="relative p-2">
      <ShoppingCart />
      <p className="absolute grid w-4 h-4 text-xs font-bold text-center leading-none text-white rounded-full bg-destructive place-items-center top-1 right-1">
        {0}
      </p>
    </Link>
  );
};
