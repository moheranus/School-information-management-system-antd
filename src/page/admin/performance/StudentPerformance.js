import React from "react";
import "./StudentPerformance.css";
import { Card, Col, Row, Select, Form, Table, Tag } from "antd";
import Chart from "react-apexcharts";
import ArcProgress from "react-arc-progress";
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const data = [
  {
    key: "0",
    sname: "Tesema Geleta",

    gender: "Male",
    grade: " Grade 1",
    avr: "78.9",
    rank: "12",
    attendance: "98%",
  },
  {
    key: "1",
    sname: "Tesema Jote",

    gender: "Male",
    grade: " Grade 1",
    avr: "80.9",
    rank: "8",
    attendance: "88%",
  },
  {
    key: "2",
    sname: "Robe Jalata",

    grade: "Grade 1",
    avr: "88.75",
    rank: "1",
    gender: "Female",
    attendance: "100%",
  },
  {
    key: "3",
    sname: "Daniel Shobe",

    gender: "Male",
    grade: "Grade 1",
    avr: "86.45",
    rank: "4",
    attendance: "92%",
  },
  {
    key: "3",
    sname: "Daniel Shobe",

    gender: "Male",
    grade: "Grade 1",
    avr: "86.45",
    rank: "4",
    attendance: "92%",
  },
  {
    key: "3",
    sname: "Daniel Shobe",

    gender: "Male",
    grade: "Grade 1",
    avr: "86.45",
    rank: "4",
    attendance: "92%",
  },
];
function StudentPerformance() {
  const progress = 1.0;
  // const customText = [
  //   { text: "78", size: "34px", color: "gray", x: 100, y: 94 },
  //   { text: "/100", size: "14px", color: "gray", x: 100, y: 122 },
  // ];
  const arcFillColor = [
    {
      gradient: ["rgb(111, 251, 166)", "rgb(3, 201, 222)", " rgb(3, 201, 222)"],
    },
    {
      gradient: ["rgb(23, 1, 136)", "rgb(3, 201, 136)", " rgb(3, 201, 136)"],
    },
    {
      gradient: ["rgb(53, 101, 136)", "rgb(3, 201, 136)", " rgb(3, 201, 136)"],
    },
    {
      gradient: ["rgb(83, 211, 136)", "rgb(3, 201, 136)", " rgb(3, 201, 136)"],
    },
  ];
  const columns = [
    {
      title: " Student Name",
      dataIndex: "sname",
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
      title: "Average Marks",
      dataIndex: "avr",
    },
    {
      title: "Rank",
      // key: "tags",
      dataIndex: "rank",
    },
    {
      title: "Attendance",
      dataIndex: "attendance",
    },
  ];
  return (
    <div className="performance">
      <div className="title">
        <div className="perfomTitle">
          <h2>Student Performance Dashboard</h2>
        </div>
      </div>
      <div className="action">
        <Form>
          <Row gutter={16}>
            <Col className="actionCards">
              <Card bordered={false}>
                <p>Select Year</p>
                <Form.Item>
                  <Select
                    defaultValue="All"
                    style={{
                      width: 240,
                    }}
                    onChange={handleChange}
                    options={[
                      {
                        value: "all",
                        label: "All",
                      },
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
              </Card>
            </Col>
            <Col className="actionCards">
              <Card bordered={false}>
                <p>Select Year</p>
                <Form.Item>
                  <Select
                    defaultValue="Grade 1"
                    style={{
                      width: 240,
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
              </Card>
            </Col>
            <Col className="actionCards">
              <Card bordered={false}>
                <div className="numb">
                  <h2>543</h2>
                </div>
                <div className="desc">
                  <h2>Students Count</h2>
                </div>
              </Card>
            </Col>
            <Col className="actionCards">
              <Card bordered={false}>
                <div className="numb">
                  <h2>543</h2>
                </div>
                <div className="desc">
                  <h2>Students Count</h2>
                </div>
              </Card>
            </Col>
          </Row>
        </Form>
      </div>
      <div className="barChart">
        <div className="barTitle">
          <p>Average Subject Score</p>
        </div>
        <div className="barCourse">
          <div className="barCourseList">
            <p>Art</p>
            <ArcProgress
              className="arch"
              thickness={20}
              fillColor={arcFillColor[0]}
              progress={progress}
              customText={[
                { text: "85.45", size: "34px", color: "gray", x: 100, y: 94 },
                { text: "/100", size: "14px", color: "gray", x: 100, y: 122 },
              ]}
              style={{ position: "relative" }}
              observer={(current) => {
                const { percentage, currentText } = current;
                console.log("observer:", percentage, currentText);
              }}
              animationEnd={({ progress, text }) => {
                console.log("animationEnd", progress, text);
              }}
            />
          </div>
          <div className="barCourseList">
            <p>Maths</p>
            <ArcProgress
              className="arch"
              thickness={20}
              fillColor={arcFillColor[1]}
              progress={progress}
              customText={[
                { text: "67.8", size: "34px", color: "gray", x: 100, y: 94 },
                { text: "/100", size: "14px", color: "gray", x: 100, y: 122 },
              ]}
              style={{ position: "relative" }}
              observer={(current) => {
                const { percentage, currentText } = current;
                console.log("observer:", percentage, currentText);
              }}
              animationEnd={({ progress, text }) => {
                console.log("animationEnd", progress, text);
              }}
            />
          </div>
          <div className="barCourseList">
            <p>English</p>
            <ArcProgress
              className="arch"
              thickness={20}
              fillColor={arcFillColor[2]}
              progress={progress}
              // customText={customText}
              customText={[
                { text: "70", size: "34px", color: "gray", x: 100, y: 94 },
                { text: "/100", size: "14px", color: "gray", x: 100, y: 122 },
              ]}
              style={{ position: "relative" }}
              observer={(current) => {
                const { percentage, currentText } = current;
                console.log("observer:", percentage, currentText);
              }}
              animationEnd={({ progress, text }) => {
                console.log("animationEnd", progress, text);
              }}
            />
          </div>
        </div>
      </div>
      <div className="gradeGender">
        <div className="donutChart">
          <h2 className="text-left">Student Count by Class</h2>
          <Chart
            type="donut"
            width={340}
            height={340}
            series={[45, 54, 34, 78, 43]}
            options={{
              labels: ["Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5"],
              title: {
                // text: "Student chart",
                // align:"center",
              },

              plotOptions: {
                pie: {
                  donut: {
                    render: (_, { tags }) => (
                      <>
                        {tags.map((tag) => {
                          let color = tag.length > 7 ? "green" : "volcano";
                          // if (tag === "failed") {
                          //   color = "volcano";
                          // }
                          return (
                            <Tag color={color} key={tag}>
                              {tag.toUpperCase()}
                            </Tag>
                          );
                        })}
                      </>
                    ),
                    labels: {
                      show: true,
                      total: {
                        show: true,
                        // showAlways: true,
                        //formatter: () => '343',
                        fontSize: 25,
                        color: "#f90000",
                      },
                    },
                  },
                },
              },

              dataLabels: {
                enabled: true,
              },
            }}
          />
        </div>
      </div>
      <div className="examResult">
        <div className="barchart">
          <h2 className="text-left">Examination Result By Subject</h2>
          <Chart
            type="bar"
            // width={340}
            height={200}
            series={[
              {
                name: "Pass",
                data: [88, 75, 97, 66, 61, 88, 73, 70],
              },
              {
                name: "Fail",
                data: [19, 25, 7, 26, 20, 18, 23, 10],
              },
              {
                name: "Not Attended",
                data: [9, 15, 17, 16, 10, 28, 13, 30],
              },
            ]}
            options={{
              labels: [
                "Maths",
                "English",
                "Amharic",
                "Science",
                "Oromic",
                "Arts",
                "Biology",
                "Chemistry",
                "Physics",
              ],
              title: {
                // text: "Student chart",
                // align:"center",
              },

              plotOptions: {
                pie: {
                  donut: {
                    labels: {
                      show: true,
                      total: {
                        show: true,
                        // showAlways: true,
                        //formatter: () => '343',
                        fontSize: 25,
                        color: "#f90000",
                      },
                    },
                  },
                },
              },

              dataLabels: {
                enabled: true,
              },
            }}
          />
        </div>
      </div>
      <div className="tables">
        <div className="performanceTable">
          <Table
            scroll={{
              y: 270,
            }}
            columns={columns}
            dataSource={data}
          />
        </div>
      </div>
    </div>
  );
}

export default StudentPerformance;
