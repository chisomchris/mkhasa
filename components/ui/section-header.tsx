import { cn } from "@/lib/utils";

export const SectionHeader = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <div>
      <h2 className={cn("text-app-red font-bold text-lg", className)}>
        {text}
      </h2>
      <div className="mt-1 rounded-full h-2 w-16 bg-destructive">
        <div className="h-full bg-foreground w-10/12 rounded-full" />
      </div>
    </div>
  );
};
