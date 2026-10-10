import { notoSerifBangali } from "@/app/layout";
import ProductsCard from "@/components/products/ProductsCard";
import baseUrl from "@/services/baseUrl";
import { Card } from "@heroui/react";
import Link from "next/link";
// import { Breadcrumbs } from "@heroui/react";

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
    <div className="mb-10">
      <div className="max-w-5xl mx-auto">
        {/* <Breadcrumbs>
          <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
          <Breadcrumbs.Item href="#">{categorySlug}</Breadcrumbs.Item>
          <Breadcrumbs.Item href="#">Electronics</Breadcrumbs.Item>
          <Breadcrumbs.Item>Laptop</Breadcrumbs.Item>
        </Breadcrumbs> */}

        {/* header */}
        <div className="">
          <div className="flex py-5 my-5 items-center gap-4 bg-gray-50 p-5 rounded-xl border border-gray-200 ">
            <span className="text-5xl">{currentCateogy.icon}</span>
            <div className="flex flex-col gap-3">
              <h2 className="text-3xl font-bold">{currentCateogy.nameBn}</h2>
              <p className={`${notoSerifBangali.className} text-neutral-600`}>
                {categoryProducts.length}টি পণ্যের আজকের দাম ও পরিবর্তন
              </p>
            </div>
          </div>
        </div>

        {/* select option */}
        <div className="text-neutral-600 flex items-center gap-3 justify-end bg-white px-10 py-6 my-10 rounded-xl border border-gray-200">
          <span>সাজান</span>
          <select
            defaultValue="Pick a color"
            className="border border-gray-400 rounded-full px-2"
          >
            <option defaultChecked>ডিফল্ট</option>
            <option>দাম: কম থেকে বেশি</option>
            <option>দাম: বেশি থেকে কম</option>
          </select>
        </div>

        {/* product card */}
        <div className="text-neutral-600">
          মোট {categoryProducts.length}টি পণ্য দেখানো হচ্ছে
        </div>

        <Link href=''>
          <div className="grid grid-cols-3 mt-4 gap-5">
            {categoryProducts.map((categoryProduct) => (
              <ProductsCard
                key={categoryProduct.id}
                categoryProduct={categoryProduct}
              />
            ))}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CategoryProducts;
