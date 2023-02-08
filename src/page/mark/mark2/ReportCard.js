import {
  Form,
  Input,
  Select,
  Button,
  Table,
  InputNumber,
  Drawer,
  Space,
  Popover,
} from "antd";
import React, { useState } from "react";
import {
  SolutionOutlined,
  FormOutlined,
  FundViewOutlined,
} from "@ant-design/icons";
import "./ReportCard.css";
import { DownOutlined } from "@ant-design/icons";
import danimage from "../../../assets/img/danimage.jpg";

import { DownCircleOutlined } from "@ant-design/icons";
const { Option } = Select;
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
//popover content
const content = (
  <div>
    <p>View Mark Report</p>
  </div>
);
//
//marksheet data ends here

const datas = [
  {
    key: 0,
    fname: "Eliyas",
    lname: "Asefa",
    gender: "M",
    class: "1",
    section: "A",
    sum: "1130",

    ave: "95.75",
    rank: "1",
  },
  {
    key: 1,
    fname: "Mohammed",
    lname: "Aman",
    gender: "M",
    class: "1",
    section: "A",
    sum: "1100",

    ave: "93.75",
    rank: "2",
  },

  {
    key: 2,
    fname: "Daniel",
    lname: "Shobe",
    gender: "M",
    class: "1",
    section: "A",
    sum: "1097",

    ave: "90.1",
    rank: "3",
  },
  {
    key: 3,
    fname: "Hanna",
    lname: "Amanuel",
    gender: "F",
    class: "1",
    section: "A",
    sum: "1080",

    ave: "88.9",
    rank: "4",
  },
  {
    key: 4,
    fname: "Almaz",
    lname: "Fite",
    gender: "F",
    class: "1",
    section: "A",
    sum: "1070",

    ave: "88",
    rank: "5",
  },
  {
    key: 5,
    fname: "Tesfa",
    lname: "Aman",
    gender: "M",
    class: "1",
    section: "A",
    sum: "890",

    ave: "75",
    rank: "10",
  },
];

//report card data start

const reportCardData = [
  {
    key: 0,
    subject: "AFAN OROMO",
    first: "90",
    second: "92",
    ave: "91",
  },
  {
    key: 0,
    subject: "AMHARIC",
    first: "90",
    second: "92",
    ave: "91",
  },
  {
    key: 0,
    subject: "ENGLISH",
    first: "90",
    second: "92",
    ave: "91",
  },
  {
    key: 0,
    subject: "MATHEMATICS",
    first: "90",
    second: "92",
    ave: "91",
  },
  {
    key: 0,
    subject: "PHYSICS",
    first: "90",
    second: "92",
    ave: "91",
  },
  {
    key: 0,
    subject: "CHEMISTERY",
    first: "90",
    second: "92",
    ave: "91",
  },
  {
    key: 0,
    subject: "BIOLOGY",
    first: "90",
    second: "92",
    ave: "91",
  },
  {
    key: 0,
    subject: "BIOLOGY",
    first: "90",
    second: "92",
    ave: "91",
  },
  {
    key: 0,
    subject: "BIOLOGY",
    first: "90",
    second: "92",
    ave: "91",
  },
  {
    key: 0,
    subject: "BIOLOGY",
    first: "90",
    second: "92",
    ave: "91",
  },
  {
    key: 0,
    subject: "BIOLOGY",
    first: "90",
    second: "92",
    ave: "91",
  },
  {
    key: 0,
    subject: "BIOLOGY",
    first: "90",
    second: "92",
    ave: "91",
  },
];

