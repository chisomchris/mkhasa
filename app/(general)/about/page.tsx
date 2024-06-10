import { Wrapper } from "@/components/ui/wrapper";
import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <Wrapper className="py-10">
      <h1 className="text-3xl font-bold text-center font-fuzzy text-destructive">
        About Mkhasa
      </h1>
      <p className="pb-2">
        At{" "}
        <Link href="/" className="text-destructive underline">
          Mkhasa.com
        </Link>
        , our purpose is simple: to deliver the best product at the best price
        swiftly. And as a retailer for all your beloved and favorite brands, we
        get to bring you the best in fragrances.
      </p>
      <p className="pb-2">
        We aim to inspire the world by showing it's possible to simultaneously
        deliver happiness to customers, employees, and vendors, in a long-term,
        remarkable way.
      </p>
      <h2 className="text-2xl font-bold font-fuzzy">Our Core Values</h2>
      <ul className="list-disc list-inside mb-6 space-y-1">
        <li>Integrity</li>
        <li>Creativeness</li>
        <li>Open-minded</li>
        <li>Customer Obsessed</li>
        <li>Can do attitude</li>
        <li>Innovation</li>
        <li>Team Spirit</li>
      </ul>
      <p className="pb-2">
        These values of ours drive and fuel the singular purpose of delivering
        the best product swiftly to our customers. We aim to make everyday
        living of our customers as enjoyable and worthwhile as possible.
      </p>
      <p className="pb-2">
        The team at the company aren't left out as Mkhasa Technologies Limited
        aims to add value to each team member every day. Although Mkhasa
        maintains itself as a service company that happens to sell fragrances,
        we believe that humility, integrity, and compassion are important
        aspects of doing business. By partaking in initiatives inside and
        outside of retail, we hope to build a brighter, wonderful world.
      </p>
    </Wrapper>
  );
}
