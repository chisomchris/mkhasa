import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ChevronsRight } from "lucide-react";
import { Fragment } from "react";

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
            <BreadcrumbItem key={index}>
              <BreadcrumbPage className="text-lg font-semibold">
                {display}
              </BreadcrumbPage>
            </BreadcrumbItem>
          ) : (
            <Fragment key={index}>
              <BreadcrumbItem className="text-opacity-95 text-lg font-semibold">
                <BreadcrumbLink href={href}>{display}</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronsRight className="text-opacity-75" size={28} />
              </BreadcrumbSeparator>
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