const data = [
  {
    key: "1",
    fullname: "Yonas Tamane",

    class: "1st",
    section: "A",
    total: 0,
    inputValues: [0, 0, 0, 0, 0, 0, 0],
  },
  {
    key: "2",
    fullname: "Anania Reta",

    class: "1st",
    section: "A",
    total: 0,
    inputValues: [0, 0, 0, 0, 0, 0, 0],
  },
  {
    key: "3",
    fullname: "Fatuma Fanta",

    class: "1st",
    section: "A",
    total: 0,
    inputValues: [0, 0, 0, 0, 0, 0, 0],
  },
  {
    key: "4",
    fullname: "Aye Amanuel",

    class: "1st",
    section: "B",
    total: 0,
    inputValues: [0, 0, 0, 0, 0, 0, 0],
  },
  {
    key: "5",
    fullname: "Mohammed Aman",

    class: "1st",
    section: "B",
    total: 0,
    inputValues: [0, 0, 0, 0, 0, 0, 0],
  },
  {
    key: "6",
    fullname: "Lati Dereje",

    class: "1st",
    section: "B",
    total: 0,
    inputValues: [0, 0, 0, 0, 0, 0, 0],
  },
  {
    key: "7",
    fullname: "Diriba Fayera",

    class: "2nd",
    section: "A",
    total: 0,

    inputValues: [0, 0, 0, 0, 0, 0, 0],
  },
  {
    key: "8",
    fullname: "Ababe Kebede",

    class: "2nd",
    section: "A",
    total: 0,
    inputValues: [0, 0, 0, 0, 0, 0, 0],
  },
  {
    key: "9",
    fullname: "Ababe11 Kebede",

    class: "2nd",
    section: "A",
    total: 0,
    inputValues: [0, 0, 0, 0, 0, 0, 0],
  },
  {
    key: "10",
    fullname: "Ababe22 Kebede",

    class: "3rd",
    section: "A",
    total: 0,
    inputValues: [0, 0, 0, 0, 0, 0, 0],
  },
  {
    key: "11",
    fullname: "Ababe33 Kebede",

    class: "3rd",
    section: "A",
    total: 0,
    inputValues: [0, 0, 0, 0, 0, 0, 0],
  },
  {
    key: "12",
    fullname: "Ababe44",
    lastName: "Kebede",
    class: "3rd",
    section: "A",
    total: 0,
    inputValues: [0, 0, 0, 0, 0, 0, 0],
  },
  {
    key: "13",
    fullname: "Ababe55",
    lastName: "Kebede",
    class: "3rd",
    section: "B",
    total: 0,
    inputValues: [0, 0, 0, 0, 0, 0, 0],
  },
  {
    key: "14",
    fullname: "Ababe66",
    lastName: "Kebede",
    class: "3rd",
    section: "B",
    total: 0,
    inputValues: [0, 0, 0, 0, 0, 0, 0],
  },
  {
    key: "15",
    fullname: "Ababe77",
    lastName: "Kebede",
    class: "3rd",
    section: "B",
    total: 0,
    inputValues: [0, 0, 0, 0, 0, 0, 0],
  },
];
function ReportCard() {
  const [markItems, setMarkItems] = useState(data);
  const [markColor, setMarkColor] = useState("red");
  const [markDrawer, setMarkDrawer] = useState(false);
  const [reportCardDrawer, setReportCardDrawer] = useState(false);
  const showReportCard = () => {
    setReportCardDrawer(true);
  };
  const onCloseReportCard = () => {
    setReportCardDrawer(false);
  };
  const showMarkDrawer = () => {
    setMarkDrawer(true);
  };
  const onCloseMarkDrawer = () => {
    setMarkDrawer(false);
  };
  const reportCardColumns = [
    {
      title: "Subject",
      dataIndex: "subject",
    },
    {
      title: "Semister",
      dataIndex: "semister",

      children: [
        {
          title: " 1st Semister",
          dataIndex: "first",
        },
        {
          title: "2nd Semister",
          dataIndex: "second",
        },
        {
          title: "Average",
          dataIndex: "ave",
        },
      ],
    },
  ];
  const columns = [
    {
      title: "STUDENT INFORMATION",
      children: [
        {
          title: "First Name",
          dataIndex: "fname",
          width: "20%",
        },
        {
          title: "Last Name",
          dataIndex: "lname",
          width: "20%",
        },
        {
          title: "Gender",
          dataIndex: "gender",
          width: 100,
        },
      ],
    },
    {
      title: "ClASS INFO",
      children: [
        {
          title: "Class",
          dataIndex: "class",
          width: 100,
        },
        {
          title: "Section",
          dataIndex: "section",
          width: 100,
        },
      ],
    },
    {
      title: "MARK REPORT",
      dataIndex: "mark",

      children: [
        {
          title: "SUM",
          dataIndex: "sum",
        },
        {
          title: "AVE",
          dataIndex: "ave",
        },
        {
          title: "Rank",
          dataIndex: "rank",
        },
      ],
    },
    {
      title: "ACTION",
      width: "15%",
      render: () => {
        return (
          <>
            <Button
              type="primary"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "18px 60px",
                backgroundColor: "#2155CD",

                fontFamily: "'Ubuntu', sans-serif",
                fontWeight: "700",
              }}
              onClick={showReportCard}
            >
              View Details
            </Button>
            <div className="cardDrawer">
              <Drawer
                mask={false}
                // placement={placement}
                width={"calc(100% - 250px)"}
                onClose={onCloseReportCard}
                open={reportCardDrawer}
                extra={
                  <Space>
                    <Button
                      onClick={showReportCard}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontWeight: "900",
                      }}
                    >
                      CLOSE
                    </Button>
                    <Button
                      type="primary"
                      onClick={onCloseReportCard}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontWeight: "900",
                      }}
                    >
                      PRINT
                    </Button>
                  </Space>
                }
              >
                <div className="drawCont">
                  <div className="transcriptTenth">
                    <div className="transcriptLeft">
                      <br />
                      <div className="studentPhoto">
                        <img src={danimage} alt="student" />
                      </div>
                      <div className="studentInfo">
                        <div className="heading">
                          <p>STUDENT INFORMATION</p>
                        </div>
                        <div className="infoList">
                          <div className="infoType">
                            <p>Full Name:</p>
                            <p>Gender:</p>
                            <p>Age:</p>
                            <p>Grade:</p>
                            <p>Section:</p>
                            <p>Year:</p>
                          </div>
                          <div className="infoName">
                            <p>Daniel Shobe</p>
                            <p>Male</p>
                            <p>17</p>
                            <p>9th</p>
                            <p>B</p>
                            <p>2009.EC</p>
                          </div>
                        </div>
                      </div>
                      <div className="studentInfo">
                        <div className="heading">
                          <p>STUDENT REPORT</p>
                        </div>
                        <div className="infoList">
                          <div className="infoType">
                            <p>SUM:</p>
                            <p>AVE:</p>
                            <p>RANK:</p>
                            <p>CONDUCT:</p>
                          </div>
                          <div className="infoName">
                            <p>1097</p>
                            <p>89.9</p>
                            <p>2</p>
                            <p>A</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="transcriptRight">
                      <div className="reportHeader">
                        <div className="headerTitle">
                          <p>STUDENT REPORT CARD</p>
                        </div>
                      </div>
                      <div className="reportHeaderName">
                        <div className="schoolName">
                          <p>ABC HIGH SCHOOL</p>
                        </div>
                      </div>
                      <div className="cardTable">
                        <Table
                          columns={reportCardColumns}
                          dataSource={reportCardData}
                          scroll={{ y: 500 }}
                          rowClassName={() => "rowClassName1"}
                          bordered
                        />
                        ,
                      </div>
                    </div>
                  </div>
                </div>
              </Drawer>
            </div>
          </>
        );
      },
    },
  ];
  return (
    <>
      <div className="markContainer">
        <div className="markAction">
          <div className="markTitle">
            <h2>Student MarkSheet</h2>
          </div>
          <div className="action">
            <div className="input">
              <p
                style={{
                  marginBottom: "10px",
                }}
              >
                Teachers Name<span>*</span>
              </p>

              <Form.Item>
                <Input placeholder="daniel shobe" />
              </Form.Item>
            </div>
            <div>
              <p>
                Session <span>*</span>
              </p>
              <Select
                defaultValue="2014-2015"
                // style={{
                //   width: 320,
                // }}
                onChange={handleChange}
                options={[
                  {
                    value: "2014-2015",
                    label: "2014-2015",
                  },
                  {
                    value: "2015-2016",
                    label: "2015-2016",
                  },
                  {
                    value: "2016-2017",
                    label: "2017-2018",
                  },
                ]}
              />
            </div>
            <div>
              <p>
                Select Grade <span>*</span>
              </p>
              <Select
                defaultValue="Grade 1"
                // style={{
                //   width: 320,
                // }}
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
                ]}
              />
            </div>
            <div>
              <p>
                Select Section<span>*</span>
              </p>
              <Select
                defaultValue="A"
                // style={{
                //   width: 320,
                // }}
                onChange={handleChange}
                options={[
                  {
                    value: "section A",
                    label: "Section A",
                  },
                  {
                    value: "section B",
                    label: "Section B",
                  },
                  {
                    value: "section C",
                    label: "Section C",
                  },
                ]}
              />
            </div>
            <div>
              <p>
                Select Course<span>*</span>
              </p>
              <Select
                defaultValue="Mathematics"
                // style={{
                //   width: 320,
                // }}
                onChange={handleChange}
                options={[
                  {
                    value: "mathematics",
                    label: "Mathematics",
                  },
                  {
                    value: "english",
                    label: "English",
                  },
                  {
                    value: "science",
                    label: "Science",
                  },
                ]}
              />
            </div>
            <Button
              type="primary"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "25px 40px",
                fontSize: "25px",
                background: "#03C988",
                marginTop: "20px",
              }}
            >
              Search
            </Button>
          </div>
        </div>
        <div className="markNav">
          <ul className="listCont">
            <li>
              <span className="icon">
                <FormOutlined />
              </span>
            </li>
            <li>
              <Popover content={content} placement="left">
                <span className="icon icon2" onClick={showMarkDrawer}>
                  <FundViewOutlined />
                </span>
              </Popover>
            </li>
            <li>
              <span className="icon">
                <SolutionOutlined />
              </span>
            </li>
          </ul>
        </div>
        <div className="markTable">
          <Table
            scroll={{
              y: 400,
            }}
            dataSource={data}
            columns={[
              {
                title: " Full Name",
                dataIndex: "fullname",
                key: "name",
                width: "15%",

                // children: [
                //   {
                //     title: "FIrst Name",
                //     dataIndex: "firstName",
                //     width: "10%",
                //   },
                //   {
                //     title: "Last Name",
                //     dataIndex: "lastName",
                //     width: "10%",
                //   },
                // ],
              },
              {
                title: <div className="assesmentTitles">ASSESSMENT</div>,
                dataIndex: "marks",
                key: "marks",
                children: [
                  {
                    title: (
                      <div className="continuousAssesment">
                        <span>CA(5)</span>
                        <span>CA(5)</span>
                        <span>CA(10)</span>
                        <span>CA(10)</span>
                        <span>CA(10)</span>
                        <span>CA(10)</span>
                        <span>Final Exam</span>
                      </div>
                    ),
                    render: (value, record) => {
                      let values = [0, 0, 0, 0];
                      return (
                        <div className="markInput">
                          <InputNumber
                            className="markInput"
                            min={0}
                            max={5}
                            defaultValue={value}
                            onChange={(value) => {
                              setMarkItems((pre) =>
                                pre.map((mark) => {
                                  if (record.key === mark.key) {
                                    if (value === null) {
                                      record.inputValues.splice(0, 1, 0);
                                    } else {
                                      record.inputValues.splice(0, 1, value);
                                    }

                                    mark.total =
                                      record.inputValues[0] +
                                      record.inputValues[1] +
                                      record.inputValues[2] +
                                      record.inputValues[3] +
                                      record.inputValues[4] +
                                      record.inputValues[5] +
                                      record.inputValues[6];
                                  }
                                  if (mark.total > 50) {
                                    setMarkColor("green");
                                  }
                                  return mark;
                                })
                              );
                            }}
                          />
                          <InputNumber
                            className="markInput"
                            min={0}
                            max={5}
                            defaultValue={value}
                            onChange={(value) => {
                              values.splice(1, 1, value);
                              setMarkItems((pre) =>
                                pre.map((mark) => {
                                  if (record.key === mark.key) {
                                    if (value === null) {
                                      record.inputValues.splice(1, 1, 0);
                                    } else {
                                      record.inputValues.splice(1, 1, value);
                                    }
                                    mark.total =
                                      record.inputValues[0] +
                                      record.inputValues[1] +
                                      record.inputValues[2] +
                                      record.inputValues[3] +
                                      record.inputValues[4] +
                                      record.inputValues[5] +
                                      record.inputValues[6];
                                  }
                                  return mark;
                                })
                              );
                            }}
                          />
                          <InputNumber
                            className="markInput"
                            min={0}
                            max={10}
                            defaultValue={value}
                            onChange={(value) => {
                              values.splice(2, 1, value);
                              setMarkItems((pre) =>
                                pre.map((mark) => {
                                  if (record.key === mark.key) {
                                    if (value === null) {
                                      record.inputValues.splice(2, 1, 0);
                                    } else {
                                      record.inputValues.splice(2, 1, value);
                                    }
                                    mark.total =
                                      record.inputValues[0] +
                                      record.inputValues[1] +
                                      record.inputValues[2] +
                                      record.inputValues[3] +
                                      record.inputValues[4] +
                                      record.inputValues[5] +
                                      record.inputValues[6];
                                  }
                                  if (mark.total > 50) {
                                    setMarkColor("green");
                                  }
                                  return mark;
                                })
                              );
                            }}
                          />
                          <InputNumber
                            className="markInput"
                            min={0}
                            max={10}
                            defaultValue={value}
                            onChange={(value) => {
                              values.splice(3, 1, value);
                              setMarkItems((pre) =>
                                pre.map((mark) => {
                                  if (record.key === mark.key) {
                                    if (value === null) {
                                      record.inputValues.splice(3, 1, 0);
                                    } else {
                                      record.inputValues.splice(3, 1, value);
                                    }
                                    mark.total =
                                      record.inputValues[0] +
                                      record.inputValues[1] +
                                      record.inputValues[2] +
                                      record.inputValues[3] +
                                      record.inputValues[4] +
                                      record.inputValues[5] +
                                      record.inputValues[6];
                                  }
                                  return mark;
                                })
                              );
                            }}
                          />
                          <InputNumber
                            className="markInput"
                            min={0}
                            max={10}
                            defaultValue={value}
                            onChange={(value) => {
                              values.splice(3, 1, value);
                              setMarkItems((pre) =>
                                pre.map((mark) => {
                                  if (record.key === mark.key) {
                                    if (value === null) {
                                      record.inputValues.splice(4, 1, 0);
                                    } else {
                                      record.inputValues.splice(4, 1, value);
                                    }
                                    mark.total =
                                      record.inputValues[0] +
                                      record.inputValues[1] +
                                      record.inputValues[2] +
                                      record.inputValues[3] +
                                      record.inputValues[4] +
                                      record.inputValues[5] +
                                      record.inputValues[6];
                                  }
                                  return mark;
                                })
                              );
                            }}
                          />
                          <InputNumber
                            className="markInput"
                            min={0}
                            max={10}
                            defaultValue={value}
                            onChange={(value) => {
                              values.splice(3, 1, value);
                              setMarkItems((pre) =>
                                pre.map((mark) => {
                                  if (record.key === mark.key) {
                                    if (value === null) {
                                      record.inputValues.splice(5, 1, 0);
                                    } else {
                                      record.inputValues.splice(5, 1, value);
                                    }
                                    mark.total =
                                      record.inputValues[0] +
                                      record.inputValues[1] +
                                      record.inputValues[2] +
                                      record.inputValues[3] +
                                      record.inputValues[4] +
                                      record.inputValues[5] +
                                      record.inputValues[6];
                                  }
                                  return mark;
                                })
                              );
                            }}
                          />
                          <InputNumber
                            className="markInput"
                            min={0}
                            max={50}
                            defaultValue={value}
                            onChange={(value) => {
                              values.splice(3, 1, value);
                              setMarkItems((pre) =>
                                pre.map((mark) => {
                                  if (record.key === mark.key) {
                                    if (value === null) {
                                      record.inputValues.splice(6, 1, 0);
                                    } else {
                                      record.inputValues.splice(6, 1, value);
                                    }
                                    mark.total =
                                      record.inputValues[0] +
                                      record.inputValues[1] +
                                      record.inputValues[2] +
                                      record.inputValues[3] +
                                      record.inputValues[4] +
                                      record.inputValues[5] +
                                      record.inputValues[6];
                                  }

                                  return mark;
                                })
                              );
                            }}
                          />
                        </div>
                      );
                    },
                  },
                ],
              },
              {
                title: (
                  <div className="totalMark">
                    <p>Total</p>
                  </div>
                ),

                dataIndex: "total",
                key: "total",
                textAlign: "center",
                width: "100px",
                render: (value) => {
                  return (
                    <span
                      style={{
                        color: markColor,
                      }}
                      className="totalColor"
                    >
                      {value}%
                    </span>
                  );
                },
              },
              {
                title: (
                  <Button
                    type="primary"
                    style={{
                      marginLeft: "-20px",
                      background: "rgb(3, 201, 136)",
                    }}
                  >
                    Submit
                  </Button>
                ),
                width: "5%",
              },
            ]}
          />
        </div>
        <Drawer
          title="Student markReport"
          placement="right"
          width={"calc(100% - 200px)"}
          onClose={onCloseMarkDrawer}
          open={markDrawer}
          className="cashbank"
        >
          <div className="studentResultAction">
            <div className="actionCont">
              <Space wrap>
                <Select
                  suffixIcon={
                    <DownOutlined
                      style={{
                        marginTop: "10px",
                        fontSize: "22px",
                        color: "#0002A1",
                      }}
                      onChange={handleChange}
                    />
                  }
                  defaultValue="Class 1"
                  style={{
                    width: 220,
                  }}
                  onChange={handleChange}
                  options={[
                    {
                      value: "1st",
                      label: "Class 1",
                    },
                    {
                      value: "2nd",
                      label: "Class 2",
                    },
                    {
                      value: "3rd",
                      label: "Class 3",
                    },
                    {
                      value: "4th",
                      label: "Class 4",
                    },
                    {
                      value: "5th",
                      label: "Class 5",
                    },
                  ]}
                />
              </Space>
              <Space
                wrap
                style={{
                  marginLeft: "30px",
                }}
              >
                <Select
                  suffixIcon={
                    <DownOutlined
                      style={{
                        marginTop: "10px",
                        fontSize: "22px",
                        color: "#0002A1",
                      }}
                      onChange={handleChange}
                    />
                  }
                  defaultValue=" Section A"
                  style={{
                    width: 220,
                  }}
                  onChange={handleChange}
                  options={[
                    {
                      value: "A",
                      label: "Section A",
                    },
                    {
                      value: "B",
                      label: "Section B",
                    },
                    {
                      value: "C",
                      label: " Section C",
                    },
                    {
                      value: "D",
                      label: "Section D",
                    },
                    {
                      value: "E",
                      label: "Section E",
                    },
                  ]}
                />
              </Space>
            </div>
          </div>
          <div className="studentResultTable">
            <Table
              columns={columns}
              dataSource={datas}
              scroll={{ y: 496 }}
              rowClassName={() => "rowClassName1"}
              bordered
            />
          </div>
        </Drawer>
      </div>
    </>
  );
}

export default ReportCard;
