import React from "react";

const Marque = ({ marqueProducts }) => {

  return (
    <div className="border-b border-gray-300 flex gap-5 px-10 py-1 overflow-x-auto whitespace-nowrap">
      {marqueProducts.map((pro) => (
        
        <div key={pro.id} className="inline-flex shrink-0 border-r border-gray-200">
          <div className="inline-flex items-center gap-1">
            <div className="inline-flex items-center gap-1">
              <p>{pro.categoryIcon}</p>
              <h2>{pro.nameBn}</h2>
            </div>

            <div className="inline-flex items-center gap-1">
              <p>{pro.today} টাকা/কেজি</p>

              {pro.change.dir === "down" && (
                <span className="text-green-500">▼ {Math.abs(pro.change.pct)}%</span>
              )}

              {pro.change.dir === "up" && (
                <span className="text-rose-500">▲ {Math.abs(pro.change.pct)}%</span>
              )}

              {pro.change.dir === "flat" && (
                <span className="text-gray-500">— {Math.abs(pro.change.pct)}%</span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>

    // <div className="border-b border-gray-300 flex gap-5 px-10 py-1">
    //   {marqueProducts.map((pro) => (
    //     <div key={pro.id}>
    //       <div className="flex gap-1">
    //         <div className="flex">
    //           <p>{pro.categoryIcon}</p>
    //           <h2>{pro.nameBn}</h2>
    //         </div>
    //         <div className="flex">
    //           <p>{pro.today} টাকা/কেজি</p>
    //           <p>
    //             {pro.change.dir == "down" && (
    //               <span className="text-green-500">▼ {pro.change.pct}%</span>
    //             )}
    //             {pro.change.dir == "up" && (
    //               <span className="text-rose-500">▲ {pro.change.pct}%</span>
    //             )}
    //             {pro.change.dir == "flat" && (
    //               <span className="text-rose-500">▲ {pro.change.pct}%</span>
    //             )}
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   ))}
    // </div>
  );
};

export default Marque;
