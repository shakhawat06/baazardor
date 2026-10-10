import Link from "next/link";
import React from "react";



const Navbar = ({ categories }) => {
  // console.log("navbar", categories);

  return (
    <div className="max-w-5xl mx-auto">
      <div className="py-4">
        <ul className="flex justify-start gap-7">
          {categories.map((category) => (
            <li key={category?.id}>
              <Link href={`/category/${category?.slug}`}>
                <div className="flex gap-3">
                  <span>{category?.icon}</span>
                  <p>{category?.nameBn}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
