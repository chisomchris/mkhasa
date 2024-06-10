import Image from "next/image";
import banner from "@/assets/banner.png";
import { Wrapper } from "@/components/ui/wrapper";
import { Navigation } from "@/components/ui/navigation";
import { SectionHeader } from "@/components/ui/section-header";
import { Suspense } from "react";
import { List } from "@/components/ui/loading";
import { Product, ProductProps } from "@/components/ui/product-card";
import axios from "axios";
import { env } from "@/lib/env";
import { SortBtn } from "./sort";
export const metadata = {
  title: "Mkhasa | Cart",
};

export default async function Page({
  params,
}: {
  params: { category: string };
}) {
  const category = decodeURIComponent(params.category);
  const products = await getProducts(category);
  return (
    <main>
      <div className="relative">
        <div className="absolute right-0 left-0 top-0 bottom-0 bg-[#3333]" />
        <div className="absolute left-0 w-full top-1/3">
          <Wrapper>
            <Navigation
              heirachy={[
                { display: "Home", href: "/" },
                { display: category, href: "/" },
              ]}
            />
            <h2 className="text-3xl font-bold tracking-tighter text-white md:text-4xl md:tracking-normal">
              {category}
            </h2>
          </Wrapper>
        </div>
        <Image
          src={banner}
          alt=""
          className="object-cover object-center w-full min-h-48 max-h-60"
        />
      </div>

      <Wrapper className="py-6">
        <div className="flex items-center justify-between py-4">
          <SectionHeader text={category} />
          {/* <Sort onClick={onClick} sort={sortBy} /> */}
          <SortBtn />
        </div>

        <Suspense fallback={<List />}>
          {products.length > 0 ? (
            <ul className="pt-6 grid gap-4 min-[360px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
              {products.map(
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
          ) : (
            <p>No products available in this category at the moment.</p>
          )}
        </Suspense>
      </Wrapper>
    </main>
  );
}

async function getProducts(category: string) {
  try {
    const response = await axios.get(
      `${env.API_BASE_URL}/product/category/${category}`
    );
    return response.data.products.map((product: any) => {
      return {
        id: product._id,
        product: product.name,
        category: product.category,
        price: product.price,
        image: product.mainImage,
      };
    });
  } catch (error) {
    console.error(error);
  }
}

// import { useParams } from "react-router-dom";
// import { useInfiniteProducts } from "../hooks/query/useProducts";
// import { Product } from "../components/ProductCard";
// import { Icon } from "@iconify/react";
// import { Sort } from "../components/Sort";
// import { useSearchParams } from "react-router-dom/dist";
// import { SectionHeader } from "@/components/ui/section-header";

// export const Component = () => {
//   const { category } = useParams();
//   const [searchParams, setSearchParams] = useSearchParams();
//   if (!category) throw new Error("Invalid category");
//   const sortBy = searchParams.get("sort") || "";
//   const filterBy = searchParams.get("filter") || "";

//   const url = filterBy
//     ? `product/category/${category}/appeal/${filterBy}`
//     : sortBy
//     ? `product/category/${sortBy}/${category}`
//     : `product/category/${category}`;

//   const {
//     data,
//     fetchNextPage,
//     hasNextPage,
//     isFetching,
//     isFetchingNextPage,
//     status,
//   } = useInfiniteProducts(url, "category", category, { sortBy, filterBy });

//   const onClick = (term) => {
//     if (typeof term !== "string") return;
//     if (!term) {
//       return setSearchParams({});
//     }
//     if (term.startsWith("sort")) {
//       searchParams.has("filter") && searchParams.delete("filter");
//       setSearchParams({ ...searchParams, sort: term.split("-")[1] });
//     }
//     if (term.startsWith("filter")) {
//       searchParams.has("sort") && searchParams.delete("sort");
//       setSearchParams({ ...searchParams, filter: term.split("-")[1] });
//     }
//   };

//   return (
//     <>
//       <section></section>
//     </>
//   );
// };
