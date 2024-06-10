import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export const Heading = ({
  children,
  className = "",
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <h2 className={cn("font-bold text-destructive text-xl", className)}>
      {children}
    </h2>
  );
};
