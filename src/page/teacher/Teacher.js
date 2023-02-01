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
// import "./Teacher.css";
import {
  DownCircleOutlined,
  PlusOutlined,
  ExclamationCircleFilled,
} from "@ant-design/icons";
import { useState } from "react";

const originData = [
  {
    key: "0",
    fname: "Wako",
    lname: "Tadde",
    phone: "093949494949",
    coursename: "mathematics",
    grade: "Grade 7 ",
    section: "B",
  },

  {
    key: "1",
    fname: "john",
    lname: "doe",
    phone: "0904349349",
    coursename: "Physics",
    grade: "Grade 9 ",
    section: "B",
  },
];

// for (let i = 0; i < 100; i++) {
//   originData.push({
//     key: i.toString(),
//   });
// }
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
  const inputNode = inputType === "txt" ? <InputNumber /> : <Input />;
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

function Teacher() {
  const [searchedText, setSearchedText] = useState("");
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [editingKey, setEditingKey] = useState("");
  const isEditing = (record) => record.key === editingKey;
  const [tableData, setTableData] = useState(originData);
  const [readSelect, setReadSelect] = useState();
  const [readInput, setReadInput] = useState();
  const [idValue, setIdValue] = useState("course id");

  const onFinishAssign = (values) => {
    console.log(values);
  };

  const onFinishClass = (values) => {
    console.log(values);

    for (let i = 0; i < tableData.length; i++) {
      if (
        values.fname &&
        values.lname === tableData[i].fname &&
        tableData[i].lname
      ) {
        message.info("Already Exists");
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
          fname: values.fname,
          lname: values.lname,

          phone: values.phone,
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
      fname: "",
      lname: "",

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
      title: "First Name",
      dataIndex: "fname",
      width: "12%",
      editable: true,
      filteredValue: [searchedText],
      onFilter: (value, record) => {
        return String(record.fname).toLowerCase().includes(value.toLowerCase());
      },
    },
    {
      title: "Last Name",
      dataIndex: "lname",
      width: "12%",
      editable: true,
    },
    {
      title: "Phone Number",
      dataIndex: "phone",
      width: "13%",
      editable: true,
    },
    {
      title: "Courses",
      dataIndex: "coursename",
      width: "13%",
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
      width: "16%",
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
      width: "1%",
      render: (_, record) => {
        return (
          <Button
            type="primary"
            onClick={(e) => {
              const index = tableData.findIndex((x) => x.key === record.key);
              console.log("Deleted successfully", index);
              console.log(originData[index]);
              tableData.splice(index, 1);
              setTableData([...tableData]);

              //   console.log(index);
            }}
            // action={record.fname}
            style={{
              //   width: "100px",
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
  const Assigncolumns = [
    {
      title: "First Name",
      dataIndex: "fname",

      editable: true,
      filteredValue: [searchedText],
      onFilter: (value, record) => {
        return String(record.fname).toLowerCase().includes(value.toLowerCase());
      },
    },
    {
      title: "Last Name",
      dataIndex: "lname",

      editable: true,
    },

    {
      title: "Courses",
      dataIndex: "coursename",

      editable: true,
    },
    {
      title: "Grade",
      dataIndex: "grade",
      editable: true,
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (_, record) => {
        return (
          <Button
            type="primary"
            onClick={(e) => {
              console.log(originData.values);

              console.log(tableData.tableData.values);
            }}
            // action={record.fname}
            style={{
              //   width: "100px",
              backgroundColor: "#FB2576",
              marginLeft: "20px",
            }}
          >
            {" "}
            Assign
          </Button>
        );
      },
    },
  ];
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

  const [selectedCourses, setSelectedCourses] = useState([]);

  const start = () => {
    setLoading(true);
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };

  //message button

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
                    <h2>Add Teacher</h2>

                    <div className="classForm">
                      <div className="subjectInput">
                        <p>First Name</p>
                        <Form.Item
                          name="fname"
                          rules={[
                            {
                              required: true,
                              message: "Please enter first name",
                            },
                          ]}
                        >
                          <Input onChange={OnChangeInput} />
                        </Form.Item>
                      </div>
                      <div className="subjectInput">
                        <p>Last Name</p>
                        <Form.Item
                          name="lname"
                          rules={[
                            {
                              required: true,
                              message: "Please enter last name",
                            },
                          ]}
                        >
                          <Input onChange={OnChangeInput} />
                        </Form.Item>
                      </div>
                      <div className="subjectInput">
                        <p>Phone Number</p>
                        <Form.Item
                          name="phone"
                          rules={[
                            {
                              required: true,
                              message: "Please enter phone number",
                            },
                          ]}
                        >
                          <Input onChange={OnChangeInput} />
                        </Form.Item>
                      </div>
                      <div className="subjectInput">
                        <p>Courses</p>
                        <Form.Item
                          name="coursename"
                          rules={[
                            {
                              required: true,
                              message: "Please enter course name",
                            },
                          ]}
                        >
                          <Input onChange={OnChangeInput} />
                        </Form.Item>
                      </div>
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
                          mode="multiple"
                          allowClear
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
                  </Form>
                </div>
                <div class="classList">
                  <h2>Teacher List</h2>

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
        <Tabs.TabPane tab="Assign Teacher" key="assign">
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

                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        Submit
                      </Button>
                    </div>
                    <h2>AssignTeacher</h2>

                    <div className="classForm"></div>
                  </Form>
                </div>
                <div class="classList">
                  <h2>Search Teacher</h2>

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
                    <Form
                      form={form}
                      component={false}
                      onFinish={onFinishAssign}
                    >
                      <div
                        style={{
                          float: "right",
                          marginRight: "20px",
                          marginRigth: "0px",
                          marginBottom: "20px",
                        }}
                      >
                        {/* <Button
                            type="primary"
                            htmlType="submit"
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              fontSize: "17px",
                              fontFamily: "Ubuntu",
                              fontWeight: "700",
                              background: "#9400ff",
                            }}
                          >
                            Assign
                          </Button> */}
                      </div>

                      <Table
                        bordered
                        dataSource={tableData}
                        columns={Assigncolumns}
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
      </Tabs>
    </div>
  );
}

export default Teacher;
