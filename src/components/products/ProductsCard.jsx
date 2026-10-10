import React from "react";

const ProductsCard = ({ categoryProduct }) => {
  return (
    <div>
      <div className="card card-border bg-base-100 w-80">
        <div className="">
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
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-semibold">
                  {categoryProduct.today}
                </h2>
                <span>টাকা</span>
              </div>
            </div>

            {categoryProduct.change.dir == "up" && (
              <div className="badge badge-soft badge-error">
                ▲ {Math.abs(categoryProduct.change.pct)}%
              </div>
            )}
            {categoryProduct.change.dir == "down" && (
              <div className="badge badge-soft badge-success">
                ▼ {Math.abs(categoryProduct.change.pct)}%
              </div>
            )}

            {categoryProduct.change.dir == "flat" && (
              <div className="badge badge-soft ">
                {Math.abs(categoryProduct.change.pct)}%
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
