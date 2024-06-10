"use client";
import google_icon from "@/assets/google-icon.svg";
import { FInput, FPasswordInput } from "@/components/input-with-formik";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Logo } from "@/components/ui/logo";
import { ModeToggle } from "@/components/ui/toggle-theme";
import { Wrapper } from "@/components/ui/wrapper";
import { useFormik } from "formik";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";

export const Login = () => {
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: toFormikValidationSchema(
      z.object({
        email: z
          .string({ required_error: "email is required" })
          .trim()
          .email("Invalid email address"),
        password: z
          .string({
            required_error: "password is required",
          })
          .min(4, "at least 4 characters"),
      })
    ),
    onSubmit: async (values) => {
      await signIn("credentials", values);
    },
  });

  return (
    <div className="min-h-screen py-16 ">
      <Wrapper className="grid place-items-center">
        <div className="w-full max-w-[420px]">
          <div className="flex items-center justify-between">
            <Logo />
            <ModeToggle />
          </div>
          <Heading className="mt-6">Login Page</Heading>
          <form className="mt-6" onSubmit={formik.handleSubmit}>
            <label>
              Email
              <FInput
                formik={formik}
                name="email"
                type="email"
                placeholder="user@email.com"
              />
            </label>
            <label className="mt-3 block">
              Password
              <FPasswordInput
                formik={formik}
                name="password"
                placeholder="password"
              />
            </label>
            <Button className="w-full mt-6" type="submit">
              Sign In
            </Button>
          </form>

          <div className="pt-6">
            <p>
              New to Mkhasa?{" "}
              <Link
                href="/auth/register"
                className="font-fuzzy text-destructive underline"
              >
                Create account here
              </Link>
            </p>
          </div>

          <p className="py-6 grid place-items-center relative">
            <span className="before:h-[2px] before:rounded before:w-[calc(50%-2.5rem)] before:left-[1rem] before:top-1/2 before:-translate-y-1/2 before:bg-accent-foreground/50 before:absolute after:h-[2px] after:rounded after:w-[calc(50%-2.5rem)] after:right-[1rem] after:top-1/2 after:-translate-y-1/2 after:bg-accent-foreground/50 after:absolute">
              Or
            </span>
          </p>

          <Button
            className="w-full"
            onClick={async () => await signIn("google")}
          >
            <Image
              src={google_icon}
              alt="google icon"
              width={24}
              height={24}
              className="mr-2"
            />{" "}
            Sign in with Google
          </Button>
        </div>
      </Wrapper>
    </div>
  );
};
