import { auth } from "@/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { PropsWithChildren } from "react";

export const Protected = async ({ children }: PropsWithChildren) => {
  const headersList = headers();
  const url = headersList.get("x-url");
  const session = await auth();
  if (!session) {
    return redirect(
      "/auth/login?redirect_uri=" + encodeURIComponent(url || "/")
    );
  }
  return <>{children}</>;
};
