"use client";
import Link from "next/link";
import React, { useState } from "react";
import ProductsCard from "../products/ProductsCard";

const CategoryCard = ({ categoryProducts }) => {
  const [sortOrder, setSortOrder] = useState("default");

  const handleChange = (e) => {
    setSortOrder(e.target.value);
  };

  const sortedProducts = [...categoryProducts].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.today - b.today;
    }

    if (sortOrder === "desc") {
      return b.today - a.today;
    }

    return categoryProducts; 
  });
  

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between sm:justify-end gap-3 text-neutral-600 bg-white px-4 sm:px-10 py-4 sm:py-6 my-6 sm:my-10 rounded-xl border border-gray-200">
        <span>সাজান</span>

        <select
          defaultValue="default"
          onChange={handleChange}
          className="max-w-full border border-gray-400 rounded-full px-3 py-2 text-sm sm:text-base outline-none"
        >
          <option value="default">ডিফল্ট</option>
          <option value="asc">দাম: কম থেকে বেশি</option>
          <option value="desc">দাম: বেশি থেকে কম</option>
        </select>
      </div>

      <div className="text-sm sm:text-base text-neutral-600">
        মোট {categoryProducts.length}টি পণ্য দেখানো হচ্ছে
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-4 gap-4 sm:gap-5">
        {sortedProducts.map((sortedProduct) => (
          <Link
            href={`/products/${sortedProduct.id}`}
            key={sortedProduct.id}
            className="min-w-0"
          >
            <ProductsCard categoryProduct={sortedProduct} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryCard;
