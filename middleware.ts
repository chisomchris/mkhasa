import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "./auth";

export default auth((request: NextRequest) => {
  // Store current request url in a custom header, which you can read later
  const requestHeaders = new Headers(request.headers);
  const { origin, pathname, search } = request.nextUrl;
  requestHeaders.set("x-url", `${origin}/${pathname.slice(1)}${search}`);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
});
