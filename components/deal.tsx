import { Suspense } from "react";
import { List } from "./ui/loading";
import { SectionHeader } from "./ui/section-header";
import { Product, ProductProps } from "./ui/product-card";
import axios from "axios";
import { env } from "@/lib/env";

export const Deal = async () => {
  const deal = await getDeals();
  return (
    <section className="py-8">
      <SectionHeader text="Deal" />

      <Suspense fallback={<List />}>
        <ul className="pt-6 grid gap-4 min-[360px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {deal.map(
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

async function getDeals() {
  try {
    const response = await axios.get(`${env.API_BASE_URL}/deal/product`);
    return response.data.map((x: any) => {
      return {
        id: x.product?._id || 0,
        product: x.product.name,
        category: x.product.category,
        price: x.product.price,
        image:
          x.product.mainImage || x.product.firstImage || x.product.secondImage,
      };
    });
  } catch (error) {
    console.error(error);
  }
}
