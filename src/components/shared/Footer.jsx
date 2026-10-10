import React from "react";

const Footer = () => {
  return (
    <div className="w-full">
      <div className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-5xl mx-auto flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-center text-neutral-700 px-4 py-5 text-sm sm:text-base">
          <div className="text-center sm:text-left">
            বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।
          </div>

          <div className="text-center sm:text-right text-neutral-500">
            সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
