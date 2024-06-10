import React from "react";
import { Wrapper } from "./ui/wrapper";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Logo } from "./ui/logo";
import { Tip } from "./ui/custom-tooltip";

export const Footer = () => {
  return (
    <footer className="bg-foreground/85 dark:bg-foreground/75 text-background py-3">
      <Wrapper>
        <div className="grid gap-y-5 grid-cols-1 md:grid-cols-12 items-start">
          <div className="hidden md:flex justify-start md:col-span-3">
            <Logo inverted />
          </div>

          <div className="md:col-span-3">
            <h2 className="text-lg font-bold">Explore Mkhasa</h2>
            <ul>
              <li>
                <Link
                  href="/about"
                  className="w-full pt-1 inline-block hover:text-destructive"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/delivery"
                  className="w-full pt-1 inline-block hover:text-destructive"
                >
                  Delivery
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="w-full pt-1 inline-block hover:text-destructive"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="w-full pt-1 inline-block hover:text-destructive"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="w-full pt-1 inline-block hover:text-destructive"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h2 className="text-lg font-bold">Contact Us</h2>
            <div>
              {/* <p>House 92, Dele Orisabiyi Street Okota Lagos State</p> */}
              <p>
                Call Us: <Tip trigger="9013898261" content="click to copy" />
              </p>
              <p>Email: info@mkhasa.com</p>

              <h3 className="font-bold mt-2">Support/Sales Team</h3>
              <p>
                Call Us:{" "}
                <Tip
                  trigger={<span>09131451391</span>}
                  content="click to copy"
                />
              </p>

              <p>Email: sales@mkhasa.com</p>
              <p>Email: support@mkhasa.com</p>
            </div>
          </div>

          <div className="md:col-span-3">
            <h2 className="text-lg font-bold md:pr-20 md:text-right">
              Socials
            </h2>
            <ul className="flex justify-start gap-3 mt-2 md:justify-end">
              <li>
                <a
                  href="https://www.instagram.com/_mkhasa_"
                  target="_blank"
                  rel="noopener"
                  className="p-1 inline-block hover:scale-105 hover:text-destructive"
                  aria-label="link to Mkhasa instagram page"
                >
                  <Instagram className="hover:text-destructive" />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/Mkhasa_"
                  rel="noopener"
                  target="_blank"
                  className="p-1 inline-block hover:scale-105"
                  aria-label="link to Mkhasa X (formerly known as twitter) page"
                >
                  <Twitter className="hover:text-destructive" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61559801264240&mibextid=ZbWKwL"
                  target="_blank"
                  rel="noopener"
                  className="p-1 inline-block hover:scale-105"
                  aria-label="link to Mkhasa meta (formerly known as facebook) page"
                >
                  <Facebook className="hover:text-destructive" />
                </a>
              </li>
              <li>
                <a
                  rel="noopener"
                  href=""
                  target="_blank"
                  className="p-1 inline-block hover:scale-105"
                  aria-label="link to Mkhasa youtube page"
                >
                  <Youtube className="hover:text-destructive" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@_mkhasa_?_t=8mdu7onNLSH&_r=1"
                  target="_blank"
                  rel="noopener"
                  className="p-1 inline-block hover:scale-105"
                  aria-label="link to Mkhasa tiktok page"
                >
                  {/* <Icon
                    icon="ant-design:tik-tok-outlined"
                    style={{ fontSize: 32 }}
                    className="hover:text-destructive "
                  /> */}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-2 md:hidden">
          <Logo inverted />
        </div>

        <p className="pt-10 sm:text-right md:text-center">
          &copy; {new Date().getFullYear()} All Rights Reserved
        </p>
      </Wrapper>
    </footer>
  );
};

// 180
// 120
