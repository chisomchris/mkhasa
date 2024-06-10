import Link from "next/link";
import { cn, format } from "@/lib/utils";
import Image from "next/image";
import { Button } from "./button";

export type ProductProps = {
  product: string;
  category: string;
  price: number;
  image: string;
  id: string | number;
  className?: string;
};
export const Product = ({
  product,
  category,
  price,
  image,
  id,
  className,
}: ProductProps) => {
  return (
    <Link href={`/products/${id}`}>
      <div
        className={cn(
          "rounded-2xl overflow-hidden bg-card h-full @container",
          className
        )}
      >
        <div className="w-full aspect-[1.25] relative">
          <Image
            src={image}
            width={240}
            height={180}
            alt=""
            className="h-full w-full absolute object-cover "
          />
        </div>

        <div className="px-4 pt-2 pb-4 flex text-sm flex-col h-[calc(100%-6rem)]">
          <p>{category}</p>
          <h2 className="font-bold text-[16px] pt-1 line-clamp-2">{product}</h2>
          <div className="flex pt-2 gap-y-4 gap-x-3 flex-col @[240px]:flex-row @[240px]:items-center @[240px]:justify-between">
            <div>
              <p>₦{format(price)}</p>
            </div>

            <Button className="">Add To Cart</Button>
          </div>
        </div>
      </div>
    </Link>
  );
};
