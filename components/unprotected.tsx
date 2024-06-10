import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { PropsWithChildren } from "react";

export const Unprotected = async ({ children }: PropsWithChildren) => {
  const session = await auth();
  if (session) {
    return redirect("/");
  }
  return <>{children}</>;
};
