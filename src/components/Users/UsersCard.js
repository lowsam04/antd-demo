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

  const userAPI = async () => {
    const res = await getUserData();
    setUserData(res.data[1]);
  };

  const tableAPI = async () => {
    const res = await getTableData();
    setTableData(res);
    // Sort the data based on the spread value
    const sortedData = res.sort((a, b) => b.Spread - a.Spread);

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
    tableAPI();
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
