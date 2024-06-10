"use client";
import { z } from "zod";
import { useFormik } from "formik";
import { useState } from "react";
import { LoaderCircle } from "lucide-react";
import { axiosClient } from "@/lib/axios";
import { Button } from "@/components/ui/button";
import { useCanSubmitForm } from "@/hooks/useCanSubmitForm";
import { Wrapper } from "@/components/ui/wrapper";
import { Heading } from "@/components/ui/heading";
import { FInput, FPasswordInput } from "@/components/input-with-formik";
import Link from "next/link";
import { useRouter } from "next/router";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { Logo } from "@/components/ui/logo";
import { ModeToggle } from "@/components/ui/toggle-theme";

export const Register = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const schema = z.object({
    username: z.string().min(3, "must be at least 3 characters"),
    phone: z.string(),
    email: z.string().email(),
    password: z
      .string()
      .trim()
      //   .matches(/(?=.*[A-Z])/, "must contain uppercase")
      //   .matches(/^(?=.*[a-z])/, "Must contain lowercase")
      .min(6, "must be at least 6 characters long")
      .max(50, "must be at most 50 characters long"),
  });

  const formik = useFormik({
    initialValues: { email: "", password: "", username: "", phone: "" },
    validationSchema: toFormikValidationSchema(schema),
    onSubmit: async (values, {}) => {
      try {
        setIsSubmitting(true);
        const response = await axiosClient.post(
          `user/send/verification`,
          values,
          {
            headers: { "Content-Type": "application/json" },
          }
        );
        if (response.status === 200) {
          setIsSubmitting(false);
          console.log(response);
          useRouter().push(
            `/confirm-otp?email=${encodeURIComponent(values.email)}`
          );
        }
        console.log(response);
      } catch (error) {
        setIsSubmitting(false);
        console.log(error);
      }
    },
  });

  const canSubmit = useCanSubmitForm(formik);

  return (
    <div className="min-h-screen py-16 ">
      <Wrapper className="grid place-items-center">
        <div className="w-full max-w-xl">
          <div className="flex items-center justify-between">
            <Logo />
            <ModeToggle />
          </div>
          <Heading className="mt-6 text-center">Registration Page</Heading>
          <p className="py-4 text-center">
            Create Your account, Already have an account?{" "}
            <Link
              href="/auth/login"
              className="font-fuzzy text-destructive underline"
            >
              Login Here
            </Link>
          </p>

          <form
            onSubmit={formik.handleSubmit}
            className="w-full bg-primary-foreground/60 p-8 rounded-3xl "
          >
            <div className="grid gap-x-4 sm:grid-cols-2">
              <FInput name="username" formik={formik} placeholder="Full Name" />
              <FInput name="phone" formik={formik} placeholder="Phone Number" />
              <FInput
                name="email"
                formik={formik}
                placeholder="Email Address"
              />
              <FPasswordInput
                name="password"
                formik={formik}
                placeholder="Password"
              />
            </div>

            <Button
              className="w-full flex justify-center  text-sm font-bold mt-4 "
              type="submit"
              disabled={!canSubmit}
            >
              {isSubmitting ? <LoaderCircle /> : "Register"}
            </Button>
          </form>
        </div>
      </Wrapper>
    </div>
  );
};
