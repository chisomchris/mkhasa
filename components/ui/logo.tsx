import logo from "@/assets/logo.webp";
import Image from "next/image";
import Link from "next/link";

export const Logo = ({ inverted }: { inverted?: boolean }) => {
  return (
    <Link href="/" aria-label="Navigate to home page">
      <div className={"flex gap-x-2 items-center"}>
        <Image
          src={logo}
          alt=""
          className="aspect-[40/37] hidden w-8 min-[320px]:block min-[360px]:w-10 md:w-12 lg:w-14"
        />
        <p
          className={`font-fuzzy font-bold tracking-tighter text-sm pt-2 ${
            inverted ? "text-background" : "text-foreground"
          } min-[360px]:text-lg md:text-xl lg:text-2xl`}
        >
          mkhasa
        </p>
      </div>
    </Link>
  );
};
