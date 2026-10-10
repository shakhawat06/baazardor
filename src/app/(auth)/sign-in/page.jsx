"use client";

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
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {};
    // Convert FormData to plain object
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });
    alert(`Form submitted with: ${JSON.stringify(data, null, 2)}`);
  };

  return (
    <div className="max-w-5xl items-center mx-auto">
      <div className="flex flex-col justify-center items-center py-20 space-y-4">
        <div className="text-center">
          <h2 className="text-2xl">সাইন ইন</h2>
          <p className="text-neutral-500">
            বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
          </p>
        </div>

        <div className="">
          <div className="flex flex-col gap-10 items-center justify-center rounded-3xl bg-surface p-6">
            <Form
              className="flex w-96 flex-col gap-4"
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
                <Input placeholder="you@example.com" />
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
                <Input className='border border-neutral-200' placeholder="কমপক্ষে ৮ অক্ষর" />
                <FieldError />
              </TextField>
              

              <div className="flex gap-2">
                <Button
                  fullWidth
                  className="bg-[#0D8840] rounded-md shadow-md shadow-[#0D8840]"
                  type="submit"
                >
                  সাইন ইন
                </Button>
              </div>
            </Form>

            <div className="flex items-center gap-4 w-full">
              <div className="flex-1 border-t-2 border-gray-200" />

              <span className="text-sm text-gray-700 whitespace-nowrap">
                অথবা
              </span>

              <div className="flex-1 border-t-2 border-gray-200" />
            </div>

            <div className="space-x-4">
              <Button className="rounded-md" variant="outline">
                <FcGoogle />
                Sign in with Google
              </Button>

              <Button className="rounded-md" variant="outline">
                <FaGithub />
                Sign in with GitHub
              </Button>
            </div>
            <p>
              অ্যাকাউন্ট নেই?
              <span className="text-[#0D8840]"> সাইন আপ করুন</span>
            </p>
          </div>
          <Link href="/">
            <p className="text-center mt-5 text-neutral-500">← হোম পেজে ফিরে যান</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
