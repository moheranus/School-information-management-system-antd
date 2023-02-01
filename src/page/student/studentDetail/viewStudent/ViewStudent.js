import React from "react";
import "./ViewStudent.css";

import danyimage from "../../../../assets/img/danimage.jpg";
import studentImage from "../../../../assets/img/teacher2.svg";

import { Table, Tabs, Button, Tag, DatePicker, message, Upload } from "antd";
import {
  DownCircleOutlined,
  PlusOutlined,
  LoadingOutlined,
  EditOutlined,
  FolderViewOutlined,
} from "@ant-design/icons";

import { Link } from "react-router-dom";

// Usage
const columns = [
  {
    title: "Fees Code",
    dataIndex: "fecode",
    width: 200,
  },
  {
    title: "Due Date",
    dataIndex: "duedate",
    width: 200,
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "tags",
    width: 120,
    render: (value, record) => {
      if (value === "Not Paid") {
        return (
          <>
            <Tag color="red">Not Paid</Tag>
          </>
        );
      } else {
        return <Tag color="green">Paid</Tag>;
      }
    },
    // render: (_, { tags }) => (
    //      <>
    //        {tags.map((tag) => {
    //          let color = tag.length > 5 ? 'geekblue' : 'green';
    //          if (tag === 'loser') {
    //            color = 'volcano';
    //          }
    //          return (
    //            <Tag color={color} key={tag}>
    //              {tag.toUpperCase()}
    //            </Tag>
    //          );
    //        })}
    //      </>
    //    ),
  },
  {
    title: "Paid",
    dataIndex: "paid",
    width: 120,
  },
  {
    title: "Balance",
    dataIndex: "balance",

    width: 120,
  },
];
const data = [
  {
    fecode: "admission-fees",
    duedate: "04/01/2022 ",
    status: "paid",

    paid: "150",
    balance: "4000",
  },
  {
    fecode: "may-month-fees",
    duedate: "04/01/2022 ",
    status: "Not Paid",
    paid: "150",
    balance: "4000",
  },
  {
    fecode: "jun-month-fees",
    duedate: "04/01/2022 ",
    status: "Not Paid",
    paid: "150",
    balance: "4000",
  },
  {
    fecode: "jul-month-fees",
    duedate: "04/01/2022 ",
    status: "Not Paid",
    paid: "150",
    balance: "4000",
  },
];
//student details

const studentDetailColumn = [
  {
    title: "Student Detail Information",
    children: [
      {
        title: "",
        dataIndex: "action",
      },
      {
        title: "",
        dataIndex: "result",
      },
    ],
  },

  // {
  //   title: "Edit",
  //   dataIndex: "edit",
  // },
];
//student detail data starts here

const studentDetailData = [
  {
    action: "Admission Data",
    result: "01/05/2007",
  },
  {
    action: "Date Of Birth",
    result: "03/05/2000",
  },
  {
    action: "Mobile number",
    result: "0949039893",
  },
  {
    action: "Email Address",
    result: "yonas@gmail.com",
  },
  {
    action: "Father Name",
    result: "Gildo Belete",
  },
  {
    action: "Father Occupation",
    result: "Doctor",
  },
  {
    action: "Father Phone Number",
    result: "09179302093",
  },
  {
    action: "Father Email Address",
    result: "gildo@23gmail.com",
  },
  {
    action: "Mother  Name",
    result: "Almaz Ayana",
  },
  {
    action: "Mother Occupation",
    result: "Engineer",
  },
  {
    action: "Mother Phone Number",
    result: "0911345674",
  },
  {
    action: "Mother Email Address",
    result: "almi24@gmail.com",
  },
];

function ViewStudent() {
  return (
    <div className="viewStudent">
      <div className="viewStudentCont">
        <div className="profileCard">
          <div className="studentInfoCard">
            <div className="cards">
              <div className="cardImageCont">
                <img src={studentImage} alt="Avatar" className="attendImage" />
              </div>
              <div className="cardBody">
                <div className="attendAction">
                  <h3>First Name:</h3>
                  <h3>Last Name:</h3>
                  <h3>Gender:</h3>
                  <h3>Class:</h3>
                  <h3>Section:</h3>
                </div>
                <div className="attendResult">
                  <h3>Yonas</h3>
                  <h3>Gildo</h3>
                  <h3>Male</h3>
                  <h3>Grade 5</h3>
                  <h3>B</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="profileCard2">
          <div className="studentInfoCard">
            <div className="cards">
              <div className="cardImageCont">
                <img src={studentImage} alt="Avatar" className="attendImage" />
              </div>
              <div className="cardBody">
                <div className="attendAction">
                  <h3>First Name:</h3>
                  <h3>Last Name:</h3>
                  <h3>Gender:</h3>
                  <h3>Class:</h3>
                  <h3>Section:</h3>
                </div>
                <div className="attendResult">
                  <h3>Aman</h3>
                  <h3>Gildo</h3>
                  <h3>Male</h3>
                  <h3>Grade 7</h3>
                  <h3>A</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="profileInfo">
          <div className="profileTabs">
            <Tabs defaultActiveKey="tab1">
              <Tabs.TabPane tab="Profile" key="profile">
                <div className="profileTabInfo">
                  <div className="studentDetailTable">
                    <Table
                      columns={studentDetailColumn}
                      dataSource={studentDetailData}
                      scroll={{
                        y: 600,
                        // x: '100vw',
                      }}
                    />
                  </div>
                </div>
              </Tabs.TabPane>
              {/* SECOND TAB HERE */}
              <Tabs.TabPane tab="Fees" key="fees">
                <div>
                  <div className="studentDetailTable">
                    <Table
                      columns={columns}
                      dataSource={data}
                      scroll={{
                        y: 300,
                        // x: '100vw',
                      }}
                    />
                  </div>
                </div>
              </Tabs.TabPane>
              <Tabs.TabPane tab="Exam" key="exam">
                <div>this is content of tab3</div>
              </Tabs.TabPane>
              dhfuh
            </Tabs>
          </div>
        </div>
        <div className="siblingTitle">
          <h2>Sibling Information</h2>
        </div>
      </div>
    </div>
  );
}

export default ViewStudent;
