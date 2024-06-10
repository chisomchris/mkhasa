export const metadata = {
  title: "Mkhasa | Cart",
};

export default async function Page({ params }: { params: { id: string } }) {
  return <main>Product {params.id}</main>;
}
