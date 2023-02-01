import { useState, useEffect, useRef } from "react";
import "./Class.css";
import {
  Form,
  Input,
  Button,
  Checkbox,
  Table,
  Select,
  message,
  Modal,
} from "antd";
import {
  DownCircleOutlined,
  PlusOutlined,
  ExclamationCircleFilled,
} from "@ant-design/icons";

// TABLE DATA

const data = [
  {
    class: "Grade 1",
    section: (
      <div className="sectionList">
        <p>A</p>
        <p>B</p>
      </div>
    ),
  },
  {
    class: "Grade 2",
    section: (
      <div className="sectionList">
        <p>A</p>
        <p>B</p>
        <p>C</p>
      </div>
    ),
  },
  {
    class: "Grade 3",
    section: (
      <div className="sectionList">
        <p>A</p>
        <p></p>
      </div>
    ),
  },
  {
    class: "Grade 4",
    section: (
      <div className="sectionList">
        <p>A</p>
        <p>B</p>
        <p>C</p>
      </div>
    ),
  },
];

let checkBoxItems = ["A"];
function Class() {
  //DELETE CLASS MODAL FUNCTION STARTS HERE

  //DELETE CLASS MODAL FUNCTION ENDS HERE
  // CLASS ON FINISH
  const [classData, setClassData] = useState(data);
  const [checkboxData, setCheckboxData] = useState(checkBoxItems);
  const [tableData, setTableData] = useState(data);

  const onFinishClass = (values) => {
    console.log(values);
    console.log(checkboxData);
    for (let i = 0; i < tableData.length; i++) {
      if (values.class === tableData[i].class) {
        message.info("Class Already Exists");
        // console.log("Already Exists");

        return;
      }
    }

    const tableRender = checkboxData.map((check) => {
      return <p>{check}</p>;
    });
    console.log("table render ", tableRender);
    data.push({
      class: values.class,
      section: <div className="sectionList">{tableRender}</div>,
    });
    console.log("data", data);
    setTableData([...data]);
  };

  const onClickDelete = () => {
    console.log();
  };

  //global table search

  const [searchedText, setSearchedText] = useState("");

  //Table Columns
  const columns = [
    {
      title: "Class",
      dataIndex: "class",
      filteredValue: [searchedText],
      onFilter: (value, record) => {
        return String(record.class).toLowerCase().includes(value.toLowerCase());
      },
    },
    {
      title: "Section",
      dataIndex: "section",
    },

    {
      title: "Action",
      dataIndex: "key",
      render: (_, record) => {
        return (
          <>
            <Button
              type="primary"
              style={{
                width: "100px",
                backgroundColor: "#002E94",
              }}
            >
              Edit
            </Button>
            <Button
              type="primary"
              onClick={(e) => {
                const index = data.findIndex((x) => x.class === record.class);
                // console.log(index);
                data.splice(index, 1);
                setTableData([...data]);

                // console.log(data);
              }}
              action={record.action}
              style={{
                width: "100px",
                backgroundColor: "#0081C9",
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

  const [dataItems, setDataItems] = useState("");
  const onFinish = (values) => {
    const tempData = data.filter((dataItem) => {
      return dataItem.section === values.section &&
        dataItem.class === values.class
        ? dataItem
        : "";
    });
    setDataItems(tempData);
  };

  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  const onCheckBoxChange = (checkedValues) => {
    console.log("checked =", checkedValues);
  };
  const onClickAddSection = () => {
    const arrayLength = checkboxData.length;
    checkBoxItems.push(String.fromCharCode(65 + arrayLength));
    setCheckboxData(checkBoxItems);
    setcheckboxGroupRender(checkBoxGroup);
  };
  const checkBoxGroup = () => {
    return (
      <Checkbox.Group
        options={checkboxData}
        defaultValue={["A"]}
        onChange={onCheckBoxChange}
      />
    );
  };
  const [checkboxGroupRender, setcheckboxGroupRender] = useState(checkBoxGroup);
  return (
    <div className="classAddition">
      <div className="classAdd">
        <div class="AddClass">
          <Form onFinish={onFinishClass}>
            <div className="classBtnTwo">
              <Button
                type="primary"
                htmlType="submit"
                style={{ backgroundColor: "#38E54D" }}
              >
                Save
              </Button>
            </div>
            <h2>Add Class</h2>
            {/* <div className='classBtnTwo'>
                         <Button type='primary'>Save</Button>
                         <Button type='primary'>Add Section</Button>
                     </div> */}

            <div className="classForm">
              {/* <p>Class Name</p>
              <Form.Item
                name="class"
                rules={[
                  {
                    required: true,
                    message: "Please enter class name",
                  },
                ]}
              >
                <Select name="class" placeholder="class name">
                  <options value="Grade 1">Grade 1</options>
                  <options value="Grade 2">Grade 2</options>
                  <options value="Grade 5">Grade 5</options>
                </Select>
              </Form.Item> */}
              <p style={{ marginTop: "-9px", marginLeft: "60px" }}>Class</p>
              <Form.Item
                name="class"
                rules={[
                  {
                    required: true,
                    message: "Please select a class",
                  },
                ]}
              >
                <Select
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
                  // onChange={handleChange}
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
            <div className="classActions">
              <p>
                Section <span>*</span>
              </p>

              <div className="classCheckBox">
                {/* <Form.Item noStyle name="section" valuePropName="checked">
                  <Checkbox
                    key="A"
                    onChange={onChange}
                    style={{ marginBottom: "20px" }}
                  >
                    A
                  </Checkbox>
                </Form.Item> */}
                {checkboxGroupRender}
                <br />
                <br />
                <div className="checkBoxList">
                  {/* <Form.List name={"sections"}>
                    {(fields, { add, remove }) => (
                      <>
                        {fields.map((field, index) => {
                          return (
                            <Form.Item
                              name={[field.name, "first"]}
                              label={`${String.fromCharCode(index + 2 + 64)}`}
                            >
                              <Checkbox onChange={onChange} />
                            </Form.Item>
                          );
                        })}
                        <Form.Item>
                          <Button
                            icon={<PlusOutlined />}
                            type="dashed"
                            block
                            onClick={() => {
                              add();
                            }}
                            style={{
                              width: "93%",
                              borderColor: "#38E54D",
                              border: "2px dashed #38E54D",
                              marginRight: "20px",
                              fontSize: "20px",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            Add Section
                          </Button>
                        </Form.Item>
                      </>
                    )}
                  </Form.List> */}
                  <Button
                    icon={<PlusOutlined />}
                    type="dashed"
                    block
                    onClick={onClickAddSection}
                    style={{
                      width: "93%",
                      borderColor: "#38E54D",
                      border: "2px dashed #38E54D",
                      marginRight: "20px",
                      marginTop: "30px",
                      fontSize: "20px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    Add Section
                  </Button>
                </div>
                <div className="classBtnOne"></div>
              </div>
            </div>
          </Form>
        </div>
        <div class="classList">
          <h2>Class List</h2>
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
            <Table
              columns={columns}
              dataSource={tableData}
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

export default Class;
