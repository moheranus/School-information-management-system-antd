import React, { useState } from "react";
import "antd/dist/reset.css";
import { Table, Typography } from "antd";
import "./Report2.css";
import { Button, Form, Select, Input } from "antd";
const { Text } = Typography;

const reportColumns = [
  {
    title: "First Name",
    dataIndex: "fname",
  },
  {
    title: "Last Name",
    dataIndex: "lname",
  },
  {
    title: "Gender",
    dataIndex: "gender",
  },
  {
    title: "Grade",
    dataIndex: "grade",
  },
  {
    title: "Section",
    dataIndex: "section",
  },
  {
    title: "Phone Number",
    dataIndex: "phonenumber",
  },
  {
    title: "Session",
    dataIndex: "session",
  },
];

const data = [
  {
    key: "1",
    fname: "Chala",
    lname: "Gudata",
    gender: "Male",
    grade: "5",
    section: "A",
    phonenumber: "0934883734",
    session: "2022-2023",
  },
  {
    key: "2",
    fname: "Abe",
    lname: "Kabe",
    gender: "Female",
    grade: "5",
    section: "A",
    phonenumber: "0978883734",
    session: "2022-2023",
  },
  {
    key: "3",
    fname: "Aye",
    lname: "Gudata",
    gender: "female",
    grade: "2",
    section: "A",
    phonenumber: "0934883734",
    session: "2022-2023",
  },
  {
    key: "4",
    fname: "Abebe",
    lname: "Kabede",
    gender: "male",
    grade: "1",
    section: "A",
    phonenumber: "0978883734",
    session: "2022-2023",
  },
  {
    key: "5",
    fname: "Fatuma",
    lname: "Roba",
    gender: "female",
    grade: "2",
    section: "A",
    phonenumber: "0934883734",
    session: "2022-2023",
  },
  {
    key: "6",
    fname: "john",
    lname: "Doe",
    gender: "male",
    grade: "3",
    section: "A",
    phonenumber: "0978883734",
    session: "2022-2023",
  },
  {
    key: "7",
    fname: "Kasa",
    lname: "Demeke",
    gender: "male",
    grade: "3",
    section: "A",
    phonenumber: "0978883734",
    session: "2022-2023",
  },
];

function Report2() {
  const [search, setSearch] = useState("");
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };
  const [tableData, setTableData] = useState(data);

  const onFinishClass = (values) => {
    console.log(values);

    for (let i = 0; i < tableData.length; i++) {
      if (values.grade === tableData[i].grade) {
        // message.info("Class Already Exists");
        // console.log("Already Exists");

        return;
      }
    }
  };
  return (
    <>
      <div className="regReport ">
        <div className="wrap">
          <div class="category">
            <div className="item">
              <p>
                Session <span>*</span>
              </p>
              <Form.Item name="session">
                <Select
                  // onChange={(e) => {
                  //   setGrade({ grade: e.target.value });
                  // }}
                  placeholder="Select session"
                  style={{
                    width: "100%",
                  }}
                  onChange={handleChange}
                  options={[
                    {
                      value: "2013",
                      label: "2013",
                    },
                    {
                      value: "2014",
                      label: "2014",
                    },
                    {
                      value: "2015",
                      label: "2015",
                    },
                  ]}
                />
              </Form.Item>
            </div>
            <div className="item">
              <p>
                Grade <span>*</span>
              </p>
              <Form.Item name="grade">
                <Select
                  // onChange={(e) => {
                  //   setGrade({ grade: e.target.value });
                  // }}
                  placeholder="Please Select Grade"
                  style={{
                    width: "100%",
                  }}
                  onChange={handleChange}
                  options={[
                    {
                      value: "Grade 1",
                      label: "Grade 1",
                    },
                    {
                      value: "Grade 2",
                      label: "Grade 2",
                    },
                    {
                      value: "Grade 3",
                      label: "Grade 3",
                    },
                    {
                      value: "Grade 4",
                      label: "Grade 4",
                    },
                    {
                      value: "Grade 5",
                      label: "Grade 5",
                    },
                  ]}
                />
              </Form.Item>
            </div>
            <div className="item">
              <p>
                Grade <span>*</span>
              </p>
              <Form.Item name="gender">
                <Select
                  // onChange={(e) => {
                  //   setGrade({ grade: e.target.value });
                  // }}
                  placeholder="Select gender"
                  style={{
                    width: "100%",
                  }}
                  onChange={handleChange}
                  options={[
                    {
                      value: "male",
                      label: "Male",
                    },
                    {
                      value: "female",
                      label: "Female",
                    },
                  ]}
                />
              </Form.Item>
            </div>
          </div>
          <div className="item">
            <Input.Search
              placeholder="Search here... eg type 2 for grade 2"
              style={{
                // marginLeft: "20px",
                minWidth: "400px",
                marginBottom: "10px",

                // height: "50px",
                padding: "20px 10px",
              }}
              onSearch={(value) => {
                setSearch(value);
              }}
              onchange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </div>
        </div>
        <div class="contents">
          <Table
            columns={reportColumns}
            dataSource={tableData}
            pagination={false}
            bordered
            summary={(pageData) => {
              let femaleCount = 0;
              for (let i = 0; i < data.length; i++) {
                if (data[i].gender === "Female") {
                  femaleCount++;
                }
              }

              let totalCount = femaleCount;

              return (
                <>
                  <Table.Summary.Row>
                    <Table.Summary.Cell>Total</Table.Summary.Cell>
                    <Table.Summary.Cell>
                      <Text
                        type="danger"
                        style={{
                          fontFamily: "poppins",
                          fontSize: "18px",
                          color: "#1677ff",
                          fontWeight: "700",
                        }}
                      >
                        {totalCount}
                      </Text>
                    </Table.Summary.Cell>
                    {/* <Table.Summary.Cell>
                      <Text>{totalCount}</Text>
                    </Table.Summary.Cell> */}
                  </Table.Summary.Row>
                  {/* <Table.Summary.Row>
                    <Table.Summary.Cell>totalCount</Table.Summary.Cell>
                    <Table.Summary.Cell>
                      <Text type="danger">{totalBorrow - totalRepayment}</Text>
                    </Table.Summary.Cell>
                  </Table.Summary.Row> */}
                </>
              );
            }}
          />
        </div>
      </div>
    </>
  );
}

export default Report2;
