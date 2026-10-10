import Link from "next/link";
import React from "react";
import Marque from "../home/Marque";

const Navbar = ({ categories }) => {
  return (
    <div className="w-full border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-4">
        <div className="py-4">
          <ul className="flex flex-wrap items-center justify-start gap-x-4 gap-y-3 sm:gap-x-6 md:gap-x-7">
            {categories.map((category) => (
              <li key={category?.id}>
                <Link
                  href={`/category/${category?.slug}`}
                  className="flex items-center gap-2 rounded-lg px-2 py-2 text-sm text-gray-700 transition hover:bg-gray-100 hover:text-green-700 sm:text-base"
                >
                  <span className="text-lg">{category?.icon}</span>
                  <p className="whitespace-nowrap">{category?.nameBn}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
