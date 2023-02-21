import React, { useState } from "react";
import { Table, Input, Skeleton } from "antd";
import {
  CaretUpOutlined,
  CaretDownOutlined,
  SwapRightOutlined,
} from "@ant-design/icons";

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
      render: (text, record) => {
        if (props.prevTableData) {
          const prevBid = props.prevTableData.find(
            (data) => data.base === record.base
          ).Bid;
          if (text > prevBid) {
            return (
              <span style={{ color: "green" }}>
                <CaretUpOutlined />
                {Number(text).toFixed(2)}{" "}
              </span>
            );
          } else if (text < prevBid) {
            return (
              <span style={{ color: "red" }}>
                <CaretDownOutlined />
                {Number(text).toFixed(2)}{" "}
              </span>
            );
          } else {
            return (
              <span style={{ color: "blue" }}>
                <SwapRightOutlined />
                {Number(text).toFixed(2)}{" "}
              </span>
            );
          }
        }
      },
    },
    {
      title: "Sell",
      dataIndex: "Ask",
      key: "ask",
      render: (text, record) => {
        if (props.prevTableData) {
          const prevAsk = props.prevTableData.find(
            (data) => data.base === record.base
          ).Ask;
          if (text > prevAsk) {
            return (
              <span style={{ color: "green" }}>
                <CaretUpOutlined />
                {Number(text).toFixed(2)}{" "}
              </span>
            );
          } else if (text < prevAsk) {
            return (
              <span style={{ color: "red" }}>
                <CaretDownOutlined />
                {Number(text).toFixed(2)}{" "}
              </span>
            );
          } else {
            return (
              <span style={{ color: "blue" }}>
                <SwapRightOutlined />
                {Number(text).toFixed(2)}{" "}
              </span>
            );
          }
        }
      },
    },
    {
      title: "Change",
      dataIndex: "DailyChange",
      key: "dailyChange",
      render: (text) => text + "%",
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
      <div
        className="w-1/2 shadow-lg rounded-lg bg-white 
          max-[414px]:flex-col
          max-[414px]:w-full
          max-[414px]:mx-auto"
      >
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
        {!props.prevTableData ? (
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
