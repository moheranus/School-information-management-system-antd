import {
  Form,
  InputNumber,
  Popconfirm,
  Table,
  Typography,
  Input,
  Button,
  message,
  Tabs,
  Select,
  Col,
  Checkbox,
  Row,
} from "antd";
import "./Subject.css";
import { DownCircleOutlined } from "@ant-design/icons";
import { useState } from "react";

const originData = [
  {
    key: "0",
    cid: "MATHG1",
    coursename: "Mathematics",
    grade: "Grade 1",
  },
  {
    key: "1",
    cid: "ENGLG1",
    coursename: "English ",
    grade: "Grade 1",
  },
  {
    key: "2",
    cid: "AMHRG2",
    coursename: "Amharic ",
    grade: "Grade 2",
  },
  {
    key: "3",
    cid: "SCIEG3",
    coursename: " Science ",
    grade: "Grade 3",
  },
  {
    key: "4",
    cid: "GEOG9",
    coursename: "Geography",
    grade: "Grade 9",
    notoffered: "physics",
  },
];

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === "number" ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

function Subject() {
  const [searchedText, setSearchedText] = useState("");
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [editingKey, setEditingKey] = useState("");
  const isEditing = (record) => record.key === editingKey;
  const [tableData, setTableData] = useState(originData);
  const [readSelect, setReadSelect] = useState();
  const [readInput, setReadInput] = useState();
  const [idValue, setIdValue] = useState("course id");

  const onFinishClass = (values) => {
    console.log(values);
    // console.log(checkboxData);
    for (let i = 0; i < tableData.length; i++) {
      if (values.cid === tableData[i].cid) {
        message.info("Fee Already Exists");
        console.log("Already Exists");

        return;
      }
    }
    setTableData(() => {
      return [
        ...tableData,
        {
          key: tableData.length,
          cid: idValue,
          coursename: values.coursename,
          grade: values.grade,
        },
      ];
    });
  };
  const OnChangeInput = (e) => {
    setReadInput(e.target.value.substring(0, 4).toUpperCase());
    setIdValue(`${readInput}${readSelect}`);
  };
  const edit = (record) => {
    form.setFieldsValue({
      cid: "",
      coursename: "",
      grade: "",

      ...record,
    });
    setEditingKey(record.key);
  };
  const cancel = () => {
    setEditingKey("");
  };
  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...tableData];
      const index = newData.findIndex((item) => key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        setTableData(newData);
        setEditingKey("");
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey("");
      }
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };
  const columns = [
    {
      title: "Course ID",
      dataIndex: "cid",
      width: "25%",
      editable: false,
      filteredValue: [searchedText],
      onFilter: (value, record) => {
        return String(record.cid).toLowerCase().includes(value.toLowerCase());
      },
    },
    {
      title: "Course Name",
      dataIndex: "coursename",
      width: "25%",
      editable: true,
    },
    {
      title: "Grade",
      dataIndex: "grade",
      width: "15%",
      editable: true,
    },

    {
      title: "operation",
      dataIndex: "operation",

      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link
              onClick={() => save(record.key)}
              style={{
                marginRight: 8,
              }}
            >
              <Button type="primary" style={{ backgroundColor: "#38E54D" }}>
                Save
              </Button>
            </Typography.Link>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <Button style={{ borderColor: "#CB1C8D" }}>Cancel</Button>
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link
            disabled={editingKey !== ""}
            onClick={() => edit(record)}
          >
            <Button
              type="primary"
              style={{
                background: "#6F38C5",
              }}
            >
              Edit
            </Button>
          </Typography.Link>
        );
      },
    },
    {
      title: "",
      dataIndex: "action",
      width: "5%",
      render: (_, record) => {
        return (
          <Button
            type="primary"
            onClick={(e) => {
              const index = originData.findIndex((x) => x.name === record.name);
              console.log("Deleted successfully", index);
              console.log(originData[index]);
              originData.splice(index, 1);
              setTableData([...originData]);

              console.log(index);
            }}
            action={record.name}
            style={{
              width: "100px",
              backgroundColor: "#FB2576",
              marginLeft: "20px",
            }}
          >
            {" "}
            Delete
          </Button>
        );
      },
    },
  ];

  const column2 = [
    {
      title: "Course ID ",
      dataIndex: "cid",
      // width: "25%",
      editable: false,
      filteredValue: [searchedText],
      onFilter: (value, record) => {
        return String(record.cid).toLowerCase().includes(value.toLowerCase());
      },
    },
    {
      title: "Course Name ",
      dataIndex: "coursename",
      // width: "25%",
      editable: true,
    },
    {
      title: "Grade ",
      dataIndex: "grade",
      // width: "15%",
      editable: true,
    },
  ];

  const mergedColumn2 = column2.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === "name" ? "coursename" : "text",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  const column3 = [
    {
      title: "Course ID ",
      dataIndex: "cid",
      width: "10%",
      editable: false,
      filteredValue: [searchedText],
      onFilter: (value, record) => {
        return String(record.cid).toLowerCase().includes(value.toLowerCase());
      },
    },
    {
      title: "Offered Course ",
      dataIndex: "courses",
      // width: "25%",
      editable: true,
    },
    {
      title: "Not Offered Course",
      dataIndex: "notoffered",
      // width: "15%",
      editable: true,
    },
    {
      title: "Grade ",
      dataIndex: "grade",
      // width: "15%",
      editable: true,
    },
    {
      title: "Semister ",
      dataIndex: "semister",
      // width: "15%",
      editable: true,
    },
    {
      title: "",
      dataIndex: "action",
      width: "15%",
      render: (_, record) => {
        return (
          <>
            <Button
              type="primary"
              onClick={rowSelection}
              style={{
                width: "100px",
                backgroundColor: "rgb(111, 56, 197)",
                marginLeft: "20px",
                marginBottom: "10px",
              }}
            >
              {" "}
              Edit
            </Button>
            <Button
              type="primary"
              onClick={(e) => {
                const index = originData.findIndex(
                  (x) => x.coursename === record.coursename
                );
                console.log("Deleted successfully", index);
                console.log(originData[index]);
                originData.splice(index, 1);
                setTableData([...originData]);

                console.log(index);
              }}
              action={record.coursename}
              style={{
                width: "100px",
                backgroundColor: "#FB2576",
                marginLeft: "20px",
              }}
            >
              {" "}
              Delete
            </Button>
          </>
        );
      },
    },
  ];

  const mergedColumn3 = column3.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === "name" ? "coursename" : "text",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === "name" ? "coursename" : "text",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
  //offer course table check box selected  function minamin here
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [filterOffered, setFilterOffered] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [offeredCourses, setOfferedCourses] = useState([]);
  const start = () => {
    setLoading(true);
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };
  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    const selectedRowData = [];
    for (let i = 0; i < tableData.length; i++) {
      for (let j = 0; j < newSelectedRowKeys.length; j++) {
        if (tableData[i].key === newSelectedRowKeys[j]) {
          selectedRowData.push(tableData[i]);
        }
      }
    }
    console.log(selectedRowData);
    const courses = selectedRowData.map((course) => {
      return (
        <Col>
          <Checkbox defaultChecked={true} value={course.coursename}>
            {course.coursename}
          </Checkbox>
        </Col>
      );
    });
    console.log(courses);
    setSelectedCourses(courses);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const onChangeCheckBox = (values) => {
    console.log(values);
  };
  const onOfferFinish = (values) => {
    // values.preventDefault();
    console.log(values);
  };
  const hasSelected = selectedRowKeys.length > 0;
  //message button

  const [messageApi, contextHolder] = message.useMessage();
  const key = "updatable";
  const openMessage = () => {
    messageApi.open({
      key,
      type: "loading",
      content: "Loading...",
    });
    setTimeout(() => {
      messageApi.open({
        key,
        type: "success",
        content: "successfully offered courses!",
        duration: 2,
      });
    }, 1000);
  };
  return (
    <div className="subjectContainer">
      <Tabs defaultActiveKey="tab1">
        <Tabs.TabPane tab="Add Subject" key="subject">
          <div className="profileTabInfo">
            <div className="classAddition">
              <div className="classAdd">
                <div class="AddClass">
                  <Form onFinish={onFinishClass}>
                    <div className="classBtnTwo">
                      <Button
                        type="primary"
                        htmlType="submit"
                        style={{
                          backgroundColor: "#6F38C5",
                          marginTop: "-20px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        Submit
                      </Button>
                    </div>
                    <h2>Add Course</h2>

                    <div className="classForm">
                      <p style={{ marginTop: "-9px", marginLeft: "60px" }}>
                        Select Grade
                      </p>
                      <Form.Item
                        name="grade"
                        rules={[
                          {
                            required: true,
                            message: "Please select a class",
                          },
                        ]}
                      >
                        <Select
                          onChange={(e) => {
                            setReadSelect(e.substring(e.length - 1, e.length));
                          }}
                          suffixIcon={
                            <DownCircleOutlined
                              style={{
                                fontSize: "25px",
                                marginTop: "5px",
                                color: "#5b5f97",
                              }}
                            />
                          }
                          placeholder="Select Class"
                          style={{
                            // width: "415px",
                            width: "90%",
                            marginLeft: "5%",

                            marginTop: "3px",

                            lineHeight: "60px",
                          }}
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
                            {
                              value: "Grade 6",
                              label: "Grade 6",
                            },
                            {
                              value: "Grade 7",
                              label: "Grade 7",
                            },
                            {
                              value: "Grade 8",
                              label: "Grade 8 ",
                            },
                            {
                              value: "Grade 9",
                              label: "Grade 9",
                            },
                            {
                              value: "Grade 10",
                              label: "Grade 10",
                            },
                            {
                              value: "Grade 11",
                              label: "Grade 11",
                            },
                            {
                              value: "Grade 12",
                              label: "Grade 12",
                            },
                          ]}
                        />
                      </Form.Item>
                    </div>
                    <div className="subjectInput">
                      <p>Course Name</p>
                      <Form.Item
                        name="coursename"
                        rules={[
                          {
                            required: true,
                            message: "Please enter subject name",
                          },
                        ]}
                      >
                        <Input onChange={OnChangeInput} />
                      </Form.Item>
                    </div>
                    <div className="subjectInput">
                      <p>Course Id</p>
                      {/* <Form.Item
                        name="cid"
                        rules={[
                          {
                            required: true,
                            message: "Please enter subject name",
                          },
                        ]}
                      >
                        <Input readonly>
                          
                        </Input>
                      </Form.Item> */}
                      <div className="courseId">
                        <h1>{idValue}</h1>
                      </div>
                    </div>
                  </Form>
                </div>
                <div class="classList">
                  <h2>Course List</h2>

                  <div className="classListSearch">
                    <Input.Search
                      placeholder="Search here..."
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
                  <div className="classListTable">
                    <Form form={form} component={false}>
                      <Table
                        components={{
                          body: {
                            cell: EditableCell,
                          },
                        }}
                        bordered
                        dataSource={tableData}
                        columns={mergedColumns}
                        rowClassName="editable-row"
                        pagination={{
                          onChange: cancel,
                        }}
                        style={{
                          marginLeft: "20px",
                          marginRight: "20px",
                        }}
                      />
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Tabs.TabPane>
        {/* SECOND TAB HERE */}
        <Tabs.TabPane tab="Offer Courses" key="courses">
          <div>
            <div className="classAddition">
              <div className="classAdd">
                <div class="AddClass">
                  <Form
                    onFinish={(values) => {
                      let courses = "";
                      for (let i = 0; i < values.offered.length; i++) {
                        courses = `${courses}${values.offered[i]} `;
                      }
                      let grade;

                      const notOffered = filteredData.map((data) => {
                        return data.coursename;
                      });
                      for (let i = 0; i < values.offered.length; i++) {
                        const indexValue = notOffered.indexOf(
                          values.offered[i]
                        );
                        grade = filteredData[indexValue].grade;
                        notOffered.splice(indexValue, 1);
                      }
                      // console.log(notOffered);
                      let notOfferedCourseString = "";
                      for (let i = 0; i < notOffered.length; i++) {
                        notOfferedCourseString = `${notOfferedCourseString}${notOffered[i]} `;
                      }
                      console.log("grade", grade);
                      setOfferedCourses([
                        {
                          semister: values.semister,
                          courses: courses,
                          notoffered: notOfferedCourseString,
                          grade: grade,
                        },
                      ]);
                    }}
                  >
                    <div className="classBtnTwo">
                      {/* <Button
                        type="primary"
                        htmlType="submit"
                        style={{
                          backgroundColor: "#6F38C5",
                          marginTop: "-20px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        Submit
                      </Button> */}
                    </div>
                    <h2>Offer Courses</h2>

                    <div className="subjectInput">
                      {/* <div className="offerInfo">
                        <p>Offer the Following course for grade 1</p>
                      </div> */}
                      <div>
                        {/* <Form.Item name="inputfield">
                          <Input />
                        </Form.Item> */}
                        <div className="courseOfferList">
                          <div
                            style={{
                              marginTop: -70,
                              float: "right",
                              marginBottom: 16,
                              marginRight: "20px",
                            }}
                          >
                            {contextHolder}
                            <Button
                              type="primary"
                              htmlType="submit"
                              // onClick={start}
                              disabled={!hasSelected}
                              loading={loading}
                              onClick={openMessage}
                            >
                              Offer Course
                            </Button>

                            {/* <span
                              style={{
                                marginLeft: 8,
                                marginTop: 10,
                                color: "#17D7A0",
                                fontSize: "15px",
                              }}
                            >
                              {hasSelected
                                ? `Selected ${selectedRowKeys.length} items`
                                : ""}
                            </span> */}
                          </div>
                          <div
                            className="classForm"
                            style={{
                              marginTop: "0",
                              marginLeft: "-30px",
                            }}
                          >
                            <p
                              style={{ marginTop: "-9px", marginLeft: "60px" }}
                            >
                              Select Semister
                            </p>
                            <Form.Item
                              name="semister"
                              rules={[
                                {
                                  required: true,
                                  message: "Please select semister",
                                },
                              ]}
                            >
                              <Select
                                onChange={(e) => {
                                  setReadSelect(
                                    e.substring(e.length - 1, e.length)
                                  );
                                }}
                                suffixIcon={
                                  <DownCircleOutlined
                                    style={{
                                      fontSize: "25px",
                                      marginTop: "5px",
                                      color: "#5b5f97",
                                    }}
                                  />
                                }
                                placeholder="Select Semister"
                                style={{
                                  // width: "415px",
                                  width: "90%",
                                  marginLeft: "5%",

                                  marginTop: "3px",

                                  lineHeight: "60px",
                                }}
                                options={[
                                  {
                                    value: "firstsemister",
                                    label: "1st Semister",
                                  },
                                  {
                                    value: "secondsemister",
                                    label: "2nd Semister",
                                  },
                                  {
                                    value: "other",
                                    label: "Other",
                                  },
                                ]}
                              />
                            </Form.Item>
                          </div>
                          <div>
                            <Form.Item
                              style={{
                                marginLeft: "125px",
                                marginBottom: "0px",
                              }}
                            >
                              <Checkbox
                                disabled={!hasSelected}
                                style={{
                                  color: "#913175",
                                  fontFamily: "Ubuntu",
                                  fontWeight: "600",
                                  fontSize: "17px",
                                }}
                              >
                                Select all
                              </Checkbox>
                            </Form.Item>
                          </div>

                          <Form.Item
                            label="Selected Courses"
                            name="offered"
                            checked
                          >
                            <Checkbox.Group onChange={onChangeCheckBox}>
                              <Col>{selectedCourses}</Col>
                            </Checkbox.Group>
                          </Form.Item>
                        </div>
                      </div>
                    </div>
                  </Form>
                </div>
                <div class="classList">
                  <h2>Course List Per Class</h2>
                  <div className="classForm">
                    <p style={{ marginTop: "-9px", marginLeft: "60px" }}>
                      Select Grade
                    </p>
                    <Form.Item
                      name="grade"
                      rules={[
                        {
                          required: true,
                          message: "Please select a class",
                        },
                      ]}
                    >
                      <Select
                        onChange={(e) => {
                          const selectedData = tableData.filter((filter) => {
                            return filter.grade === e;
                          });
                          console.log(filteredData);
                          setFilteredData([...selectedData]);
                        }}
                        suffixIcon={
                          <DownCircleOutlined
                            style={{
                              fontSize: "25px",
                              marginTop: "5px",
                              color: "#5b5f97",
                            }}
                          />
                        }
                        placeholder="Select Class"
                        style={{
                          // width: "415px",
                          width: "40%",
                          marginLeft: "2.7%",

                          marginTop: "3px",

                          lineHeight: "60px",
                        }}
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
                          {
                            value: "Grade 6",
                            label: "Grade 6",
                          },
                          {
                            value: "Grade 7",
                            label: "Grade 7",
                          },
                          {
                            value: "Grade 8",
                            label: "Grade 8 ",
                          },
                          {
                            value: "Grade 9",
                            label: "Grade 9",
                          },
                          {
                            value: "Grade 10",
                            label: "Grade 10",
                          },
                          {
                            value: "Grade 11",
                            label: "Grade 11",
                          },
                          {
                            value: "Grade 12",
                            label: "Grade 12",
                          },
                        ]}
                      />
                    </Form.Item>
                    {/* <Button type="primary" htmlType="submit">
                      search
                    </Button> */}
                  </div>
                  {/* <div className="classListSearch">
                    <Input.Search
                      placeholder="Search here..."
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
                  </div> */}

                  <div
                    className="classListTable"
                    style={{
                      marginLeft: "20px",
                      marginRight: "20px",
                    }}
                  >
                    <div>
                      <div
                        style={{
                          marginBottom: 16,
                        }}
                      >
                        {/* <Button
                          type="primary"
                          // onClick={start}
                          disabled={!hasSelected}
                          loading={loading}
                        >
                          Offer Course
                        </Button> */}
                        <span
                          style={{
                            marginLeft: 8,
                            marginTop: 10,
                            color: "#17D7A0",
                            fontSize: "15px",
                          }}
                        >
                          {hasSelected
                            ? `Selected ${selectedRowKeys.length} items`
                            : ""}
                        </span>
                      </div>
                      <Table
                        rowSelection={rowSelection}
                        columns={mergedColumn2}
                        dataSource={filteredData}
                        // dataSource={data}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Offered Course List" key="offered">
          <div>
            <div className="classAddition">
              <div className="classAdds">
                <div class="classList">
                  <h2>Offered Courses</h2>
                  <div className="classForm">
                    <p style={{ marginTop: "-9px", marginLeft: "60px" }}>
                      Select Grade
                    </p>
                    <Form.Item
                      name="grade"
                      rules={[
                        {
                          required: true,
                          message: "Please select a class",
                        },
                      ]}
                    >
                      <Select
                        onChange={(e) => {
                          const selectedOfferedCourse = offeredCourses.filter(
                            (filter) => {
                              return filter.grade === e;
                            }
                          );
                          console.log(selectedOfferedCourse);
                          setFilterOffered([...selectedOfferedCourse]);
                        }}
                        suffixIcon={
                          <DownCircleOutlined
                            style={{
                              fontSize: "25px",
                              marginTop: "5px",
                              color: "#5b5f97",
                            }}
                          />
                        }
                        placeholder="Select Class"
                        style={{
                          // width: "415px",
                          width: "40%",
                          marginLeft: "2.7%",

                          marginTop: "3px",

                          lineHeight: "60px",
                        }}
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
                          {
                            value: "Grade 6",
                            label: "Grade 6",
                          },
                          {
                            value: "Grade 7",
                            label: "Grade 7",
                          },
                          {
                            value: "Grade 8",
                            label: "Grade 8 ",
                          },
                          {
                            value: "Grade 9",
                            label: "Grade 9",
                          },
                          {
                            value: "Grade 10",
                            label: "Grade 10",
                          },
                          {
                            value: "Grade 11",
                            label: "Grade 11",
                          },
                          {
                            value: "Grade 12",
                            label: "Grade 12",
                          },
                        ]}
                      />
                    </Form.Item>
                    {/* <Button type="primary" htmlType="submit">
                      search
                    </Button> */}
                  </div>

                  <div
                    className="classListTable"
                    style={{
                      marginLeft: "20px",
                      marginRight: "20px",
                    }}
                  >
                    <div>
                      <div
                        style={{
                          marginBottom: 16,
                        }}
                      ></div>
                      <Table
                        // rowSelection={rowSelection}
                        columns={mergedColumn3}
                        dataSource={filterOffered}
                        // dataSource={data}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Tabs.TabPane>
        dhfuh
      </Tabs>
    </div>
  );
}

export default Subject;
