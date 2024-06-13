import { Recommended } from "@/components/recommended";
import { Navigation } from "@/components/ui/navigation";
import { Wrapper } from "@/components/ui/wrapper";
import { env } from "@/lib/env";
import axios from "axios";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { Rating } from "./lib";
import Link from "next/link";
import { format } from "@/lib/utils";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import type { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata(
  { params }: { params: { id: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const product = await getProduct(params.id);
  // const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `Mkhasa | ${product.name}`,
  };
}

export default async function Page({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id);

  if (!product) {
    notFound();
  }

  return (
    <main>
      <Wrapper>
        <Navigation
          heirachy={[
            { href: "/", display: "Home" },
            {
              href: `/categories/${product?.category}`,
              display: product?.category,
            },
            { href: "/", display: product?.name },
          ]}
        />
        <div className="@container pb-8 pt-6">
          <div className="grid gap-8 @3xl:grid-cols-2">
            <div className="relative sm:min-w-[320px]">
              <div className="rounded-lg overflow-hidden w-full aspect-[5/6] min-[420px]:aspect-square md:aspect-[6/5] lg:aspect-[6/4]">
                <Image
                  src={product.mainImage}
                  alt=""
                  className="w-full h-full"
                  width={600}
                  height={500}
                />
              </div>

              <div className="flex gap-2 absolute top-4 right-4 z-10">
                <Button className="rounded-md h-9 grid place-items-center aspect-square">
                  <Icon icon="fa6-solid:angle-left" style={{ fontSize: 22 }} />
                </Button>
                <Button className="h-9 rounded-md grid place-items-center aspect-square">
                  <Icon
                    icon="fa6-solid:angle-left"
                    hFlip
                    style={{ fontSize: 22 }}
                  />
                </Button>
              </div>

              <div className="flex gap-4 overflow-x-auto pt-4">
                {!!product.mainImage ? (
                  <Image
                    src={product.mainImage}
                    alt="mainImage"
                    className="w-28 aspect-square "
                    width={100}
                    height={100}
                  />
                ) : null}
                {!!product.firstImage ? (
                  <Image
                    src={product.firstImage}
                    alt="firstImage"
                    className="w-28 aspect-square "
                    width={100}
                    height={100}
                  />
                ) : null}
                {!!product.secondImage ? (
                  <Image
                    src={product.secondImage}
                    alt="secondImage"
                    className="w-28 aspect-square "
                    width={100}
                    height={100}
                  />
                ) : null}
                {!!product.thirdImage ? (
                  <Image
                    src={product.thirdImage}
                    alt="thirdImage"
                    className="w-28 aspect-square "
                    width={100}
                    height={100}
                  />
                ) : null}
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center flex-wrap gap-2 ">
                <p className="text-xl font-bold text-destructive ">
                  {product.category}
                </p>
                {/* <Button className="bg-white text-sm sm:text-[16px] md:bg-app-ash-2">
                  7 Days Return Policy
                </Button> */}
              </div>
              <div className="">
                <h3 className="font-bold text-3xl md:text-4xl">
                  {product.name}
                </h3>
              </div>

              <p className="text-3xl">
                ₦<span>{format(product.price)}</span>
              </p>

              <div>
                <p>
                  <strong>SKU</strong>: <span>{product.sku}</span>
                </p>

                <p>
                  <strong>Brand</strong>: <span>{product.brand}</span>
                </p>

                <p>
                  <strong>Manufacturer</strong>:{" "}
                  <span>{product.manufacturer}</span>
                </p>
              </div>

              <div className="flex gap-x-12 flex-wrap justify-between pb-2 ">
                <div className="py-3">
                  <p className="text-xl font-bold mt-1 pb-2">Qty</p>
                  <div className="flex gap-4 pt-2 items-center ">
                    <button className="h-10  aspect-square rounded-full bg-primary-foreground grid place-items-center font-medium dark:bg-accent-foreground/10">
                      <Icon icon="ic:round-minus" style={{ fontSize: 30 }} />
                    </button>
                    <p className="text-3xl">1</p>
                    <button className="h-10  aspect-square rounded-full bg-primary-foreground grid place-items-center font-medium dark:bg-accent-foreground/10">
                      <Icon icon="ph:plus-bold" style={{ fontSize: 25 }} />
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                {true ? (
                  <Button className="w-full">Add to Cart</Button>
                ) : (
                  <Button className="w-full">
                    <Link href="/cart">Go to Cart</Link>
                  </Button>
                )}
                <Button className="bg-[#1a9133] font-medium w-full">
                  Buy Now
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* <Suspense fallback={<p>Loading product...</p>}>
          <Rating rating={3} />{" "}
        </Suspense> */}

        <Recommended />
      </Wrapper>
    </main>
  );
}

async function getProduct(productId: string | number) {
  try {
    const response = await axios.get(
      `${env.API_BASE_URL}/product/${productId}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
