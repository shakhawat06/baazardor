import Hero from "@/components/home/Hero";
import ProductCard from "@/components/home/ProductCard";
import baseUrl from "@/services/baseUrl";
import Link from "next/link";

const getProducts = async () => {
  const res = await fetch(`${baseUrl}/api/bazardor/products`);
  const data = await res.json();
  return data;
};

export default async function Home() {
  const products = await getProducts();
  const downProducts = products.filter(
    (product) => product.change.dir == "down",
  );

  const upProducts = products.filter((product) => product.change.dir == "up");

  console.log(upProducts);

  return (
    <div className="mb-10">
      <Hero />

      {/* Products with increased prices */}
      <div className="max-w-5xl mx-auto w-full px-4 sm:px-5">
        <div className="flex gap-2 items-center mb-5">
          <span className="text-rose-700">▲</span>
          <h2 className="text-base sm:text-lg font-bold">আজ দাম বেড়েছে</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {upProducts.slice(1, 7).map((upProduct) => (
            <Link
              href={`/products/${upProduct.id}`}
              key={upProduct.id}
              className="min-w-0"
            >
              <ProductCard product={upProduct} />
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-8 sm:mt-10 max-w-5xl mx-auto w-full px-4 sm:px-5">
        <div className="flex gap-2 items-center mb-5 text-green-700">
          <span>▼</span>
          <h2 className="text-base sm:text-lg font-bold">আজ দাম কমেছে</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {downProducts.slice(1, 7).map((downProduct) => (
            <Link
              href={`/products/${downProduct.id}`}
              key={downProduct.id}
              className="min-w-0"
            >
              <ProductCard product={downProduct} />
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-8 sm:mt-10 max-w-5xl mx-auto w-full px-4 sm:px-5">
        <div className="mb-5">
          <h2 className="text-base sm:text-lg font-bold">সব পণ্য</h2>
          <p className="text-sm sm:text-base text-neutral-600">
            মোট {products.length} টি পণ্য দেখানো হচ্ছে
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto w-full px-4 sm:px-5">
        <div
          id="allproducts"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
        >
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="min-w-0"
            >
              <ProductCard product={product} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
