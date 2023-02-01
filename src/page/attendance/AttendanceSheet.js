import { useState, useEffect, useRef } from "react";
import "./AttendanceSheet.css";
import { Link } from "react-router-dom";
import { Table, Tabs, Button, Form, Input, Radio, Select } from "antd";
import { DownCircleOutlined } from "@ant-design/icons";

// const ReportData = [
//   {
//     number: "1",
//     fname: "Daniel",
//     lname: "Shobe",
//     gender: "M",
//     class: "3rd",
//     section: "A",
//     present: "2",
//     morninglate: "3",
//     afternoonlate: "1",
//     absentmorning: "2",
//     afternoonabsent: "1",
//   },
//   {
//     number: "2",
//     fname: "Eliyas",
//     lname: "Asefa",
//     gender: "M",
//     class: "3rd",
//     section: "A",
//   },
//   {
//     number: "3",
//     fname: "Mohammed",
//     lname: "Aman",
//     gender: "M",
//     class: "3rd",
//     section: "B",
//   },
// ];

const data = [
  {
    number: "1",
    fname: "Daniel",
    lname: "Shobe",
    gender: "M",
    class: "3rd",
    section: "A",
    pre: 4,
    lm: 0,
    la: 1,
    aa: 2,
    am: 3,
    per: 1,
  },
  {
    number: "2",
    fname: "Eliyas",
    lname: "Asefa",
    gender: "M",
    class: "3rd",
    section: "A",
    pre: 4,
    lm: 0,
    la: 1,
    aa: 2,
    am: 3,
    per: 1,
  },
  {
    number: "3",
    fname: "Mohammed",
    lname: "Aman",
    gender: "M",
    class: "3rd",
    section: "A",
    pre: 4,
    lm: 0,
    la: 1,
    aa: 2,
    am: 3,
    per: 1,
  },
  {
    number: "1",
    fname: "Reta",
    lname: "Alemu",
    gender: "M",
    class: "1st",
    section: "A",
    pre: 4,
    lm: 0,
    la: 1,
    aa: 2,
    am: 3,
    per: 1,
  },
  {
    number: "2",
    fname: "Gemeda",
    lname: "Alemu",
    gender: "M",
    class: "1st",
    section: "A",
    pre: 4,
    lm: 0,
    la: 1,
    aa: 2,
    am: 3,
    per: 1,
  },
  {
    number: "3",
    fname: "Tadde",
    lname: "Jata",
    gender: "M",
    class: "1st",
    section: "A",
    pre: 4,
    lm: 0,
    la: 1,
    aa: 2,
    am: 3,
    per: 1,
  },
  {
    number: "1",
    fname: "Fatuma",
    lname: "Roba",
    gender: "F",
    class: "1st",
    section: "B",
    pre: 4,
    lm: 0,
    la: 1,
    aa: 2,
    am: 3,
    per: 1,
  },
  {
    number: "2",
    fname: "Robe",
    lname: "Wakasa",
    gender: "F",
    class: "1st",
    section: "B",
    pre: 4,
    lm: 0,
    la: 1,
    aa: 2,
    am: 3,
    per: 1,
  },
  {
    number: "3",
    fname: "John",
    lname: "Doe",
    gender: "M",
    class: "1st",
    section: "B",
    pre: 4,
    lm: 0,
    la: 1,
    aa: 2,
    am: 3,
    per: 1,
  },
  {
    number: "1",
    fname: "Matiwak",
    lname: "Doe",
    gender: "M",
    class: "2nd",
    section: "A",
    pre: 4,
    lm: 0,
    la: 1,
    aa: 2,
    am: 3,
    per: 1,
  },
  {
    number: "2",
    fname: "Derese",
    lname: "Kebede",
    gender: "M",
    class: "2nd",
    section: "A",
    pre: 4,
    lm: 0,
    la: 1,
    aa: 2,
    am: 3,
    per: 1,
  },
  {
    number: "3",
    fname: "Abebe",
    lname: "Adana",
    gender: "M",
    class: "2nd",
    section: "A",
    pre: 4,
    lm: 0,
    la: 1,
    aa: 2,
    am: 3,
    per: 1,
  },
];

