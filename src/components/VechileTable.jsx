/* eslint-disable react/prop-types */
import { Table } from "antd";
import { useState } from "react";

const VehicleTable = ({ data }) => {
  const [sortedInfo, setSortedInfo] = useState({});

  const columns = [
    {
      title: "VIN",
      dataIndex: "VIN (1-10)",
      key: "vin",
    },
    {
      title: "Model Year",
      dataIndex: "Model Year",
      key: "modelYear",
      sorter: (a, b) => a["Model Year"] - b["Model Year"],
      sortOrder: sortedInfo.columnKey === "modelYear" && sortedInfo.order,
    },
    {
      title: "Make",
      dataIndex: "Make",
      key: "make",
      sorter: (a, b) => a.Make.localeCompare(b.Make),
      sortOrder: sortedInfo.columnKey === "make" && sortedInfo.order,
    },
    {
      title: "Model",
      dataIndex: "Model",
      key: "model",
      sorter: (a, b) => a.Model.localeCompare(b.Model),
      sortOrder: sortedInfo.columnKey === "model" && sortedInfo.order,
    },
    {
      title: "Electric Range (Miles)",
      dataIndex: "Electric Range",
      key: "electricRange",
      sorter: (a, b) => a["Electric Range"] - b["Electric Range"],
      sortOrder: sortedInfo.columnKey === "electricRange" && sortedInfo.order,
    },
  ];

  const handleChange = (pagination, filters, sorter) => {
    setSortedInfo(sorter);
  };

  return (
    <Table
      columns={columns}
      dataSource={data}
      rowKey="VIN (1-10)"
      onChange={handleChange}
      rowClassName={() => "text-sm py-1"} 
    />
  );
};

export default VehicleTable;
