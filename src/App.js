import React from "react";
import "./App.css";
import "antd/dist/reset.css";

import DataCard from "./components/Statistic/DataCard";
import UsersCard from "./components/Users/UsersCard";

function App() {
  return (
    <>
      <DataCard />
      <UsersCard />
    </>
  );
}

export default App;
