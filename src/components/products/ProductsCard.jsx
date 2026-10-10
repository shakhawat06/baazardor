import React from "react";

const ProductsCard = ({ categoryProduct }) => {
  console.log(categoryProduct);

  return (
    <div>
      <div className="card card-border bg-base-100 w-80">
        <div className="card-body">
          <div className="flex items-center gap-3">
            <span className="text-xl bg-gray-200 p-2 rounded-xl">
              {categoryProduct.categoryIcon}
            </span>
            <div className="">
              <h2 className="card-title">{categoryProduct.nameBn}</h2>
              <p>প্রতি কেজি</p>
            </div>
          </div>
          <div className="mt-5 flex justify-between items-center">
            <div className="">
              <p>আজকের দাম</p>
              <p>
                <span className="text-2xl font-semibold">
                  {categoryProduct.today}
                </span>{" "}
                টাকা
              </p>
            </div>
            <div className={`${categoryProduct.change.dir == 'up' ? 'text-green-700' : 'text-rose-700'}  bg-gray-200 px-3 py-1 rounded-xl  space-x-2`}>
              <span>{categoryProduct.change.dir == "up" ? "▲" : "▼"}</span>
              <span>{categoryProduct.change.pct}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
