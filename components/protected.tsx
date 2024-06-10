import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { PropsWithChildren } from "react";

export const Protected = async ({ children }: PropsWithChildren) => {
  const session = await auth();
  if (!session) {
    return redirect("/auth/login?redirect_uri=" + encodeURIComponent("/"));
  }
  return <>{children}</>;
};
