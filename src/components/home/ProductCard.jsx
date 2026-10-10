import React from "react";

const ProductCard = ({ product }) => {
  
  return (
    <div>
      <div className="card card-border bg-base-100 w-80">
        <div className="">
          <div className="flex items-center gap-4">
            <span className="text-3xl p-1 bg-gray-300 rounded-md">
              {product.categoryIcon}
            </span>
            <div className="">
              <h2 className="text-2xl">{product.nameBn}</h2>
              <p className="text-neutral-600">প্রতি কেজি</p>
            </div>
          </div>
          <div className="mt-5 flex items-center justify-between">
            <div className="">
              <span className="">আজকের দাম</span>
              <div className="flex items-center gap-2">
                <h2 className="text-xl">{product.today}</h2>
                <span> টাকা</span>
              </div>
            </div>

            <div className="">
                {product.change.dir == "up" && <div className="badge badge-soft badge-error">
                    ▲ {Math.abs(product.change.pct)}%
                  </div>}
                  {product.change.dir == "down" && <div className="badge badge-soft badge-success">
                    ▼ {Math.abs(product.change.pct)}%
                  </div>}

                  {product.change.dir == "flat" && <div className="badge badge-soft ">
                    {Math.abs(product.change.pct)}%
                  </div>}


              {/* {product.change.dir == "up" ? (
                  <div className="badge badge-soft badge-success">
                    ▼ {product.change.pct}%
                  </div>
              ) : product.change.dir == "down" (
                  <div className="badge badge-soft badge-error">
                    ▲ {product.change.pct}%
                  </div>
              ) : (
                <div className="badge badge-soft badge-error">
                    ▲ {product.change.pct}%
                  </div>
              )
              } */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
