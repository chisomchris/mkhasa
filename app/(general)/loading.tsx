import { Loader } from "lucide-react";

export default function Loading() {
  return (
    <main className="pt-[200px] md:pt-[180px]">
      <Loader size={64} className="animate-spin" />
    </main>
  );
}