const submitHead = ({ record, dataIndex, ...restProps }) => {
  console.log(record);
  return (
    <thead {...restProps}>
      <Button>Submit Button</Button>
    </thead>
  );
};
function AttendanceSheet() {
  const [searchedText, setSearchedText] = useState("");
  const [dataItems, setDataItems] = useState("");
  const [preData, setPreData] = useState(data.pre);
  const [lAData, setLAData] = useState(data.la);
  const [lMData, setLMData] = useState(data.lm);
  const [aMData, setAMData] = useState(data.am);
  const [aAData, setAAData] = useState(data.aa);
  const [perData, setPerData] = useState(data.per);
  const [tempAttData, setTempAttData] = useState(data);
  const [state, setState] = useState("");
  const [rowData, setRowData] = useState("");
  const onFinish = (values) => {
    const tempData = data.filter((dataItem) => {
      return dataItem.section === values.section &&
        dataItem.class === values.class
        ? dataItem
        : "";
    });
    setDataItems(tempData);
  };

  //radio button value
  const [radioValue, setRadioValue] = useState(1);
  const radioChange = (e) => {
    setRadioValue(() => {
      return e.target.value;
    });
  };

  const onRowClick = (record) => {
    setRowData(() => {
      return record;
    });
    // console.log(record);
  };
  const onAttendanceSubmit = () => {
    let pre, lm, la, aa, am, per;
    console.log("hello");
    const radioVal = radioValue;
    for (let i = 0; i < data.length; i++) {
      if (
        data[i].number === rowData.number &&
        data[i].class === rowData.class &&
        data[i].section === rowData.section
      ) {
        const count = data[i].pre++;
        console.log(count);
        data.splice(i, 1, {
          number: rowData.number,
          fname: rowData.fname,
          lname: rowData.lname,
          gender: rowData.gender,
          class: rowData.class,
          section: rowData.section,
          pre: count,
          lm: 0,
          la: 1,
          aa: 2,
          am: 3,
          per: 1,
        });
      } else {
        const prevData = data[i];
        const count = data[i].pre + 1;
        console.log(count);
        data.splice(i, 1, {
          number: prevData.number,
          fname: prevData.fname,
          lname: prevData.lname,
          gender: prevData.gender,
          class: prevData.class,
          section: prevData.section,
          pre: count,
          lm: 0,
          la: 1,
          aa: 2,
          am: 3,
          per: 1,
        });
      }
    }

    setDataItems(data);
  };

  const columns = [
    {
      title: "Roll_no",
      dataIndex: "number",
      width: "6%",
    },
    {
      title: "First Name",
      dataIndex: "fname",
      width: "10%",
    },
    {
      title: "Last Name",
      dataIndex: "lname",
      width: "10%",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      width: "5%",
    },

    {
      title: "Attendance",
      dataIndex: "key",
      width: "50%",

      render: (_, record) => {
        return (
          <>
            <Radio.Group
              name="radiogroup"
              defaultValue="pre"
              onChange={radioChange}
            >
              <Radio value={"pre"}>Present</Radio>
              <Radio value={"lm"}>Late Morning</Radio>
              <Radio value={"la"}>Late Afternoon</Radio>
              <Radio value={"am"}>Absent Morning</Radio>
              <Radio value={"aa"}>Absent Afternoon</Radio>
              <Radio value={"per"}>Permission</Radio>
            </Radio.Group>
          </>
        );
      },
    },
    {
      title: (
        <div>
          <Button
            onClick={onAttendanceSubmit}
            style={{
              padding: "20px 30px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgb(56, 229, 77)",
              color: "#fff",
              fontSize: "17px",
              fontFamily: "ubuntu",
              fontWeight: "600",
            }}
          >
            SUBMIT
          </Button>
        </div>
      ),
      width: "10%",
      fixed: "right",
      render: (_, record) => {
        return (
          <>
            <div className="attendanceAction">
              <Button
                style={{
                  padding: "10px 10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#277BC0",
                  color: "#fff",
                  fontSize: "14px",

                  fontFamily: "ubuntu",
                  fontWeight: "600",
                }}
              >
                <Link exact to="/personalattendance">
                  View
                </Link>
              </Button>
              {/* <Button
                style={{
                  marginLeft: "10px",
                  padding: "20px 20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "rgb(56, 229, 77)",
                  color: "#fff",
                  fontSize: "19px",
                }}
              >
                SUBMIT
              </Button> */}
            </div>
          </>
        );
      },
    },
  ];
  //global table search

  // const [searchedText, setSearchedText] = useState("");
  const ReportColumns = [
    {
      title: "Roll_no",
      dataIndex: "number",
      width: 70,
    },
    {
      title: "First Name",
      dataIndex: "fname",
      filteredValue: [searchedText],
      onFilter: (value, record) => {
        return String(record.fname).toLowerCase().includes(value.toLowerCase());
      },
    },
    {
      title: "Last Name",
      dataIndex: "lname",
    },
    {
      title: "Attendance Reports",
      dataIndex: "attendancereport",
      children: [
        {
          title: "Present",
          dataIndex: "pre",
        },
        {
          title: "Late Morning ",
          dataIndex: "lm",
        },
        {
          title: "Late Afternoon ",
          dataIndex: "la",
        },
        {
          title: "Absent Morning",
          dataIndex: "am",
        },
        {
          title: "Absent Afternoon",
          dataIndex: "aa",
        },
        {
          title: "Permission",
          dataIndex: "per",
        },
      ],
    },
    {
      title: "Action",
      render: (_, record) => {
        return (
          <>
            <div className="attendanceAction">
              <Button
                style={{
                  padding: "10px 10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#277BC0",
                  color: "#fff",
                  fontSize: "14px",

                  fontFamily: "ubuntu",
                  fontWeight: "600",
                }}
              >
                <Link exact to="/personalattendance">
                  View
                </Link>
              </Button>
            </div>
          </>
        );
      },
    },
  ];

  return (
    <>
      <div className="anttendanceTab">
        <Tabs defaultActiveKey="tab1">
          <Tabs.TabPane tab="Attendance Sheet" key="profile">
            <div className="attendanceSheet">
              <div class="attendanceHeader">
                <div className="holder2">
                  <div className="editStudentFormCont">
                    <Form onFinish={onFinish}>
                      {/* COLUMN ONE STARTS HERE */}

                      <div className="column1">
                        <div className="columnOneSelect">
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
                              showSearch
                              placeholder="Select Class"
                              style={{
                                width: "415px",
                                marginTop: "3px",
                                // padding:"0 20px 20px 20px",
                                lineHeight: "40px !important",
                              }}
                              //   onChange={handleChange}
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
                        <div className="columnOneSelect">
                          <p style={{ marginTop: "-9px", marginLeft: "50px" }}>
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
                              //   onChange={handleChange}
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
                            style={{
                              backgroundColor: "#0096FF",
                              fontFamily: "ubuntu",
                              fontWeight: "600",
                            }}
                          >
                            SEARCH
                          </Button>
                        </div>
                      </div>

                      {/* COLUMN THREE ENDS HERE */}
                    </Form>
                  </div>
                </div>
              </div>
              <div class="attendanceTableCont">
                <div className="classListTable">
                  <Table
                    // components={{
                    //   body: {
                    //     cell: submitHead,
                    //   },
                    // }}
                    onRow={(record, index) => {
                      return {
                        onClick: (event) => {
                          onRowClick(record);
                        },
                      };
                    }}
                    columns={columns}
                    dataSource={dataItems}
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
          </Tabs.TabPane>
          {/* SECOND TAB HERE */}
          <Tabs.TabPane tab="Attendance report" key="fees">
            <div className="attendReportCont">
              {" "}
              <div className="classListSearch">
                <Input.Search
                  placeholder="Search by keywoord..."
                  style={{
                    marginLeft: "20px",
                    width: "30%",
                    marginBottom: "10px",
                  }}
                  onSearch={(value) => {
                    setSearchedText(value);
                  }}
                  onchange={(e) => {
                    setSearchedText(e.target.value);
                  }}
                />
              </div>
              <div className="attendanceReport">
                <Table
                  columns={ReportColumns}
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
          </Tabs.TabPane>
        </Tabs>
      </div>
    </>
  );
}

export default AttendanceSheet;
