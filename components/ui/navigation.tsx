import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export const Navigation = ({
  heirachy,
}: {
  heirachy: { href: string; display: string }[];
}) => {
  if (!heirachy) return null;

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {heirachy.map(({ href, display }, index) => {
          return index === heirachy.length - 1 ? (
            <BreadcrumbItem>
              <BreadcrumbPage>{display}</BreadcrumbPage>
            </BreadcrumbItem>
          ) : (
            <>
              <BreadcrumbItem>
                <BreadcrumbLink href={href}>{display}</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
            </>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
