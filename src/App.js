import React from "react";
import "./App.css";
import "antd/dist/reset.css";

import StatisticCard from "./components/Statistic/StatisticCard";
import UsersCard from "./components/Users/UsersCard";

function App() {
  return (
    <>
      <StatisticCard/>
      <UsersCard />
    </>
  );
}

export default App;
