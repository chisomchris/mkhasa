"use client";
import google_icon from "@/assets/google-icon.svg";
import { FInput, FPasswordInput } from "@/components/input-with-formik";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Logo } from "@/components/ui/logo";
import { ModeToggle } from "@/components/ui/toggle-theme";
import { Wrapper } from "@/components/ui/wrapper";
import { useFormik } from "formik";
import Link from "next/link";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";

export const Reset = () => {
  const formik = useFormik({
    initialValues: { email: "" },
    validationSchema: toFormikValidationSchema(
      z.object({
        email: z
          .string({ required_error: "email is required" })
          .trim()
          .email("Invalid email address"),
      })
    ),
    onSubmit: async (values) => {
      // await signIn("credentials", values);
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
          <Heading className="mt-6">Reset Password</Heading>
          <p className="my-4">
            Password reset link will be sent to your email address, know your
            password?{" "}
            <Link
              href="/auth/login"
              className="font-fuzzy text-destructive underline text-nowrap"
            >
              Login here
            </Link>
          </p>
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
            <Button className="w-full mt-6" type="submit">
              Reset Password
            </Button>
          </form>
        </div>
      </Wrapper>
    </div>
  );
};
