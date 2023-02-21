import React from "react";
import { Skeleton } from "antd";

const SpreadTable = (props) => {

//   const mapData = props.zeroSpread.map((data) => (
//     <p>{data.Symbol + "=" + data.Spread}</p>
//   ));

  return (
    <>
      <div className="w-1/3 shadow-lg rounded-lg bg-white 
          max-[414px]:flex-col
          max-[414px]:w-full
          max-[414px]:mx-auto
          max-[414px]:mb-5
          max-[414px]:pb-5"
          >
        <div className="px-8 py-6">
          <h2 className="text-2xl font-bold mb-8">Spread Table</h2>
          <h3 className="text-lg font-bold">
            The highest spread currency pair
          </h3>
          {props.maxSpread.Symbol === undefined ? (
            <Skeleton
              active
              title={false}
              paragraph={{
                rows: 1,
              }}
            />
          ) : (
            <p>{props.maxSpread.Symbol + "=" + props.maxSpread.Spread}</p>
          )}
          <h3 className="text-lg font-bold mt-8">
            The lowest spread currency pair
          </h3>
          {props.lowSpread.Symbol === undefined ? (
            <Skeleton
              active
              title={false}
              paragraph={{
                rows: 1,
              }}
            />
          ) : (
             <p>{props.lowSpread.Symbol + "=" + props.lowSpread.Spread.toFixed(2)}</p>
          )}
        </div>
      </div>
    </>
  );
};


export default SpreadTable;
