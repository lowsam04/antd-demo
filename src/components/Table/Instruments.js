import React, { useState, useEffect } from "react";
import { Table, Input } from "antd";

// TODO: Change color table
const { Search } = Input;

const Instruments = (props) => {
  const [searchText, setSearchedText] = useState("");


  const columns = [
    {
      title: "Name",
      key: "name",
      dataIndex: "Symbol",
      filteredValue: [searchText],
      onFilter: (value, record) => {
        return String(record.Symbol)
          .toLowerCase()
          .includes(value.toLowerCase());
      },
    },
    {
      title: "Sell",
      dataIndex: "Bid",
      key: "bid",
    },
    {
      title: "Buy",
      dataIndex: "Ask",
      key: "ask",
    },
    {
      title: "Charge",
      dataIndex: "Spread",
      key: "spread",
      render: (spread, record) => {
        const latestSpread = props.tableData[0].spread;
        const spreadDifference = latestSpread - spread;
        const textColor =
          spreadDifference > 0
            ? 'green'
            : spreadDifference < 0
            ? 'red'
            : 'black';
        return (
          <span style={{ color: textColor }}>
            {spread}
          </span>
        );
      },
    },
  ];

  const onSearch = (value) => {
    if (value !== "") {
      setSearchedText(value);
    }
  };

  const onChange = (e) => {
    if (e !== "") {
      setSearchedText(e.target.value);
    }
  };

  return (
    <>
      <div className="w-1/3 shadow-lg rounded-lg bg-white">
        <div className="flex justify-between p-4">
          <h2 className="text-2xl font-bold">Instruments</h2>
          <div className="p-2">
            <Search
              placeholder="input search text"
              onSearch={onSearch}
              onChange={onChange}
              style={{
                width: 200,
              }}
            />
          </div>
        </div>
        <Table dataSource={props.tableData} columns={columns} />
      </div>
    </>
  );
};

export default Instruments;
