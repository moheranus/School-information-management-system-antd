import { useState, useEffect, useRef } from "react";
import "./Fee.css";
import { Table, theme } from "antd";
import classNames from "classnames";
import ResizeObserver from "rc-resize-observer";
import { Link } from "react-router-dom";
import { VariableSizeGrid as Grid } from "react-window";

import { Form, Input, Button, Select, DatePicker, message, Upload } from "antd";

import {
  DownCircleOutlined,
  PlusOutlined,
  LoadingOutlined,
  EditOutlined,
  FolderViewOutlined,
} from "@ant-design/icons";

//VIRTUAL TABLE FUNCTION AND USESTATE HERE

// Usage
const columns = [
  {
    title: "First Name",
    dataIndex: "fname",
    width: 200,
  },
  {
    title: "Last Name",
    dataIndex: "lname",
    width: 200,
  },
  {
    title: "Gender",
    dataIndex: "gender",
    width: 120,
  },
  {
    title: "Class",
    dataIndex: "class",
    width: 120,
  },
  {
    title: "Section",
    dataIndex: "section",

    width: 120,
  },
  {
    title: "Action",
    dataIndex: "key",
    width: 200,
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
            <Link to="/collectfee">Collect fees</Link>
          </Button>
        </>
      );
    },
  },
];
const data = [
  {
    fname: "Daniel",
    lname: "Shobe",
    gender: "M",
    class: "3rd",
    section: "A",
  },
  {
    fname: "Eliyas",
    lname: "Asefa",
    gender: "M",
    class: "3rd",
    section: "A",
  },
  {
    fname: "Mohammed",
    lname: "Aman",
    gender: "M",
    class: "3rd",
    section: "B",
  },
  {
    fname: "Reta",
    lname: "Alemu",
    gender: "M",
    class: "3rd",
    section: "B",
  },
  {
    fname: "Reta",
    lname: "Alemu",
    gender: "M",
    class: "3rd",
    section: "A",
  },
  {
    fname: "Tadde",
    lname: "Jata",
    gender: "M",
    class: "1st",
    section: "A",
  },
  {
    fname: "Fatuma",
    lname: "Roba",
    gender: "F",
    class: "1st",
    section: "A",
  },
  {
    fname: "Robe",
    lname: "Wakasa",
    gender: "F",
    class: "2nd",
    section: "A",
  },
  {
    fname: "John",
    lname: "Doe",
    gender: "M",
    class: "2nd",
    section: "A",
  },
];

//VIRTUAL TABLE FUNCTION AND USESTATE ENDS HERE

//gender handle value
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
//image upload starts here

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};
const beforeUpload = (file) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};

//image upload ends here

function Fee() {
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

  //student image upload starts here

  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: -5,
        }}
      >
        Upload student image
      </div>
    </div>
  );

  //student image upload ends here
  return (
    <>
      <div className="detailTitle">
        <h2 className="feeClass"> Select Criteria</h2>
      </div>
      <div className="editStudent">
        <br></br>
        <br />
        <div className="holder1">
          <div className="editStudentFormCont">
            <Form onFinish={onFinish}>
              {/* COLUMN ONE STARTS HERE */}

              <div className="column1">
                <div className="columnOneSelect">
                  <p style={{ marginTop: "-9px", marginLeft: "40px" }}>Class</p>
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
            columns={columns}
            dataSource={dataItems}
            scroll={{
              y: 300,
              // x: '100vw',
            }}
          />
        </div>
      </div>
    </>
  );
}

export default Fee;
