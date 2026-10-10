"use client";

import { signIn } from "@/lib/auth-client";
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SignUpPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {};
    // Convert FormData to plain object
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    const { data: userData, error } = await signIn.email({
      email: data.email, // required, The email address of the user.
      password: data.password, // required, The password of the user. It should be at least 8 characters long and max 128 by default.
      callbackURL: "/",
    });
    toast.success("সাইন ইন সফল হয়েছে");
  };

  const googleSignIn = async () => {
    const data = await signIn.social({
      provider: "google",
    });
  };

  const githubSignIn = async () => {
    const data = await signIn.social({
      provider: "github",
    });
  };

  return (
    <div className="max-w-5xl w-full mx-auto px-4 sm:px-6">
      <div className="flex flex-col justify-center items-center py-10 sm:py-16 md:py-20 space-y-5">
        {/* Header */}
        <div className="text-center space-y-2 max-w-xl">
          <h2 className="text-2xl sm:text-3xl font-bold">সাইন ইন</h2>

          <p className="text-sm sm:text-base text-neutral-500">
            বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
          </p>
        </div>

        {/* Sign-in Card */}
        <div className="w-full max-w-md">
          <div className="flex flex-col gap-6 sm:gap-8 items-center justify-center rounded-2xl sm:rounded-3xl bg-surface p-4 sm:p-6 md:p-8">
            <Form
              className="flex w-full flex-col gap-4"
              render={(props) => <form {...props} data-custom="foo" />}
              onSubmit={onSubmit}
            >
              <TextField
                isRequired
                name="email"
                type="email"
                validate={(value) => {
                  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                    return "Please enter a valid email address";
                  }
                  return null;
                }}
              >
                <Label>ইমেইল</Label>
                <Input className="w-full" placeholder="you@example.com" />
                <FieldError />
              </TextField>

              <TextField
                isRequired
                minLength={8}
                name="password"
                type="password"
                validate={(value) => {
                  if (value.length < 8) {
                    return "Password must be at least 8 characters";
                  }
                  if (!/[A-Z]/.test(value)) {
                    return "Password must contain at least one uppercase letter";
                  }
                  if (!/[0-9]/.test(value)) {
                    return "Password must contain at least one number";
                  }
                  return null;
                }}
              >
                <Label>পাসওয়ার্ড</Label>
                <Input
                  className="w-full border border-neutral-200"
                  placeholder="কমপক্ষে ৮ অক্ষর"
                />
                <FieldError />
              </TextField>

              <Button
                fullWidth
                className="w-full bg-[#0D8840] rounded-md shadow-md shadow-[#0D8840]"
                type="submit"
              >
                সাইন ইন
              </Button>
            </Form>

            {/* Divider */}
            <div className="flex items-center gap-4 w-full">
              <div className="flex-1 border-t-2 border-gray-200" />
              <span className="text-sm text-gray-700 whitespace-nowrap">
                অথবা
              </span>
              <div className="flex-1 border-t-2 border-gray-200" />
            </div>

            {/* Social Login */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={googleSignIn}
                className="rounded-md w-full flex-1"
                variant="outline"
              >
                <FcGoogle />
                Google দিয়ে চালিয়ে যান
              </Button>

              <Button
                onClick={githubSignIn}
                className="rounded-md w-full flex-1"
                variant="outline"
              >
                <FaGithub />
                GitHub দিয়ে চালিয়ে যান
              </Button>
            </div>

            {/* Sign Up Link */}
            <p className="text-sm sm:text-base text-center">
              অ্যাকাউন্ট নেই?{" "}
              <Link
                href="/sign-up"
                className="text-[#0D8840] font-medium hover:underline"
              >
                সাইন আপ করুন
              </Link>
            </p>
          </div>

          {/* Back Home */}
          <Link href="/">
            <p className="text-center mt-5 text-sm sm:text-base text-neutral-500 hover:text-neutral-800">
              ← হোম পেজে ফিরে যান
            </p>
          </Link>
        </div>
      </div>
    </div>
    
  );
};

export default SignUpPage;
