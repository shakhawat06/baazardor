import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  const date = new Date().toLocaleDateString("bn-BD", { dateStyle: "full" });

  return (
    <div className="w-full px-4">
      <div className="max-w-5xl mx-auto bg-gray-50 w-full px-5 py-8 sm:px-8 sm:py-10 my-6 sm:my-8 rounded-2xl sm:rounded-3xl border border-gray-300">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 md:gap-10">
          <div className="w-full space-y-4 sm:space-y-5 text-center md:text-left">
            <div className="badge badge-soft badge-success rounded-full">
              {date}
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold leading-snug">
              আজকের বাজারের দাম এক নজরে
            </h2>

            <p className="text-sm sm:text-base text-neutral-500 leading-7">
              চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
              বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
            </p>

            <div className="pt-2">
              <Link href="#allproducts">
                <Button className="bg-[#0D8840] text-white shadow-sm shadow-[#0D8840] rounded-sm w-full sm:w-auto">
                  সব পণ্য দেখুন
                </Button>
              </Link>
            </div>
          </div>

          <div className="w-full md:w-[300] shrink-0 flex justify-center">
            <Image
              src="/bazar-hero.png"
              alt="আজকের বাজারের পণ্য"
              width={300}
              height={300}
              priority
              className="w-full max-w-[220] sm:max-w-[260] md:max-w-[300] h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
