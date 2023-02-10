import React, { useEffect, useState } from "react";

const getMaximumSpread = (arr, prop) => {
  let max = [];
  for (var i = 0; i < arr.length; i++) {
    if (max == null || parseInt(arr[i][prop]) > parseInt(max[prop]))
      max = arr[i];
  }
  return max;
};

const getLowestSpread = (arr, prop) => {
  const low = [];
  for (var i = 0; i < arr.length; i++) {
    if (low == null || parseInt(arr[i][prop]) < parseInt(low[prop]))
      low = arr[i];
  }
  return low;
};

const SpreadTable = (props) => {
  return (
    <>
      <div className="w-1/3 shadow-lg rounded-lg bg-white">
        <div className="px-8 py-6">
          <h2 className="text-2xl font-bold mb-8">Spread Table</h2>
          <h3 className="text-lg font-bold">
            The highest spread currency pair
          </h3>
          <p id="max-spread">
            {props.maxSpread.Symbol + "=" + props.maxSpread.Spread}
          </p>
          <h3 className="text-lg font-bold mt-8">
            The lowest spread currency pair
          </h3>
          <p id="low-spread">
            {props.lowSpread.Symbol + "=" + props.lowSpread.Spread}
          </p>
        </div>
      </div>
    </>
  );
};

export default SpreadTable;
