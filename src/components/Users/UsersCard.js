import React, { useState, useEffect } from "react";

import Instruments from "../Table/Instruments";
import SpreadTable from "../Table/SpreadTable";
import UserInfo from "./UserInfo";
import { getUserData } from "../../api/userAPI";
import { getTableData } from "../../api/tableAPI";

const UsersCard = () => {
  const [userData, setUserData] = useState({});
  const [tableData, setTableData] = useState(null);
  const [maxSpread, setMaxSpread] = useState([]);
  const [lowSpread, setLowSpread] = useState([]);
  const [currentBidPrice, setCurrentBidPrice] = useState([]);
  const [previousBidPrice, setPreviousBidPrice] = useState([]);
  const [currentAskPrice, setCurrentAskPrice] = useState([]);
  const [previousAskPrice, setPreviousAskPrice] = useState([]);

  const userAPI = async () => {
    let res = await getUserData();
    setUserData(res.data[1]);
  };

  const tableAPI = async () => {
    const res = await getTableData();
    setTableData(res);

    // ======================================Part 3 (Getiing current bid and ask array dataset)=================================================
    // get current bid array
    let bidArray = res.map((Data) => Data.Bid);
    setCurrentBidPrice(bidArray);
  

    // get current sell array
    let askArray = res.map((Data) => Data.Ask);
    setCurrentAskPrice(askArray);
 
    // ======================================Part 4 (Getiing highest and lowest spread pair)====================================================
    // Sort the data based on the spread value
    const filteredData = tableData.filter(data => data.Spread !== 0)
    const sortedData = filteredData.sort((a, b) => b.Spread - a.Spread);

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
      setPreviousBidPrice(currentBidPrice);
      setPreviousAskPrice(currentAskPrice);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [tableData]);

  return (
    <>
      <section id="second-section">
        <div className="container mx-auto px-2 ">
          <div className="flex gap-6 max-[414px]:flex-col">
            <UserInfo userData={userData} className="w-1/3" />
            <Instruments
              className="w-1/2"
              tableData={tableData}
              currentBidPrice={currentBidPrice}
              previousBidPrice={previousBidPrice}
              currentAskPrice={currentAskPrice}
              previousAskPrice={previousAskPrice}
            />
            <SpreadTable
              className="w-1/3"
              maxSpread={maxSpread}
              lowSpread={lowSpread}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default UsersCard;
