import { headers } from "next/headers";
import { Login } from "./login";
import { URL } from "url";
import { getCsrfToken } from "next-auth/react";

export const metadata = {
  title: "Mkhasa | Login",
};

export default async function Page() {
  const headersList = headers();
  const x_url = headersList.get("x-url")!;
  const url = new URL(x_url);
  const callback_uri = url.searchParams.get("redirect_uri")!;
  return <Login callback_uri={decodeURIComponent(callback_uri)} />;
}
