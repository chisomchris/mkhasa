import { Suspense } from "react";
import { List } from "./ui/loading";
import { SectionHeader } from "./ui/section-header";
import { Product, ProductProps } from "./ui/product-card";
import axios from "axios";
import { env } from "@/lib/env";

export const NewIn = async () => {
  const newIn = await getNewArrivals();
  return (
    <section className="py-8">
      <SectionHeader text="New In" />

      <Suspense fallback={<List />}>
        <ul className="pt-6 grid gap-4 min-[360px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {newIn.map(
            (
              { product, category, price, image, id }: ProductProps,
              index: number
            ) => (
              <li key={index} className="md:flex-shrink-0 grow">
                <Product
                  product={product}
                  category={category}
                  price={price}
                  image={image}
                  id={id}
                  className="min-w-[10rem]"
                />
              </li>
            )
          )}
        </ul>
      </Suspense>
    </section>
  );
};

async function getNewArrivals() {
  try {
    const response = await axios.get(`${env.API_BASE_URL}/latest/product`);
    return response.data.map((product: any) => {
      return {
        id: product?._id || 0,
        product: product.name,
        category: product.category,
        price: product.price,
        image: product.mainImage || product.firstImage || product.secondImage,
      };
    });
  } catch (error) {
    console.error(error);
  }
}
