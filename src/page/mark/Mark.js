import React from "react";
import "./Mark.css";
import {
  Button,
  Input,
  Divider,
  Tabs,
  Select,
  Space,
  Table,
  Drawer,
  Form,
  InputNumber,
} from "antd";
import { useMemo, useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import danimage from "../../assets/img/danimage.jpg";
import { DownCircleOutlined } from "@ant-design/icons";

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

//marksheet columan data starts here

//marksheet columan data ends here

//marksheet data starts here

const marks = [
  {
    key: "1",
    firstName: "Yonas",
    lastName: "Tamane",
    class: "1st",
    section: "A",
    total: 0,
    inputValues: [0, 0, 0, 0, 0, 0, 0],
  },
  {
    key: "2",
    firstName: "Anania",
    lastName: "Reta",
    class: "1st",
    section: "A",
    total: 0,
    inputValues: [0, 0, 0, 0, 0, 0, 0],
  },
  {
    key: "3",
    firstName: "Fatuma",
    lastName: "Fanta",
    class: "1st",
    section: "A",
    total: 0,
    inputValues: [0, 0, 0, 0, 0, 0, 0],
  },
  {
    key: "4",
    firstName: "Aye",
    lastName: "Amanuel",
    class: "1st",
    section: "B",
    total: 0,
    inputValues: [0, 0, 0, 0, 0, 0, 0],
  },
  {
    key: "5",
    firstName: "Mohammed",
    lastName: "Aman",
    class: "1st",
    section: "B",
    total: 0,
    inputValues: [0, 0, 0, 0, 0, 0, 0],
  },
  {
    key: "6",
    firstName: "Lati",
    lastName: "Dereje",
    class: "1st",
    section: "B",
    total: 0,
    inputValues: [0, 0, 0, 0, 0, 0, 0],
  },
  {
    key: "7",
    firstName: "Diriba",
    lastName: "Fayera",
    class: "2nd",
    section: "A",
    total: 0,

    inputValues: [0, 0, 0, 0, 0, 0, 0],
  },
  {
    key: "8",
    firstName: "Ababe",
    lastName: "Kebede",
    class: "2nd",
    section: "A",
    total: 0,
    inputValues: [0, 0, 0, 0, 0, 0, 0],
  },
  {
    key: "9",
    firstName: "Ababe11",
    lastName: "Kebede",
    class: "2nd",
    section: "A",
    total: 0,
    inputValues: [0, 0, 0, 0, 0, 0, 0],
  },
  {
    key: "10",
    firstName: "Ababe22",
    lastName: "Kebede",
    class: "3rd",
    section: "A",
    total: 0,
    inputValues: [0, 0, 0, 0, 0, 0, 0],
  },
  {
    key: "11",
    firstName: "Ababe33",
    lastName: "Kebede",
    class: "3rd",
    section: "A",
    total: 0,
    inputValues: [0, 0, 0, 0, 0, 0, 0],
  },
  {
    key: "12",
    firstName: "Ababe44",
    lastName: "Kebede",
    class: "3rd",
    section: "A",
    total: 0,
    inputValues: [0, 0, 0, 0, 0, 0, 0],
  },
  {
    key: "13",
    firstName: "Ababe55",
    lastName: "Kebede",
    class: "3rd",
    section: "B",
    total: 0,
    inputValues: [0, 0, 0, 0, 0, 0, 0],
  },
  {
    key: "14",
    firstName: "Ababe66",
    lastName: "Kebede",
    class: "3rd",
    section: "B",
    total: 0,
    inputValues: [0, 0, 0, 0, 0, 0, 0],
  },
  {
    key: "15",
    firstName: "Ababe77",
    lastName: "Kebede",
    class: "3rd",
    section: "B",
    total: 0,
    inputValues: [0, 0, 0, 0, 0, 0, 0],
  },
];
//marksheet data ends here

const data = [
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

// report card data end here

function Mark() {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("right");
  const showDrawer = () => {
    setOpen(true);
  };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };
  const onClose = () => {
    setOpen(false);
  };

  const [markItems, setMarkItems] = useState(marks);
  //   const [firstMark, setfirstMark] = useState(0)
  //   const [secondMark, setsecondMark] = useState(0)
  //   const [thirdMark, setthirdMark] = useState(0)
  //   const [fourthMark, setfourthMark] = useState(0)
  const [dataItems, setDataItems] = useState("");
  const onFinish = (values) => {
    const tempData = marks.filter((dataItem) => {
      return dataItem.section === values.section &&
        dataItem.class === values.class
        ? dataItem
        : "";
    });
    setDataItems(tempData);
  };
  //report card column data starts here

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

  //report card column data end here

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
              onClick={showDrawer}
            >
              View Details
            </Button>
            <div className="cardDrawer">
              <Drawer
                mask={false}
                placement={placement}
                width={"calc(100% - 250px)"}
                onClose={onClose}
                open={open}
                extra={
                  <Space>
                    <Button
                      onClick={onClose}
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
                      onClick={onClose}
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
    <div className="studentResult">
      <div className="studentTabs">
        <Tabs>
          <Tabs.TabPane tab="Mark Sheet" key="tab 1">
            <div className="detailTitle">
              <h2 className="feeClass">Student MarkSheet</h2>
            </div>
            <div className="editStudent">
              <br></br>
              <br />
              <div className="holder1">
                <div className="editStudentFormCont">
                  <Form onFinish={onFinish}>
                    {/* COLUMN ONE STARTS HERE */}

                    <div className="column1">
                      <div className="columnOneSelect selectPad ">
                        <p style={{ marginTop: "-9px", marginLeft: "40px" }}>
                          Class
                        </p>
                        <Form.Item
                          name="class"
                          rules={[
                            {
                              required: true,
                              message: "Please select student class",
                            },
                          ]}
                        >
                          <Select
                            suffixIcon={
                              <DownCircleOutlined
                                style={{
                                  fontSize: "25px",
                                  marginTop: "13px",
                                  color: "#38E54D",
                                }}
                              />
                            }
                            placeholder="Select Class"
                            style={{
                              width: "415px",
                              marginTop: "3px",
                              // padding:"0 20px 20px 20px",
                              lineHeight: "40px !important",
                            }}
                            onChange={handleChange}
                            options={[
                              {
                                value: "1st",
                                label: "Grade 1",
                              },
                              {
                                value: "2nd",
                                label: "Grade 2",
                              },
                              {
                                value: "3rd",
                                label: "Grade 3",
                              },
                              {
                                value: "4th",
                                label: "Grade 4",
                              },
                              {
                                value: "5th",
                                label: "Grade 5",
                              },
                            ]}
                          />
                        </Form.Item>
                      </div>
                    </div>

                    {/* COLUMN ONE ENDS HERE */}

                    {/* COLUMN TWO STARTS HERE */}
                    <div className="column2">
                      <div className="columnOneSelect selectPad">
                        <p
                          style={{
                            marginTop: "30px !important",
                            marginLeft: "50px",
                          }}
                        >
                          Section
                        </p>
                        <Form.Item
                          name="section"
                          rules={[
                            {
                              required: true,
                              message: "Please select section",
                            },
                          ]}
                        >
                          <Select
                            suffixIcon={
                              <DownCircleOutlined
                                style={{
                                  fontSize: "25px",
                                  marginTop: "13px",
                                  color: "#38E54D",
                                }}
                              />
                            }
                            showSearch
                            placeholder="Select Section"
                            style={{
                              width: "400px",
                              marginTop: "3px",
                              // padding:"0 20px 20px 20px",
                              lineHeight: "60px",
                              marginLeft: "20px",
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
                                label: "Section C",
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
                        </Form.Item>
                      </div>
                    </div>

                    {/* COLUMN TWO ENDS HERE */}

                    {/* COLUMN THREE STARTS HERE */}

                    <div className="column3">
                      <div className="editSubmitBtn">
                        <Button
                          type="primary"
                          htmlType="submit"
                          className="nextBtn btn"
                        >
                          SEARCH
                        </Button>
                        {/* <Button
                    type="primary"
                    htmlType="submit"
                    className="nextBtn btn"
                  >
                    SAVE
                  </Button> */}
                      </div>
                    </div>

                    {/* COLUMN THREE ENDS HERE */}
                  </Form>
                </div>
              </div>
              <br />
              <br />
              <br />
              <div className="studentDetailTable">
                <Table
                  pagination={true}
                  columns={[
                    {
                      title: "Name",
                      dataIndex: "name",
                      key: "name",

                      children: [
                        {
                          title: "FIrst Name",
                          dataIndex: "firstName",
                          width: "10%",
                        },
                        {
                          title: "Last Name",
                          dataIndex: "lastName",
                          width: "10%",
                        },
                      ],
                    },
                    {
                      title: <div className="assesmentTitle">ASSESSMENT</div>,
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
                                            record.inputValues.splice(
                                              0,
                                              1,
                                              value
                                            );
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
                                            record.inputValues.splice(
                                              1,
                                              1,
                                              value
                                            );
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
                                            record.inputValues.splice(
                                              2,
                                              1,
                                              value
                                            );
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
                                            record.inputValues.splice(3, 1, 0);
                                          } else {
                                            record.inputValues.splice(
                                              3,
                                              1,
                                              value
                                            );
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
                                            record.inputValues.splice(
                                              4,
                                              1,
                                              value
                                            );
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
                                            record.inputValues.splice(
                                              5,
                                              1,
                                              value
                                            );
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
                                            record.inputValues.splice(
                                              6,
                                              1,
                                              value
                                            );
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
                          <p>Total(100)</p>
                        </div>
                      ),

                      dataIndex: "total",
                      key: "total",
                      textAlign: "center",
                      width: "100px",
                      render: (value) => {
                        return <span>{value}%</span>;
                      },
                    },
                  ]}
                  dataSource={dataItems}
                  // summary={(data) => {
                  //   const total = data.reduce((pre, current) => {
                  //     return pre + current;
                  //   }, 0);
                  //   return <span>Total: {total}</span>;
                  // }}
                />
              </div>
            </div>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Student Result" key="tab 2">
            <div className="tabOneContainer">
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
                  dataSource={data}
                  scroll={{ y: 496 }}
                  rowClassName={() => "rowClassName1"}
                  bordered
                />
              </div>
            </div>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Tab 3" key="tab 3">
            <div>tab three</div>
          </Tabs.TabPane>
        </Tabs>
      </div>
    </div>
  );
}

export default Mark;
