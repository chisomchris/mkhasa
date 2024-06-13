import { Protected } from "@/components/protected";
import { Wrapper } from "@/components/ui/wrapper";

export const metadata = {
  title: "Mkhasa | Cart",
};

export default async function Page() {
  return (
    <Protected>
      <main>
        <Wrapper>Cart</Wrapper>
      </main>
    </Protected>
  );
}
