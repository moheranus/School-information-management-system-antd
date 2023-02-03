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
  Space,
  Drawer,
} from "antd";
// import "./Subject.css";
import "./Report.css";
import { DownCircleOutlined } from "@ant-design/icons";
import { useState } from "react";

//* ********************************************************
//CLASS SECTION DATA IS HERE/ TABLE DATA
//******************************************************** *

const classSectionData = [
  {
    num: "1",
    grade: "Grade 1 (A)",
    students: "10",
  },
  {
    num: "2",
    grade: "Grade 1 (B)",
    students: "20",
  },
  {
    num: "4",
    grade: "Grade 2 (A)",
    students: "13",
  },
  {
    num: "5",
    grade: "Grade 2 (B)",
    students: "33",
  },
  {
    num: "6",
    grade: "Grade 3 (A)",
    students: "23",
  },
  {
    num: "7",
    grade: "Grade 3 (B)",
    students: "30",
  },
  {
    num: "8",
    grade: "Grade 3 (c)",
    students: "40",
  },
];
//* ********************************************************

//STUDENT LIST PER CLASS TABLE DATA

//******************************************************** *
const studentListData = [
  {
    num: "1",
    name: "Abebe Kebede",
    class: "Grade 1 (A)",
    father: "Kebede Kelbesa",
    gender: "Male",
    phone: "0949052939",
  },
  {
    num: "2",
    name: "Andarge Getachew",
    class: "Grade 1 (A)",
    father: "Getachew Yohannes",
    gender: "male",
    phone: "0939052939",
  },
  {
    num: "3",
    name: "Fatuma Roba",
    class: "Grade 1 (A)",
    father: "Roba Yohannes",
    gender: "female",
    phone: "0939052939",
  },
  {
    num: "4",
    name: "Fatuma Roba",
    class: "Grade 1 (A)",
    father: "Roba Yohannes",
    gender: "female",
    phone: "0939052939",
  },
  {
    num: "5",
    name: "Fatuma Roba",
    class: "Grade 1 (A)",
    father: "Roba Yohannes",
    gender: "female",
    phone: "0939052939",
  },
  {
    num: "6",
    name: "Fatuma Roba",
    class: "Grade 1 (A)",
    father: "Roba Yohannes",
    gender: "female",
    phone: "0939052939",
  },
  {
    num: "7",
    name: "Fatuma Roba",
    class: "Grade 1 (A)",
    father: "Roba Yohannes",
    gender: "female",
    phone: "0939052939",
  },
  {
    num: "8",
    name: "Fatuma Roba",
    class: "Grade 1 (A)",
    father: "Roba Yohannes",
    gender: "female",
    phone: "0939052939",
  },
  {
    num: "9",
    name: "Fatuma Roba",
    class: "Grade 1 (A)",
    father: "Roba Yohannes",
    gender: "female",
    phone: "0939052939",
  },
  {
    num: "10",
    name: "Fatuma Roba",
    class: "Grade 1 (A)",
    father: "Roba Yohannes",
    gender: "female",
    phone: "0939052939",
  },
];
function Report() {
  const [searchedText, setSearchedText] = useState("");
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

  // ********************************************************
  // ******************************************************** *

  //  CLASS AND SECTION TABLE Column

  // ********************************************************
  // ******************************************************** *
  const classSectionColumn = [
    {
      title: "S.No",
      dataIndex: "num",
    },
    {
      title: "Grade",
      dataIndex: "grade",
      filteredValue: [searchedText],
      onFilter: (value, record) => {
        return String(record.grade).toLowerCase().includes(value.toLowerCase());
      },
    },
    {
      title: "Students",
      dataIndex: "students",
    },
    {
      title: "Action",
      width: "150px",
      render: (_, record) => {
        return (
          <>
            <Button
              onClick={showDrawer}
              type="primary"
              style={{
                width: "100px",
                backgroundColor: "#002E94",
              }}
            >
              View
            </Button>
          </>
        );
      },
    },
  ];

  // ********************************************************
  // ******************************************************** *

  //  STUDENT LIST PER CLASS TABLE COLUMNS

  // ********************************************************
  // ******************************************************** *

  const studentListColumns = [
    {
      title: "S.No",
      dataIndex: "num",
    },
    {
      title: "Student Name",
      dataIndex: "name",
      filteredValue: [searchedText],
      onFilter: (value, record) => {
        return String(record.name).toLowerCase().includes(value.toLowerCase());
      },
    },
    {
      title: "Class",
      dataIndex: "class",
    },
    {
      title: "Father Name",
      dataIndex: "father",
    },
    {
      title: "Phone Number",
      dataIndex: "phone",
    },
  ];

  return (
    <div className="subjectContainer">
      {/* ********************************************************
       ******************************************************** */}

      {/*  THE FIRST TABS 
      CLASS AND SECTION REPORT 
      THIS TABS CONTAIN A REPORT LIKE NUMBER OF CLASSES, NUMNER OF SECTION
      PER CLASS AND NUMBER OF STUDENT PER SECTION */}

      {/* *************************************************************************
       **************************************************************************/}

      <Tabs defaultActiveKey="tab1">
        <Tabs.TabPane tab="Class & Section" key="classSection">
          <div className="classSectionReportCont">
            <div className="classSectionTitle">
              <h2>Class & Section Report </h2>
            </div>
            <div className="classSectionSearch">
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
            <div className="classSectionBody">
              <Table
                columns={classSectionColumn}
                dataSource={classSectionData}
                scroll={{
                  y: 350,
                  // x: '100vw',
                }}
                style={{
                  margin: "20px",
                }}
              />

              <div>
                {/* *************************************************************************
                 **************************************************************************/}

                {/* DRAWER TO VIEW STUDENT IN A GIVEN CLASS */}

                {/* *************************************************************************
                 **************************************************************************/}

                <div className="cardDrawer">
                  <Drawer
                    mask={false}
                    placement={placement}
                    width={"calc(100% - 250px)"}
                    onClose={onClose}
                    open={open}
                    title="Student List"
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
                      <div className="drawerHeader">
                        <div className="classSectionSearch">
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
                      </div>
                      <Table
                        columns={studentListColumns}
                        dataSource={studentListData}
                        scroll={{
                          y: 350,
                          // x: '100vw',
                        }}
                        style={{
                          margin: "20px",
                        }}
                      />
                    </div>
                  </Drawer>
                </div>
              </div>
            </div>
          </div>
        </Tabs.TabPane>
        {/* SECOND TAB HERE */}
        <Tabs.TabPane tab="Offer Courses" key="courses"></Tabs.TabPane>
        <Tabs.TabPane tab="Offered Course List" key="offered"></Tabs.TabPane>
      </Tabs>
    </div>
  );
}

export default Report;
