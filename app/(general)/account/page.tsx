import { Heading } from "@/components/ui/heading";
import { Navigation } from "@/components/ui/navigation";
import { Wrapper } from "@/components/ui/wrapper";
import { Package, User } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Mkhasa | Account",
};

export default async function Page() {
  const orderdata: { [index: string]: number } = {};

  return (
    <Wrapper className="py-8">
      <Navigation
        heirachy={[
          { display: "Home", href: "/" },
          { display: "Account", href: "/" },
        ]}
      />
      <div className="flex justify-between gap-8 items-center py-4">
        <Heading className="text-app-black">Hi Chisom</Heading>
      </div>

      <p>
        Welcome to your account, you can manage your orders and profile details.
      </p>

      <div className="grid gap-6 py-6 md:grid-cols-2">
        <Link href="/account/order-history">
          <div className="rounded-xl flex items-center gap-4 px-4 py-4 bg-primary-foreground md:px-6">
            <Package
              className="text-destructive"
              absoluteStrokeWidth
              strokeWidth={3}
              size={72}
            />
            <div>
              <Heading>ORDERS</Heading>
              <div className="flex items-center gap-x-4 gap-y-2 flex-wrap pt-2">
                <p className="p-1 rounded-md text-sm text-nowrap text-red-500 font-bold bg-yellow-50">
                  {orderdata?.pending || 0} Pending
                </p>
                <p className="p-1 rounded-md text-sm text-nowrap text-yellow-500 font-bold bg-green-50">
                  {orderdata?.dispatched || 0} Dispacthed
                </p>
                <p className="p-1 rounded-md text-sm text-nowrap text-green-500 font-bold bg-green-50">
                  {orderdata?.delivered || 0} Delivered
                </p>
              </div>
            </div>
          </div>
        </Link>
        <Link href="/account/profile">
          <div className=" rounded-xl flex items-center gap-4 px-4 py-4 bg-primary-foreground md:px-6">
            <User
              className="text-destructive"
              absoluteStrokeWidth
              strokeWidth={3}
              size={72}
            />
            <div>
              <Heading>Profile</Heading>
              <p>Manage your Profile and Password</p>
            </div>
          </div>
        </Link>
      </div>
    </Wrapper>
  );
}
