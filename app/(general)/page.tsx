import { Banner } from "@/components/banner";
import { BestSellers } from "@/components/best-seller";
import { Deal } from "@/components/deal";
import { NewIn } from "@/components/new-in";
import { Swiper } from "@/components/swiper";
import { Wrapper } from "@/components/ui/wrapper";

export default async function Home() {
  return (
    <main className="py-3">
      <Wrapper>
        <Swiper />
        <BestSellers />
        <NewIn />
      </Wrapper>
      <Banner />
      <Wrapper>
        <Deal />
      </Wrapper>
    </main>
  );
}
