import {
  Form,
  InputNumber,
  Popconfirm,
  Table,
  Typography,
  Input,
  Button,
  message,
  Select,
  DatePicker,
} from "antd";
import { useState } from "react";
import { DownCircleOutlined } from "@ant-design/icons";
const originData = [
  {
    key: "1",
    examname: "test 1",
    coursename: "Mathematis",
    grade: "Grade 1",
    section: "A",
    time: "10.00 am - 11.00 am",
    date: "20/06/2023",
  },
  {
    key: "2",
    examname: "test 1",
    coursename: "English",
    grade: "Grade 1",
    section: "B",
    time: "10.00 am - 11.00 am",
    date: "20/06/2023",
  },
  {
    key: "3",
    examname: "test 1",
    coursename: "General Science",
    grade: "Grade 1",
    section: "C",
    time: "10.00 am - 11.00 am",
    date: "20/06/2023",
  },
  {
    key: "4",
    examname: "test 2",
    coursename: "Amharic",
    grade: "Grade 1",
    section: "D",
    time: "10.00 am - 11.00 am",
    date: "20/06/2023",
  },
  {
    key: "5",
    examname: "test 3",
    coursename: "General Science",
    grade: "Grade 2",
    section: "C",
    time: "10.00 am - 11.00 am",
    date: "20/06/2023",
  },
  {
    key: "6",
    examname: "test 1",
    coursename: "English",
    grade: "Grade 3",
    section: "B",
    time: "10.00 am - 11.00 am",
    date: "20/06/2023",
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

function Schedule() {
  //global table search

  const [searchedText, setSearchedText] = useState("");
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [editingKey, setEditingKey] = useState("");
  const isEditing = (record) => record.key === editingKey;
  const [tableData, setTableData] = useState(originData);

  const onFinishClass = (values) => {
    // console.log(values);
    // console.log(checkboxData);
    for (let i = 0; i < tableData.length; i++) {
      if (values.name === tableData[i].name) {
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
          name: values.name,
          feescode: values.feescode,
          amount: values.amount,
        },
      ];
    });
  };

  const edit = (record) => {
    form.setFieldsValue({
      name: "",
      feescode: "",
      amount: "",

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
      title: "Exam Name",
      dataIndex: "examname",

      editable: true,
    },
    {
      title: "Course",
      dataIndex: "coursename",

      editable: true,
    },
    {
      title: "Grade",
      dataIndex: "grade",
      filteredValue: [searchedText],
      onFilter: (value, record) => {
        return String(record.grade).toLowerCase().includes(value.toLowerCase());
      },

      editable: true,
    },
    {
      title: "Section",
      dataIndex: "section",

      editable: true,
    },
    {
      title: "Time",
      dataIndex: "time",

      editable: true,
    },
    {
      title: "Exam Date",
      dataIndex: "date",

      editable: true,
    },

    {
      title: "operation",
      dataIndex: "operation",
      width: "18%",
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
      //   width: "90px",
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
              width: "",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "10px 20px",
              backgroundColor: "#FB2576",
              //   marginLeft: "20px",
            }}
          >
            {" "}
            Delete
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
        inputType: col.dataIndex === "name" ? "feescode" : "text",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  return (
    <div className="classAddition">
      <div className="classAdd">
        <div class="AddClass">
          <Form onFinish={onFinishClass}>
            <div className="classBtnTwo btn2">
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  backgroundColor: "rgb(111, 56, 197)",
                }}
              >
                Save
              </Button>
            </div>

            <h2>Add New Exam</h2>
            {/* <div className='classBtnTwo'>
                           <Button type='primary'>Save</Button>
                           <Button type='primary'>Add Section</Button>
                       </div> */}

            <div className="feetypeForm">
              <div className="classForm">
                <div className="classForm">
                  <p
                    style={{
                      marginTop: "8px",
                      marginLeft: "60px",
                    }}
                  >
                    Exam Name
                  </p>
                  <Form.Item
                    name="examname"
                    rule={[
                      {
                        required: true,
                        message: "Please enter exam name",
                      },
                    ]}
                  >
                    <Input placeholder="exam name" />
                  </Form.Item>
                </div>
                <div
                  className="classForm"
                  style={{
                    marginTop: "10px",
                  }}
                >
                  <p
                    style={{
                      marginTop: "8px",
                      marginLeft: "60px",
                    }}
                  >
                    Course Name
                  </p>
                  <Form.Item
                    name="coursename"
                    rule={[
                      {
                        required: true,
                        message: "Please enter course name",
                      },
                    ]}
                  >
                    <Input
                      placeholder="exam name"
                      style={{
                        borderSize: "1px !important",
                      }}
                    />
                  </Form.Item>
                </div>

                <br />

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
                    // onChange={(e) => {
                    //   setReadSelect(e.substring(e.length - 1, e.length));
                    // }}
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
                    ]}
                  />
                </Form.Item>
              </div>
              <div
                className="classForm"
                style={{
                  marginTop: "5px",
                }}
              >
                <p style={{ marginTop: "-9px", marginLeft: "60px" }}>
                  Select Section
                </p>
                <Form.Item
                  name="section"
                  rules={[
                    {
                      required: true,
                      message: "Please select a section",
                    },
                  ]}
                >
                  <Select
                    // onChange={(e) => {
                    //   setReadSelect(e.substring(e.length - 1, e.length));
                    // }}
                    suffixIcon={
                      <DownCircleOutlined
                        style={{
                          fontSize: "25px",
                          marginTop: "5px",
                          color: "#5b5f97",
                        }}
                      />
                    }
                    placeholder="Select Section"
                    style={{
                      // width: "415px",
                      width: "90%",
                      marginLeft: "5%",

                      marginTop: "3px",

                      lineHeight: "60px",
                    }}
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
                <div
                  className="classForm"
                  style={{
                    marginTop: "10px",
                  }}
                >
                  <p
                    style={{
                      marginTop: "8px",
                      marginLeft: "60px",
                    }}
                  >
                    Select Time
                  </p>
                  <Form.Item
                    name="time"
                    rule={[
                      {
                        required: true,
                        message: "Please enter exam time",
                      },
                    ]}
                  >
                    <Input placeholder="exam time" />
                  </Form.Item>
                  <p
                    style={{
                      marginTop: "8px",
                      marginLeft: "60px",
                    }}
                  >
                    Exam Date
                  </p>
                  <Form.Item>
                    <DatePicker
                      name="date"
                      style={{
                        width: "90%",
                        marginLeft: "5%",
                        height: "50px",
                        fontSize: "20px",
                        marginTop: "17px",
                        border: "1px solid rgb(194, 194, 194)",
                      }}
                      required
                      onChange={(text, index) => {
                        console.log(index.children);
                      }}
                    />
                  </Form.Item>
                </div>
              </div>
            </div>
          </Form>
        </div>
        <div class="classList">
          <h2 style={{ marginBottom: "60px", paddingTop: "20px" }}>
            All Exam Schedule
          </h2>
          <div className="classListSearch">
            <Input.Search
              placeholder="Search here..."
              style={{
                marginLeft: "20px",
                width: "30%",
                marginBottom: "20px",
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
                scroll={{
                  y: 450,
                }}
              />
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
