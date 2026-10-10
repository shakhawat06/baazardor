import baseUrl from "@/services/baseUrl";
import { Breadcrumbs } from "@heroui/react";

const singleProduct = async (productId) => {
  const res = await fetch(`${baseUrl}/api/bazardor/products/${productId}`);
  const data = await res.json();
  return data;
};

const ProductDetailsPage = async ({ params }) => {
  const { productId } = await params;
  const product = await singleProduct(productId);

  console.log(product);

  const minValue = Math.min(...product.markets.map((market) => market.min));
  const maxValue = Math.max(...product.markets.map((market) => market.max));

  const minAverage =
    product.markets.reduce((total, market) => total + market.min, 0) /
    product.markets.length;
  const maxAverage =
    product.markets.reduce((total, market) => total + market.max, 0) /
    product.markets.length;

  const priceCalculation = product.yesterday - product.today;

  const average = (minAverage + maxAverage) / 2;

  return (
    <div className="max-w-5xl w-full mx-auto px-4 sm:px-5">
      {/* Breadcrumbs */}
      <div className="py-4 overflow-x-auto">
        <Breadcrumbs>
          <Breadcrumbs.Item href="/">হোম</Breadcrumbs.Item>
          <Breadcrumbs.Item href={`/category/${product.category}`}>
            {product.categoryNameBn}
          </Breadcrumbs.Item>
          <Breadcrumbs.Item>{product.nameBn}</Breadcrumbs.Item>
        </Breadcrumbs>
      </div>

      {/* Product Header */}
      <div className="bg-white p-4 sm:p-5 my-4 sm:my-5 rounded-2xl border border-gray-200">
        <div className="flex flex-col md:flex-row md:justify-between gap-5">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center min-w-0">
            <p className="text-4xl sm:text-5xl bg-gray-200 p-4 sm:p-5 rounded-2xl shrink-0">
              {product.image}
            </p>

            <div className="space-y-2 min-w-0">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold warp-words">
                {product.nameBn}
              </h2>

              <p className="text-sm sm:text-base text-neutral-600">
                প্রতি কেজি · {product.categoryNameBn}
              </p>

              <p className="text-sm sm:text-base text-neutral-700">
                গতকালের তুলনায় আজ দাম
                {priceCalculation > 0 ? (
                  <> বেড়েছে · {Math.abs(priceCalculation)} টাকা</>
                ) : priceCalculation < 0 ? (
                  <> কমেছে · {Math.abs(priceCalculation)} টাকা</>
                ) : (
                  <> অপরিবর্তিত</>
                )}
              </p>
            </div>
          </div>

          {/* Today's Price */}
          <div className="bg-gray-100 px-5 py-4 rounded-2xl text-center w-full md:w-44 shrink-0">
            <p className="text-sm text-neutral-600">আজকের দাম</p>
            <h2 className="text-2xl sm:text-3xl font-bold my-1">
              {product.today}
            </h2>
            <p className="text-sm text-neutral-600">টাকা / কেজি</p>

            {product.change.dir === "down" && (
              <span className="text-green-700">
                ▼ {Math.abs(product.change.pct)}%
              </span>
            )}

            {product.change.dir === "up" && (
              <span className="text-rose-700">
                ▲ {Math.abs(product.change.pct)}%
              </span>
            )}

            {product.change.dir === "flat" && (
              <span className="text-gray-500">
                {Math.abs(product.change.pct)}%
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Price Summary and Market Prices */}
      <div className="bg-white p-4 sm:p-5 my-4 sm:my-5 rounded-2xl border border-gray-200">
        <h2 className="font-bold text-lg mb-2">দামের সারসংক্ষেপ</h2>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
          <div className="bg-white p-4 sm:p-5 my-2 sm:my-3 rounded-2xl border border-gray-200">
            <p className="text-sm sm:text-base text-gray-600">সর্বনিম্ন দাম</p>
            <div className="flex items-end gap-2 text-green-600 mt-2">
              <h2 className="text-3xl sm:text-4xl font-bold">{minValue}</h2>
              <span>টাকা</span>
            </div>
            <p className="text-sm text-neutral-600 mt-2">
              সবচেয়ে কম দামের বাজার
            </p>
          </div>

          <div className="bg-white p-4 sm:p-5 my-2 sm:my-3 rounded-2xl border border-gray-200">
            <p className="text-sm sm:text-base text-gray-600">সর্বাধিক দাম</p>
            <div className="flex items-end gap-2 text-rose-600 mt-2">
              <h2 className="text-3xl sm:text-4xl font-bold">{maxValue}</h2>
              <span>টাকা</span>
            </div>
            <p className="text-sm text-neutral-600 mt-2">
              সবচেয়ে বেশি দামের বাজার
            </p>
          </div>

          <div className="bg-white p-4 sm:p-5 my-2 sm:my-3 rounded-2xl border border-gray-200">
            <p className="text-sm sm:text-base text-gray-600">গড় দাম</p>
            <div className="flex items-end gap-2 text-green-600 mt-2">
              <h2 className="text-3xl sm:text-4xl font-bold">
                {average.toFixed()}
              </h2>
              <span>টাকা</span>
            </div>
            <p className="text-sm text-neutral-600 mt-2">প্রতি কেজির হিসাবে</p>
          </div>
        </div>

        {/* Market Price Table */}
        <div className="mt-6">
          <h2 className="font-bold text-base sm:text-lg mb-3">
            বাজারভিত্তিক আজকের দাম
          </h2>

          <div className="w-full overflow-x-auto rounded-xl border border-gray-200">
            <table className="table min-w-[600]">
              <thead>
                <tr>
                  <th>বাজার</th>
                  <th>বিভাগ</th>
                  <th>সর্বনিম্ন</th>
                  <th>সর্বাধিক</th>
                  <th>গড়</th>
                </tr>
              </thead>

              <tbody>
                {product.markets.map((m, index) => (
                  <tr key={`${m.market}-${index}`}>
                    <td>{m.market}</td>
                    <td>{m.division}</td>
                    <td>{m.min}</td>
                    <td>{m.max}</td>
                    <td>{((m.min + m.max) / 2).toFixed(1)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    // <div className="max-w-5xl w-full mx-auto">
    //   <div className="p-5">
    //     <Breadcrumbs>
    //       <Breadcrumbs.Item href="/">হোম</Breadcrumbs.Item>
    //       <Breadcrumbs.Item href={`/category/${product.category}`}>{product.categoryNameBn}</Breadcrumbs.Item>
    //       <Breadcrumbs.Item>{product.nameBn}</Breadcrumbs.Item>
    //     </Breadcrumbs>
    //   </div>

    //   <div className="bg-white p-5 m-5 rounded-2xl border border-gray-200">
    //     <div className="flex justify-between">
    //       <div className="flex gap-3 items-center">
    //         <p className="text-5xl bg-gray-200 p-5 rounded-2xl">
    //           {product.image}
    //         </p>
    //         <div className="space-y-1">
    //           <h2 className="text-4xl font-bold">{product.nameBn}</h2>
    //           <p className="text-neutral-600">
    //             প্রতি কেজি · {product.categoryNameBn}
    //           </p>
    //           <p className="text-neutral-700">
    //             গতকালের তুলনায় আজ দাম
    //             {priceCalculation < 0 ? (
    //               <> বেড়েছে · {Math.abs(priceCalculation)} টাকা</>
    //             ) : (
    //               <> কমেছে · {Math.abs(priceCalculation)} টাকা</>
    //             )}
    //           </p>
    //         </div>
    //       </div>
    //       <div className="bg-gray-200 px-5 py-1 rounded-2xl text-center">
    //         <p className="text-neutral-600">আজকের দাম</p>
    //         <h2 className="text-2xl">{product.today}</h2>
    //         <p className="text-neutral-600">টাকা / কেজি</p>
    //         {product.change.dir == "down" && (
    //           <span className="text-green-700">▼ {Math.abs(product.change.pct)}%</span>
    //         )}
    //         {product.change.dir == "up" && (
    //           <span className="text-rose-700">▲ {Math.abs(product.change.pct)}%</span>
    //         )}

    //         {product.change.dir == "flat" && (
    //           <span className="text-gray-500"> {Math.abs(product.change.pct)}%</span>
    //         )}
    //       </div>
    //     </div>
    //   </div>

    //   <div className="bg-white p-5 m-5 rounded-2xl border border-gray-200">
    //     <p>দামের সারসংক্ষেপ</p>

    //     <div className="grid grid-cols-3 gap-5">
    //       <div className="bg-white p-5 my-5 rounded-2xl border border-gray-200">
    //         <p className="text-gray-600">সর্বনিম্ন দাম</p>
    //         <div className="flex items-end gap-2 text-green-500">
    //           <h2 className="text-4xl font-bold">{minValue}</h2>
    //           <span>টাকা</span>
    //         </div>
    //         <p className="text-neutral-600">সবচেয়ে কম দামের বাজার</p>
    //       </div>

    //       <div className="bg-white p-5 my-5 rounded-2xl border border-gray-200">
    //         <p className="text-gray-600">সর্বাধিক দাম</p>
    //         <div className="flex items-end gap-2 text-rose-600">
    //           <h2 className="text-4xl font-bold">{maxValue}</h2>
    //           <span>টাকা</span>
    //         </div>
    //         <p className="text-neutral-600">সবচেয়ে বেশি দামের বাজার</p>
    //       </div>

    //       <div className="bg-white p-5 my-5 rounded-2xl border border-gray-200">
    //         <p className="text-gray-600">গড় দাম</p>
    //         <div className="flex items-end gap-2 text-green-500">
    //           <h2 className="text-4xl font-bold">{average.toFixed()}</h2>
    //           <span>টাকা</span>
    //         </div>
    //         <p className="text-neutral-600">প্রতি কেজি-এর হিসাবে</p>
    //       </div>
    //     </div>

    //     <div className="">
    //       <h2 className="mb-2">বাজারভিত্তিক আজকের দাম</h2>

    //       <div className="w-full">
    //         <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
    //           <table className="table">
    //             {/* head */}
    //             <thead>
    //               <tr>
    //                 <th>বাজার</th>
    //                 <th>বিভাগ</th>
    //                 <th>সর্বনিম্ন</th>
    //                 <th>সর্বাধিক</th>
    //                 <th>গড়</th>
    //               </tr>
    //             </thead>
    //             <tbody>
    //               {product.markets.map((m, index) => (
    //                 <tr key={index}>
    //                   <td>{m.market}</td>
    //                   <td>{m.division}</td>
    //                   <td>{m.min}</td>
    //                   <td>{m.max}</td>
    //                   <td>{(m.min + m.max) / 2}</td>
    //                 </tr>
    //               ))}
    //             </tbody>
    //           </table>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default ProductDetailsPage;
