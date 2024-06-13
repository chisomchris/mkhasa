import React from "react";
import { Wrapper } from "./ui/wrapper";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import { Logo } from "./ui/logo";
import { Tip } from "./ui/custom-tooltip";

export const Footer = () => {
  return (
    <footer className="bg-primary-foreground text-foreground/85 py-3 mt-auto">
      <Wrapper>
        <div className="grid gap-y-5 grid-cols-1 md:grid-cols-12 items-start">
          <div className="hidden md:flex justify-start md:col-span-3">
            <Logo />
          </div>

          <section className="md:col-span-3">
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
          </section>

          <section className="md:col-span-3">
            <h2 className="text-lg font-bold">Contact Us</h2>
            <div className="flex gap-2 pt-3">
              <MapPin className="text-destructive" />
              <p>House 92, Dele Orisabiyi Street Okota Lagos State.</p>
            </div>
            <div className="flex gap-2 pt-3">
              <Phone className="text-destructive" />{" "}
              <Tip trigger="09013898261" content="click to copy" />
            </div>
            <div className="flex gap-2 pt-3">
              <Mail className="text-destructive" />{" "}
              <a href="mailto:info@mkhasa.com">info@mkhasa.com</a>
            </div>

            <h3 className="font-bold mt-6">Support/Sales Team</h3>
            <div className="flex gap-2 pt-3">
              <Phone className="text-destructive" />{" "}
              <Tip trigger={<span>09131451391</span>} content="click to copy" />
            </div>
            <div className="flex gap-2 pt-3">
              <Mail className="text-destructive" />{" "}
              <a href="mailto:sales@mkhasa.com">sales@mkhasa.com</a>
            </div>
            <div className="flex gap-2 pt-3">
              <Mail className="text-destructive" />{" "}
              <a href="mailto:support@mkhasa.com">support@mkhasa.com</a>
            </div>
          </section>

          <section className="md:col-span-3">
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
                  <p className="sr-only">Mkhasa instagram page</p>
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
                  <p className="sr-only">Mkhasa X (formerly Twitter) page</p>
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
                  <p className="sr-only">Mkhasa Facebook page</p>
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
                  <p className="sr-only">Mkhasa Youtube page</p>
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
                  <p className="sr-only">Mkhasa Tiktok page</p>
                </a>
              </li>
            </ul>
          </section>
        </div>

        <div className="pt-2 md:hidden">
          <Logo />
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
