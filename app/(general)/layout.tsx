import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="pt-[120px] md:pt-[77px]">{children}</main>
      <Footer />
    </div>
  );
}
