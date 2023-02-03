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

// CLASS AND SUBECT REPORT TABLE DATA IS HERE

//******************************************************** *

const classSubjectData = [
  {
    num: "1",
    grade: "Grade 1",
    section: " Section (A)",
    subject: "English",
    teacher: "Solomon Tesfaye",
    time: (
      <div className="subjectTimeList">
        <ul>
          <li>Monday 8:30 AM To 9:30 AM</li>
          <li>Tuesday 9:00 AM To 10:00 AM</li>
          <li>Thursday 9:30 AM To 10:30 AM</li>
          <li>Friday 8:00 AM To 9:00 AM</li>
          <li>Friday 8:00 AM To 9:00 AM</li>
        </ul>
      </div>
    ),
    room: "102",
  },
  {
    num: "2",
    grade: "Grade 1",
    section: " Section (A)",
    subject: "Mathematics",
    teacher: "Igida Arega",
    time: (
      <div className="subjectTimeList">
        <ul>
          <li>Monday 9:30 AM To 10:30 AM</li>
          <li>Tuesday 9:30 AM To 10:30 AM</li>
          <li>Thursday 9:30 AM To 10:30 AM</li>
          <li>Friday 9:30 AM To 10:30 AM</li>
          <li>Friday 9:30 AM To 10:30 AM</li>
        </ul>
      </div>
    ),
    room: "103",
  },
  {
    num: "3",
    grade: "Grade 1",
    section: " Section (A)",
    subject: "General Science",
    teacher: "John Fenta",
    time: (
      <div className="subjectTimeList">
        <ul>
          <li>Monday 10:30 AM To 11:30 AM</li>
          <li>Tuesday 10:30 AM To 11:30 AM</li>
          <li>Thursday 10:30 AM To 11:30 AM</li>
          <li>Friday 10:30 AM To 11:30 AM</li>
          <li>Friday 10:30 AM To 11:30 AM</li>
        </ul>
      </div>
    ),
    room: "103",
  },
  {
    num: "4",
    grade: "Grade 1",
    section: " Section (B)",
    subject: "General Science",
    teacher: "Kasa Debisa",
    time: (
      <div className="subjectTimeList">
        <ul>
          <li>Monday 10:30 AM To 11:30 AM</li>
          <li>Tuesday 10:30 AM To 11:30 AM</li>
          <li>Thursday 10:30 AM To 11:30 AM</li>
          <li>Friday 10:30 AM To 11:30 AM</li>
          <li>Friday 10:30 AM To 11:30 AM</li>
        </ul>
      </div>
    ),
    room: "104",
  },
  {
    num: "5",
    grade: "Grade 1",
    section: " Section (B)",
    subject: "Mathematics",
    teacher: "Demeke Ingida",
    time: (
      <div className="subjectTimeList">
        <ul>
          <li>Monday 10:30 AM To 11:30 AM</li>
          <li>Tuesday 10:30 AM To 11:30 AM</li>
          <li>Thursday 10:30 AM To 11:30 AM</li>
          <li>Friday 10:30 AM To 11:30 AM</li>
          <li>Friday 10:30 AM To 11:30 AM</li>
        </ul>
      </div>
    ),
    room: "104",
  },
  {
    num: "6",
    grade: "Grade 1",
    section: " Section (B)",
    subject: "english",
    teacher: "Fantahun Diriba",
    time: (
      <div className="subjectTimeList">
        <ul>
          <li>Monday 10:30 AM To 11:30 AM</li>
          <li>Tuesday 10:30 AM To 11:30 AM</li>
          <li>Thursday 10:30 AM To 11:30 AM</li>
          <li>Friday 10:30 AM To 11:30 AM</li>
          <li>Friday 10:30 AM To 11:30 AM</li>
        </ul>
      </div>
    ),
    room: "104",
  },
  {
    num: "7",
    grade: "Grade 2",
    section: " Section (A)",
    subject: "Mathematics",
    teacher: "Demeke Ingida",
    time: (
      <div className="subjectTimeList">
        <ul>
          <li>Monday 10:30 AM To 11:30 AM</li>
          <li>Tuesday 10:30 AM To 11:30 AM</li>
          <li>Thursday 10:30 AM To 11:30 AM</li>
          <li>Friday 10:30 AM To 11:30 AM</li>
          <li>Friday 10:30 AM To 11:30 AM</li>
        </ul>
      </div>
    ),
    room: "104",
  },
  {
    num: "8",
    grade: "Grade 2",
    section: " Section (B)",
    subject: "Mathematics",
    teacher: "Demeke Ingida",
    time: (
      <div className="subjectTimeList">
        <ul>
          <li>Monday 10:30 AM To 11:30 AM</li>
          <li>Tuesday 10:30 AM To 11:30 AM</li>
          <li>Thursday 10:30 AM To 11:30 AM</li>
          <li>Friday 10:30 AM To 11:30 AM</li>
          <li>Friday 10:30 AM To 11:30 AM</li>
        </ul>
      </div>
    ),
    room: "104",
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
//* ********************************************************

//STUDENT TEACHER RATIO TABLE DATA IS HERE

//******************************************************** *

const studentTeacherRatioData = [
  {
    grade: " Grade 1",
    section: "A",
    totalStudent: "18",
    totalTeacher: "2",
    ratio: "1:0.11",
  },
  {
    grade: " Grade 1",
    section: "B",
    totalStudent: "3",
    totalTeacher: "2",
    ratio: "1:0.67",
  },
  {
    grade: " Grade 2",
    section: "A",
    totalStudent: "14",
    totalTeacher: "2",
    ratio: "1:0.11",
  },
  {
    grade: " Grade 2",
    section: "B",
    totalStudent: "18",
    totalTeacher: "2",
    ratio: "1:0.11",
  },
  {
    grade: " Grade 3",
    section: "A",
    totalStudent: "18",
    totalTeacher: "2",
    ratio: "1:0.11",
  },
];
function Report() {
  const [searchedText, setSearchedText] = useState("");
  const [searchedClassSubjectText, setSearchedClassSubjectText] = useState("");
  const [searchStudentTeacherRatio, setSearchStudentTeacherRatio] =
    useState("");
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
                backgroundColor: "#4096ff;",
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

  // ********************************************************
  // ******************************************************** *

  //  CLASS AND SUBJECT COLUMNS IS HERE

  // ********************************************************
  // ******************************************************** *
  const classSubjectColumns = [
    {
      title: "S.No",
      dataIndex: "num",
      width: "100px",
    },
    {
      title: "Grade",
      dataIndex: "grade",
      // width: "10%",
      filteredValue: [searchedClassSubjectText],
      onFilter: (value, record) => {
        return String(record.grade).toLowerCase().includes(value.toLowerCase());
      },
    },
    {
      title: "Section",
      dataIndex: "section",
      width: "15%",
    },
    {
      title: "Subject",
      dataIndex: "subject",
      // width: "10%",
    },
    {
      title: "Teacher",
      dataIndex: "teacher",
      // width: "15%",
    },
    {
      title: "Time",
      dataIndex: "time",
      width: "25%",
    },
    {
      title: "Room No",
      dataIndex: "room",
      width: "100px",
    },
  ];

  // ********************************************************
  // ******************************************************** *

  //  STUDENT AND TEACHER RATIO REPORT TABLE COLUMN IS  HERE

  // ********************************************************
  // ******************************************************** *

  const studentTeacherRatioColumns = [
    {
      title: "Grade",
      dataIndex: "grade",
      filteredValue: [searchStudentTeacherRatio],
      onFilter: (value, record) => {
        return String(record.grade).toLowerCase().includes(value.toLowerCase());
      },
    },

    {
      title: "Section",
      dataIndex: "section",
    },
    {
      title: "Total Student",
      dataIndex: "totalStudent",
    },
    {
      title: "Total Assigned Teacher",
      dataIndex: "totalTeacher",
    },
    {
      title: "Student-Teacher Ratio",
      dataIndex: "ratio",
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
                  y: 400,
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
                          y: 450,
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
        {/* *************************************************************************
         **************************************************************************/}

        {/* THE SECOND TABS WHICH CONTAINS INFORMATION LIKE
                CLASS, SECTION, SUBJECT, TEACHER, TIME , AND ROOM
             */}

        {/* *************************************************************************
         **************************************************************************/}
        <Tabs.TabPane tab="Class & Subject" key="subject">
          <div className="classSectionReportCont">
            <div className="classSectionTitle">
              <h2>Class & Subject Report </h2>
            </div>
            <div className="classSectionSearch">
              <Input.Search
                placeholder="Search here... eg type 2 for grade 2"
                style={{
                  marginLeft: "20px",
                  width: "30%",
                  marginBottom: "10px",
                }}
                onSearch={(value) => {
                  setSearchedClassSubjectText(value);
                }}
                onchange={(e) => {
                  setSearchedClassSubjectText(e.target.value);
                }}
              />
            </div>
            <div className="classSectionBody">
              <Table
                columns={classSubjectColumns}
                dataSource={classSubjectData}
                scroll={{
                  y: 450,
                  // x: '100vw',
                }}
                style={{
                  margin: "20px",
                }}
              />
            </div>
          </div>
        </Tabs.TabPane>
        {/* *************************************************************************
         **************************************************************************/}

        {/* THE THIRD TABS WHICH CONTAINS INFORMATION LIKE
               STUDENT TO TEACHER RATIO
             */}

        {/* *************************************************************************
         **************************************************************************/}
        <Tabs.TabPane tab="Student Teacher Ratio" key="studentTeacher">
          <div className="classSectionReportCont">
            <div className="classSectionTitle">
              <h2>Students Teacher Ratio Report</h2>
            </div>
            <div className="classSectionSearch">
              <Input.Search
                placeholder="Search here... eg type 2 for grade 2"
                style={{
                  marginLeft: "20px",
                  width: "30%",
                  marginBottom: "10px",
                }}
                onSearch={(value) => {
                  setSearchStudentTeacherRatio(value);
                }}
                onchange={(e) => {
                  setSearchStudentTeacherRatio(e.target.value);
                }}
              />
            </div>
            <div className="classSectionBody">
              <Table
                columns={studentTeacherRatioColumns}
                dataSource={studentTeacherRatioData}
                scroll={{
                  y: 450,
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
  );
}

export default Report;
