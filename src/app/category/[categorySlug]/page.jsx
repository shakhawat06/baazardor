import { notoSerifBangali } from "@/app/layout";
import CategoryCard from "@/components/category/CategoryCard";
import ProductsCard from "@/components/products/ProductsCard";
import baseUrl from "@/services/baseUrl";
import Link from "next/link";

const getCategoryProducts = async (categorySlug) => {
  const res = await fetch(
    `${baseUrl}/api/bazardor/products?category=${categorySlug}`,
  );
  const data = await res.json();
  return data;
};

const findCategory = async (categorySlug) => {
  const res = await fetch(`${baseUrl}/api/bazardor/categories/${categorySlug}`);
  const data = await res.json();
  return data;
};

const CategoryProducts = async ({ params }) => {
  const { categorySlug } = await params;
  const categoryProducts = await getCategoryProducts(categorySlug);
  const currentCateogy = await findCategory(categorySlug);

  return (
    <div className="mb-10 px-4 sm:px-5">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 bg-gray-50 p-4 sm:p-5 my-5 rounded-xl border border-gray-200">
          <span className="text-4xl sm:text-5xl shrink-0">
            {currentCateogy.icon}
          </span>

          <div className="flex flex-col gap-2 sm:gap-3 min-w-0">
            <h2 className="text-2xl sm:text-3xl font-bold">
              {currentCateogy.nameBn}
            </h2>

            <p
              className={`${notoSerifBangali.className} text-sm sm:text-base text-neutral-600`}
            >
              {categoryProducts.length}টি পণ্যের আজকের দাম ও পরিবর্তন
            </p>
          </div>
        </div>

        <CategoryCard categoryProducts={categoryProducts} />
        
      </div>
    </div>
  );
};

export default CategoryProducts;
