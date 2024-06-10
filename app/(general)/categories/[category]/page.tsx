export const metadata = {
  title: "Mkhasa | Cart",
};

export default async function Page({
  params,
}: {
  params: { category: string };
}) {
  return <main> {params.category}</main>;
}
