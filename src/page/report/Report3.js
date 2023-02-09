import React from "react";
import "./Report3.css";
import { Card, Col, Row, Select, Form, Table, Tag } from "antd";
import Chart from "react-apexcharts";

const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const data = [
  {
    key: "0",
    fname: "Tesema ",
    lname: "Geleta",
    gender: "Male",
    grade: " Grade 1",
    section: "A",
  },
  {
    key: "1",
    fname: "Tesema ",
    lname: "Jote",
    gender: "Male",
    grade: " Grade 1",
    section: "A",
  },
  {
    key: "2",
    fname: "Robe Jalata",
    lname: "Jalata",
    gender: "Female",
    grade: "Grade 1",
    section: "A",
  },
  {
    key: "3",
    fname: "Daniel",
    lname: "Shobe",
    gender: "Male",
    grade: "Grade 1",
    section: "A",
  },
  {
    key: "3",
    fname: "Daniel",
    lname: "Shobe",

    gender: "Male",
    grade: "Grade 1",
    section: "A",
  },
  {
    key: "3",
    fname: "Daniel",
    lname: "Shobe",
    gender: "Male",
    grade: "Grade 1",
    section: "A",
  },
  {
    key: "3",
    fname: "Daniel",
    lname: "Shobe",
    gender: "Male",
    grade: "Grade 1",
    section: "A",
  },
  {
    key: "3",
    fname: "Daniel",
    lname: "Shobe",
    gender: "Male",
    grade: "Grade 1",
    section: "A",
  },
  {
    key: "3",
    fname: "Daniel",
    lname: "Shobe",
    gender: "Male",
    grade: "Grade 1",
    section: "A",
  },
  {
    key: "3",
    fname: "Daniel",
    lname: "Shobe",
    gender: "Male",
    grade: "Grade 1",
    section: "A",
  },
];
function Report3() {
  const columns = [
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
  ];
  return (
    <div className="performances">
      <div className="titles">
        <div className="perfomTitles">
          <h2>Student Gender Ratio Report</h2>
        </div>
      </div>
      <div className="actions">
        <Form>
          <Row gutter={16}>
            <Col className="actionReportCards">
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
            <Col className="actionReportCards">
              <Card bordered={false}>
                <p>Select Grade</p>
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
            <Col className="actionReportCards">
              <Card bordered={false}>
                <p>Select Section</p>
                <Form.Item>
                  <Select
                    defaultValue="Section A"
                    style={{
                      width: 240,
                    }}
                    onChange={handleChange}
                    options={[
                      {
                        value: "Section A",
                        label: "Section A",
                      },
                      {
                        value: "Section B",
                        label: "Section B",
                      },
                      {
                        value: "Section C",
                        label: "Section C",
                      },
                      {
                        value: "Section D",
                        label: "Section D",
                      },
                      {
                        value: "Section E",
                        label: "Section E",
                      },
                    ]}
                  />
                </Form.Item>
              </Card>
            </Col>
            <Col className="actionReportCards">
              <Card bordered={false}>
                <p>Select Gender</p>
                <Form.Item>
                  <Select
                    defaultValue="Female"
                    style={{
                      width: 240,
                    }}
                    onChange={handleChange}
                    options={[
                      {
                        value: "Female",
                        label: "Female",
                      },
                      {
                        value: "Male",
                        label: "Male",
                      },
                    ]}
                  />
                </Form.Item>
              </Card>
            </Col>
          </Row>
        </Form>
      </div>
      <div className="barCharts">
        <div className="barTitles">
          <div className="barcards">
            <Card bordered={false}>
              <div className="result">
                <div className="total">
                  <div className="numb">
                    <h2>543</h2>
                  </div>
                  <div className="desc">
                    <h2> Total </h2>
                  </div>
                </div>

                <div className="male">
                  <div className="numb">
                    <h2>543</h2>
                  </div>
                  <div className="desc">
                    <h2>Male </h2>
                  </div>
                </div>
                <div className="female">
                  <div className="numb">
                    <h2>543</h2>
                  </div>
                  <div className="desc">
                    <h2>Female</h2>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
        <div className="barCourse">
          <div className="barCourseList">
            <p>Grade 1</p>
            <div className="donutCharts">
              {/* <h2 className="text-left">Student Count by Class</h2> */}
              <Chart
                type="donut"
                width={320}
                height={270}
                series={[85, 94]}
                options={{
                  labels: ["Male", "Female"],
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
          <div className="barCourseList">
            <p>Grade 2</p>
            <div className="donutCharts">
              {/* <h2 className="text-left">Student Count by Class</h2> */}
              <Chart
                type="donut"
                width={320}
                height={270}
                series={[95, 54]}
                options={{
                  labels: ["Male", "Female"],
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
          <div className="barCourseList">
            <p>Grade 3</p>
            <div className="donutCharts">
              {/* <h2 className="text-left">Student Count by Class</h2> */}
              <Chart
                type="donut"
                width={320}
                height={270}
                series={[45, 54]}
                options={{
                  labels: ["Male", "Female"],
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
          <div className="barCourseList">
            <p>Grade 4</p>
            <div className="donutCharts">
              {/* <h2 className="text-left">Student Count by Class</h2> */}
              <Chart
                type="donut"
                width={320}
                height={270}
                series={[45, 54]}
                options={{
                  labels: ["Male", "Female"],
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
          <div className="barCourseList">
            <p>Grade 5</p>
            <div className="donutCharts">
              {/* <h2 className="text-left">Student Count by Class</h2> */}
              <Chart
                type="donut"
                width={320}
                height={270}
                series={[45, 54]}
                options={{
                  labels: ["Male", "Female"],
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
          <div className="barCourseList">
            <p>Grade 6</p>
            <div className="donutCharts">
              {/* <h2 className="text-left">Student Count by Class</h2> */}
              <Chart
                type="donut"
                width={320}
                height={270}
                series={[98, 102]}
                options={{
                  labels: ["Male", "Female"],
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
          <div className="barCourseList">
            <p>Grade 7</p>
            <div className="donutCharts">
              {/* <h2 className="text-left">Student Count by Class</h2> */}
              <Chart
                type="donut"
                width={320}
                height={270}
                series={[123, 104]}
                options={{
                  labels: ["Male", "Female"],
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
          <div className="barCourseList">
            <p>Grade 8</p>
            <div className="donutCharts">
              {/* <h2 className="text-left">Student Count by Class</h2> */}
              <Chart
                type="donut"
                width={320}
                height={270}
                series={[66, 54]}
                options={{
                  labels: ["Male", "Female"],
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
        </div>
      </div>

      <div className="tables">
        <div className="performanceTable">
          <Table
            scroll={{
              y: 500,
            }}
            columns={columns}
            dataSource={data}
          />
        </div>
      </div>
    </div>
  );
}

export default Report3;
