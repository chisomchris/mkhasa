import { Loader } from "lucide-react";

export default function Loading() {
  return (
    <main className="pt-20">
      <Loader size={64} className="animate-spin" />
    </main>
  );
}
