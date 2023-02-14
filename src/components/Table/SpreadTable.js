import React from "react";
import { Skeleton } from "antd";

const SpreadTable = (props) => {
  return (
    <>
      <div className="w-1/3 shadow-lg rounded-lg bg-white max-[414px]:w-full">
        <div className="px-8 py-6">
          <h2 className="text-2xl font-bold mb-8">Spread Table</h2>
          <h3 className="text-lg font-bold">
            The highest spread currency pair
          </h3>
          <p id="max-spread">
            {props.maxSpread.Symbol === undefined ? (
              <Skeleton
                active
                paragraph={{
                  rows: 0,
                }}
              />
            ) : (
              props.maxSpread.Symbol + "=" + props.maxSpread.Spread
            )}
          </p>
          <h3 className="text-lg font-bold mt-8">
            The lowest spread currency pair
          </h3>
          <p id="low-spread">
            {props.lowSpread.Symbol === undefined ? (
              <Skeleton
                active
                paragraph={{
                  rows: 0,
                }}
              />
            ) : (
              props.lowSpread.Symbol + "=" + props.lowSpread.Spread
            )}
          </p>
        </div>
      </div>
    </>
  );
};

export default SpreadTable;
