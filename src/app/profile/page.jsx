"use client";
import { updateUser, signOut, useSession } from "@/lib/auth-client";
import React from "react";
import {
  Button,
  Description,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  TextArea,
  TextField,
} from "@heroui/react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const ProfilePage = () => {
  const { data: session } = useSession();
    const router = useRouter();
  

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {};
    // Convert FormData to plain object
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });
    // alert("Form submitted successfully!");

    await updateUser({
      name: data.name,
    });
    toast.success('নাম পরিবর্তন সফল হয়েছে')
  };

  const handleSignOut = async () => {
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("sign-in"); // redirect to login page
        },
      },
    });
    toast.success("সাইন আউট সম্পন্ন হয়েছে");
  };

  return (
    <div className="max-w-5xl mx-auto w-full px-4 sm:px-6">
      {/* Profile Heading */}
      <div className="py-6 sm:py-10">
        <h2 className="text-2xl sm:text-3xl font-bold">আমার প্রোফাইল</h2>
        <p className="text-neutral-500 mt-2 text-sm sm:text-base">
          আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
        </p>
      </div>

      {/* Profile Card */}
      <div className="bg-white p-5 sm:px-8 sm:py-10 border border-gray-200 rounded-2xl">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
          <div className="flex items-center gap-3 min-w-0">
            <span className="shrink-0 text-2xl bg-[#0D8840] w-14 h-14 rounded-xl text-white font-bold flex items-center justify-center">
              {session?.user?.name?.slice(0, 1).toUpperCase() || "U"}
            </span>

            <div className="min-w-0">
              <h2 className="text-lg sm:text-xl font-semibold wrap-break-words">
                {session?.user?.name}
              </h2>
              <p className="text-neutral-600 text-sm sm:text-base break-all">
                {session?.user?.email}
              </p>
            </div>
          </div>

          <button
            onClick={handleSignOut}
            type="button"
            className="self-start sm:self-auto cursor-pointer text-rose-600 border border-rose-200 rounded-md px-3 py-2 text-sm hover:bg-rose-600 hover:text-white hover:border-rose-600 transition-colors"
          >
            ↩ সাইন আউট
          </button>
        </div>
      </div>

      {/* Profile Information */}
      <div className="bg-white p-4 sm:p-6 rounded-xl my-6 sm:my-10 border border-gray-100">
        <h2 className="text-lg sm:text-xl font-semibold">তথ্য</h2>

        <div className="my-6 sm:my-10 px-0 sm:px-4 md:px-6">
          <Form className="w-full" onSubmit={onSubmit}>
            <Fieldset>
              <FieldGroup>
                <TextField isRequired name="name">
                  <Label>নাম</Label>
                  <Input className="border border-gray-400" />
                  <FieldError />
                </TextField>
              </FieldGroup>
              <Fieldset.Actions>
                <Button
                  fullWidth
                  type="submit"
                  className="bg-[#0D8840] rounded-md shadow-md shadow-[#0D8840]"
                >
                  আপডেট
                </Button>
              </Fieldset.Actions>
            </Fieldset>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
