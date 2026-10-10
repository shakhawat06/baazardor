"use client";
import { useSession } from "@/lib/auth-client";
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

const ProfilePage = () => {
  const { data: session } = useSession();

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {};
    // Convert FormData to plain object
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });
    alert("Form submitted successfully!");
  };

  return (
    // <div className="max-w-5xl mx-auto w-full">
    //   <div className="py-10">
    //     <h2 className="text-3xl font-bold">আমার প্রোফাইল</h2>
    //     <p className="text-neutral-500">আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।</p>
    //   </div>

    //   <div className="bg-white px-5 py-10 border border-gray-200 rounded-2xl">
    //     <div className="flex items-center justify-between">
    //       <div className="flex items-center gap-3">
    //         <span className="text-2xl bg-[#0D8840] px-4 py-2 rounded-xl text-white font-bold">
    //           {session?.user.name.slice(0, 1).toUpperCase()}
    //         </span>
    //         <div className="">
    //           <h2 className="text-xl">{session?.user.name}</h2>
    //           <p className="text-neutral-600">{session?.user.email}</p>
    //         </div>
    //       </div>
    //       <div className="">
    //         <span className="text-rose-600 border rounded-md px-3 py-1 cursor-pointer hover:bg-rose-600 hover:text-white hover:border-none">
    //           ↩ সাইন আউট
    //         </span>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="bg-white p-4 rounded-xl my-10">
    //     <h2>তথ্য</h2>

    //     <div className="my-10 px-10">
    //       <Form className="w-full" onSubmit={onSubmit}>
    //         <Fieldset>
    //           <FieldGroup>
    //             <TextField
    //               isRequired
    //               name="name"
    //             >
    //               <Label>নাম</Label>
    //               <Input className="border border-gray-400" />
    //               <FieldError />
    //             </TextField>
    //           </FieldGroup>
    //           <Fieldset.Actions>
    //             <Button fullWidth type="submit" className="bg-[#0D8840] rounded-md shadow-md shadow-[#0D8840]">
    //               আপডেট
    //             </Button>
    //           </Fieldset.Actions>
    //         </Fieldset>
    //       </Form>
    //     </div>
    //   </div>
    // </div>
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
            <span className="flex-shrink-0 text-2xl bg-[#0D8840] w-14 h-14 rounded-xl text-white font-bold flex items-center justify-center">
              {session?.user?.name?.slice(0, 1).toUpperCase() || "U"}
            </span>

            <div className="min-w-0">
              <h2 className="text-lg sm:text-xl font-semibold break-words">
                {session?.user?.name}
              </h2>
              <p className="text-neutral-600 text-sm sm:text-base break-all">
                {session?.user?.email}
              </p>
            </div>
          </div>

          <button
            type="button"
            className="self-start sm:self-auto text-rose-600 border border-rose-200 rounded-md px-3 py-2 text-sm hover:bg-rose-600 hover:text-white hover:border-rose-600 transition-colors"
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
                  <Input
                    defaultValue={session?.user?.name ?? ""}
                    className="w-full border border-gray-400 rounded-md"
                  />
                  <FieldError />
                </TextField>
              </FieldGroup>

              <Fieldset.Actions>
                <Button
                  fullWidth
                  type="submit"
                  className="bg-[#0D8840] rounded-md shadow-md shadow-[#0D8840]/30 hover:bg-green-800"
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
