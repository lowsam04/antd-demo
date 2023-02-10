import React from "react";
import "./App.css";
import "antd/dist/reset.css";

import DataCard from "./components/Statistic/DataCard";
import Users from "./components/Users/Users";

function App() {
  return (
    <>
      <DataCard />
      <Users />
    </>
  );
}

export default App;
