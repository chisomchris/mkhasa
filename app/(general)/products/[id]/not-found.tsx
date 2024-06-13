import { Deal } from "@/components/deal";
import { Recommended } from "@/components/recommended";
import { Wrapper } from "@/components/ui/wrapper";
import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <Wrapper className="flex flex-col items-center justify-center gap-2 py-12">
        <h2 className="text-xl font-semibold">404 Not Found</h2>
        <p>Could not find product.</p>
        <Link
          href="/"
          className="mt-4 rounded-md bg-destructive px-4 py-2 text-sm text-white transition-colors hover:bg-destructive/85"
        >
          Go Back Home
        </Link>
      </Wrapper>
      <Wrapper>
        <Recommended />
        <Deal />
      </Wrapper>
    </main>
  );
}
