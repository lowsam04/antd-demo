import React, { useState } from "react";
import { Table, Input, Skeleton } from "antd";
import { CaretUpOutlined, CaretDownOutlined } from "@ant-design/icons";

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
      title: "Buy",
      dataIndex: "Bid",
      key: "bid",
      render: (text, record, index) => {
        //text = value, record = row, index
        // console.log("index");
        // console.log(props.currentBidPrice[index]);
        // console.log(record);
        const curr = props.currentBidPrice[index];
        const prev = props.previousBidPrice[index];
        const textColor = curr >= prev ? "green" : "red";
        return (
          <span style={{ color: textColor }}>
            {curr >= prev ? <CaretUpOutlined /> : <CaretDownOutlined />}{" "}
            {Math.round(curr * 100) / 100}
          </span>
        );
      },
    },
    {
      title: "Sell",
      dataIndex: "Ask",
      key: "ask",
      render: (text, record, index) => {
        const curr = props.currentAskPrice[index];
        const prev = props.previousAskPrice[index];
        const textColor = curr >= prev ? "green" : "red";
        console.log();
        return (
          <span style={{ color: textColor }}>
            {curr >= prev ? <CaretUpOutlined /> : <CaretDownOutlined />}
            {Math.round(curr * 100) / 100}
          </span>
        );
      },
    },
    {
      title: "Charge",
      dataIndex: "Spread",
      key: "spread",
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
      <div className="w-1/2 shadow-lg rounded-lg bg-white max-[414px]:w-full">
        <div className="flex justify-between p-4">
          <h2 className="text-2xl font-bold">Instruments</h2>
          <div className="p-2">
            <Search
              placeholder="Search"
              onSearch={onSearch}
              onChange={onChange}
              style={{
                width: 200,
              }}
            />
          </div>
        </div>
        {!props.tableData ? (
          <Skeleton
            style={{
              width: "90%",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "1rem",
            }}
            active
            title={false}
            paragraph={{
              rows: 14,
            }}
          />
        ) : (
          <Table
            dataSource={props.tableData}
            columns={columns}
            style={{
              width: "90%",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "1rem",
            }}
            active
            tableLayout="fixed"
            size="small"
          />
        )}
      </div>
    </>
  );
};

export default Instruments;
