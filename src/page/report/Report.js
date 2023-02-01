import { Button, Space, Table } from "antd";
import { useState } from "react";
import "./TestPage.css";
const data = [
  {
    key: "1",
    name: "Grade 1",
    female: "24",
    male: "32",
    total1: "56",

    year: "2013",
  },
  {
    key: "2",
    name: "Grade 2",
    female: "24",
    male: "32",
    total1: "56",
    year: "2013",
  },
  {
    key: "3",
    name: "Grade 3",
    female: "24",
    male: "32",
    total1: "56",
    year: "2013",
  },
  {
    key: "4",
    name: "Grade 4",
    female: "24",
    male: "32",
    total1: "56",
    year: "2013",
  },
  {
    key: "5",
    name: "Grade 5",
    female: "24",
    male: "32",
    total1: "56",
    year: "2013",
  },
  {
    key: "6",
    name: "Grade 6",
    female: "24",
    male: "32",
    total1: "56",
    year: "2013",
  },
  {
    key: "7",
    name: "Grade 7",
    female: "24",
    male: "32",
    total1: "56",
    year: "2013",
  },
  {
    key: "8",
    name: "Grade 8",
    female: "24",
    male: "32",
    total1: "56",
    year: "2013",
  },
  {
    key: "9",
    name: "Grade 9",
    female: "24",
    male: "32",
    total1: "56",
    year: "2013",
  },
  {
    key: "10",
    name: "Grade 10",
    female: "24",
    male: "32",
    total1: "56",
    year: "2013",
  },
  {
    key: "11",
    name: "Grade 11",
    female: "24",
    male: "32",
    total1: "56",
    year: "2013",
  },
  {
    key: "12",
    name: "Grade 1",
    female: "24",
    male: "32",
    total1: "56",
    year: "2014",
  },
  {
    key: "13",
    name: "Grade 2",
    female: "24",
    male: "32",
    total1: "56",
    year: "2014",
  },
  {
    key: "14",
    name: "Grade 3",
    female: "24",
    male: "32",
    total1: "56",
    year: "2014",
  },
  {
    key: "15",
    name: "Grade 4",
    female: "24",
    male: "32",
    total1: "56",
    year: "2014",
  },
  {
    key: "16",
    name: "Grade 5",
    female: "24",
    male: "32",
    total1: "56",
    year: "2014",
  },
  {
    key: "17",
    name: "Grade 6",
    female: "24",
    male: "32",
    total1: "56",
    year: "2014",
  },
  {
    key: "18",
    name: "Grade 7",
    female: "24",
    male: "32",
    total1: "56",
    year: "2014",
  },
  {
    key: "19",
    name: "Grade 8",
    female: "24",
    male: "32",
    total1: "56",
    year: "2014",
  },
  {
    key: "20",
    name: "Grade 9",
    female: "24",
    male: "32",
    total1: "56",
    year: "2014",
  },
  {
    key: "21",
    name: "Grade 10",
    female: "24",
    male: "32",
    total1: "56",
    year: "2014",
  },
  {
    key: "22",
    name: "Grade 11",
    female: "24",
    male: "32",
    total1: "56",
    year: "2014",
  },

  {
    key: "23",
    name: "Grade 1",
    female: "24",
    male: "32",
    total1: "56",
    year: "2015",
  },
  {
    key: "24",
    name: "Grade 2",
    female: "24",
    male: "32",
    total1: "56",
    year: "2015",
  },
  {
    key: "25",
    name: "Grade 5",
    female: "24",
    male: "32",
    total1: "56",
    year: "2015",
  },
  {
    key: "26",
    name: "Grade 4",
    female: "24",
    male: "32",
    total1: "56",
    year: "2015",
  },
  {
    key: "27",
    name: "Grade 5",
    female: "24",
    male: "32",
    total1: "56",
    year: "2015",
  },
  {
    key: "28",
    name: "Grade 6",
    female: "24",
    male: "32",
    total1: "56",
    year: "2015",
  },
  {
    key: "29",
    name: "Grade 7",
    female: "24",
    male: "32",
    total1: "56",
    year: "2015",
  },
  {
    key: "30",
    name: "Grade 8",
    female: "24",
    male: "32",
    total1: "56",
    year: "2015",
  },
  {
    key: "31",
    name: "Grade 9",
    female: "24",
    male: "32",
    total1: "56",
    year: "2015",
  },
  {
    key: "32",
    name: "Grade 10",
    female: "24",
    male: "32",
    total1: "56",
    year: "2015",
  },
  {
    key: "33",
    name: "Grade 11",
    female: "24",
    male: "32",
    total1: "56",
    year: "2015",
  },
];
const App = () => {
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      filters: [
        {
          text: "Grade 1",
          value: "Grade 1",
        },
        {
          text: "Grade 2",
          value: "Grade 2",
        },
        {
          text: "Grade 3",
          value: "Grade 3",
        },
        {
          text: "Grade 4",
          value: "Grade 4",
        },
        {
          text: "Grade 5",
          value: "Grade 5",
        },
        {
          text: "Grade 6",
          value: "Grade 6",
        },
        {
          text: "Grade 7",
          value: "Grade 7",
        },
        {
          text: "Grade 8",
          value: "Grade 8",
        },
      ],
      filteredValue: filteredInfo.name || null,
      onFilter: (value, record) => record.name.includes(value),

      ellipsis: true,
    },
    {
      title: "Gender",
      dataIndex: "gender",
      children: [
        {
          title: "Female",
          dataIndex: "female",
          key: "female",

          ellipsis: true,
        },
        {
          title: "Male",
          dataIndex: "male",
          key: "male",

          ellipsis: true,
        },
      ],
    },
    {
      title: "Total",
      dataIndex: "total1",
    },
    {
      title: "Year",
      dataIndex: "year",
      key: "year",
      filters: [
        {
          text: "2013",
          value: "2013",
        },
        {
          text: "2014",
          value: "2014",
        },
        {
          text: "2015",
          value: "2015",
        },
      ],
      filteredValue: filteredInfo.year || null,
      onFilter: (value, record) => record.year.includes(value),

      ellipsis: true,
    },
  ];
  return (
    <>
      <Table
        columns={columns}
        dataSource={data}
        onChange={handleChange}
        // bordered
        size="large"
        scroll={{
          x: "calc(600px + 50%)",
          y: 500,
        }}
      />
    </>
  );
};
export default App;
