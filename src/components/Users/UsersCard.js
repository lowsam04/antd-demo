import React, { useState, useEffect } from "react";

import Instruments from "../Table/Instruments";
import SpreadTable from "../Table/SpreadTable";
import UserInfo from "./UserInfo";
import { getUserData } from "../../api/userAPI";
import { getTableData } from "../../api/tableAPI";

const UsersCard = () => {
  const [userData, setUserData] = useState({});
  const [tableData, setTableData] = useState([]);
  const [maxSpread, setMaxSpread] = useState([]);
  const [lowSpread, setLowSpread] = useState([]);
  const [currentBidPrice, setCurrentBidPrice] = useState([]);
  const [previousBidPrice, setPreviousBidPrice] = useState([]);
  const [currentSellPrice, setCurrentSellPrice] = useState([]);
  const [previousSellPrice, setPreviousSellPrice] = useState([]);

  const userAPI = async () => {
    let res = await getUserData();
    setUserData(res.data[1]);
  };

  const tableAPI = async () => {
    const res = await getTableData();
    console.log('from res');
    console.log (res);

    setTableData(res);
    console.log('from setTableData');
    console.log (tableData);

    // ======================================Part 3 (Getiing current buy and sell array dataset)=================================================
    // get current bid array
    let bidArray = res.map((Data) => Data.Bid);
    // console.log(bidArray);
    setCurrentBidPrice(bidArray);

    // get current sell array
    let sellArray = res.map((Data) => Data.Sell);
    setCurrentSellPrice(...sellArray);

    
    // ======================================Part 4 (Getiing highest and lowest spread pair)====================================================
    // Sort the data based on the spread value
    const sortedData = tableData.sort((a, b) => b.Spread - a.Spread);

    // Get the highest spread pair
    const highestSpreadPair = {
      Symbol: sortedData[0].Symbol,
      Spread: sortedData[0].Spread,
    };

    // Get the lowest spread pair
    const lowestSpreadPair = {
      Symbol: sortedData[sortedData.length - 1].Symbol,
      Spread: sortedData[sortedData.length - 1].Spread,
    };

    setMaxSpread(highestSpreadPair);
    setLowSpread(lowestSpreadPair);
  };

  useEffect(() => {
    userAPI();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      tableAPI();
      // console.log(tableData);
      // console.log(currentBidPrice);
      

    }, 2000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <section id="second-section">
        <div className="container mx-auto px-2">
          <div className="flex gap-6">
            <UserInfo userData={userData} />
            <Instruments tableData={tableData} />
            <SpreadTable maxSpread={maxSpread} lowSpread={lowSpread} />
          </div>
        </div>
      </section>
    </>
  );
};

export default UsersCard;
