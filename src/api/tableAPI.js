import React from "react";

const getTableData = async () => {
  try {
    const response = await fetch(
      // "https://v2.overwatchs.com/api/spread-group-symbols-price/RUBY-Premium"
      "http://13.212.255.177/api/priceData"
    );
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};

export { getTableData };
