import { notoSerifBangali } from "@/app/layout";
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

        {/* Sort option */}
        <div className="flex flex-wrap items-center justify-between sm:justify-end gap-3 text-neutral-600 bg-white px-4 sm:px-10 py-4 sm:py-6 my-6 sm:my-10 rounded-xl border border-gray-200">
          <span>সাজান</span>

          <select
            defaultValue="default"
            className="max-w-full border border-gray-400 rounded-full px-3 py-2 text-sm sm:text-base outline-none"
          >
            <option value="default">ডিফল্ট</option>
            <option value="asc">দাম: কম থেকে বেশি</option>
            <option value="desc">দাম: বেশি থেকে কম</option>
          </select>
        </div>

        {/* Product count */}
        <div className="text-sm sm:text-base text-neutral-600">
          মোট {categoryProducts.length}টি পণ্য দেখানো হচ্ছে
        </div>

        {/* Product cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-4 gap-4 sm:gap-5">
          {categoryProducts.map((categoryProduct) => (
            <Link
              href={`/products/${categoryProduct.id}`}
              key={categoryProduct.id}
              className="min-w-0"
            >
              <ProductsCard categoryProduct={categoryProduct} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryProducts;
