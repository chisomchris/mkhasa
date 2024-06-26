import { cn } from "@/lib/utils";

export function Wrapper({
  children,
  className,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("w-11/12 max-w-7xl mx-auto py-4", className)}>
      {children}
    </div>
  );
}
