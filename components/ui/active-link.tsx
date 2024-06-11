"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function ActiveLink({
  children,
  href,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  const pathname = usePathname();

  return (
    <Link
      className={cn(
        `${pathname === href ? "text-destructive" : ""}`,
        className
      )}
      href={href}
    >
      {children}
    </Link>
  );
}
