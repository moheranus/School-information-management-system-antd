import { useState, useEffect, useRef } from "react";
import "./PersonalAttendance.css";
import studentImage from "../../assets/img/teacher2.svg";
import { Form, Input, Button, Checkbox, Table, Select, DatePicker } from "antd";
import { Link } from "react-router-dom";
import {
  DownCircleOutlined,
  ArrowLeftOutlined,
  StepBackwardOutlined,
  LoadingOutlined,
  EditOutlined,
  FolderViewOutlined,
} from "@ant-design/icons";
import Moment from "react-moment";
import "moment-timezone";
import moment from "moment-timezone";
const { RangePicker } = DatePicker;
const columns = [
  {
    title: "Attendance type",
    dataIndex: "attendType",
    width: 200,
  },

  {
    title: "Attendance description",
    dataIndex: "attendreport",
  },
];
const data = [
  {
    attendType: "Present",
    attendreport: (
      <div>
        <p>
          {moment().format("Do MMM YYYY hh:mm:ss ")},
          {moment().format(" Do MMM YYYY hh:mm:ss")},
          {moment().format(" Do MMM YYYY hh:mm:ss")},
        </p>
      </div>
    ),
  },

  {
    attendType: "Late Morning",
    attendreport: (
      <div>
        <p>{moment().format("Do MMM YYYY, hh:mm:ss")}</p>
      </div>
    ),
  },
  {
    attendType: "Late Afternoon",
    attendreport: (
      <div>
        <p>{moment().format("Do MMM YYYY, hh:mm:ss")}</p>
      </div>
    ),
  },
  {
    attendType: "Absent Morning",
    attendreport: (
      <div>
        <p>{moment().format("Do MMM YYYY, hh:mm:ss")}</p>
      </div>
    ),
  },
  {
    attendType: "Absent Afternoon",
    attendreport: (
      <div>
        <p>{moment().format("Do MMMM YYYY, hh:mm:ss")}</p>
      </div>
    ),
  },
  {
    attendType: "Permission",
    attendreport: (
      <div>
        <p>{moment().format("Do MMM YYYY, hh:mm:ss")}</p>
      </div>
    ),
  },
];

function PersonalAttendance() {
  //DELETE CLASS MODAL FUNCTION STARTS HERE

  //DELETE CLASS MODAL FUNCTION ENDS HERE
  // CLASS ON FINISH

  //global table search

  const [searchedText, setSearchedText] = useState("");

  //Table Columns

  return (
    <div className="classAddition">
      <div className="personalReport">
        <div class="studentInfo">
          <h2>Student Info</h2>

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
        <div class="attendanceReport">
          <h2>Attendance Report</h2>
          <div className="attendanceback">
            <Button
              style={{
                padding: "10px 10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#CD5D7D",
                color: "#fff",
                fontSize: "14px",

                fontFamily: "ubuntu",
                fontWeight: "600",
              }}
            >
              <Link exact to="/attendancesheet">
                Back
              </Link>
            </Button>
          </div>
          <Form>
            <div className="attendanceRange">
              <Form.Item
                name="duration"
                rules={[
                  {
                    required: true,
                    message: "Please select duration",
                  },
                ]}
              >
                <Select
                  suffixIcon={
                    <DownCircleOutlined
                      style={{
                        fontSize: "25px",
                        marginTop: "3px",
                        color: "#38E54D",
                      }}
                    />
                  }
                  showSearch
                  placeholder="Select Duration"
                  style={{
                    width: "415px",
                    marginTop: "3px",
                    // padding:"0 20px 20px 20px",
                    lineHeight: "40px !important",
                  }}
                  //   onChange={handleChange}
                  options={[
                    {
                      value: "one week",
                      label: "One Week",
                    },
                    {
                      value: "one month",
                      label: "One Month",
                    },
                    {
                      value: "one year",
                      label: "One year",
                    },
                  ]}
                />
              </Form.Item>
              <Form.Item>
                <RangePicker
                  style={{
                    height: "50px",
                  }}
                />
              </Form.Item>
            </div>
          </Form>
          <div className="classListTable">
            <Table
              columns={columns}
              dataSource={data}
              scroll={{
                y: 350,
                // x: '100vw',
              }}
              style={{
                margin: "20px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalAttendance;
