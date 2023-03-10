import { Routes, Route, useNavigate } from "react-router-dom";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  LineChartOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import React, { useState } from "react";
import "./Layout.css";
import { MdDashboard } from "react-icons/md";
import { FaUserGraduate } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";
import { SiMicrosoftacademic } from "react-icons/si";
import { RiMoneyDollarBoxFill } from "react-icons/ri";
import { AiOutlineSchedule } from "react-icons/ai";
import Registration from "../../page/student/registration/Registration";
import StudentDetail from "../../page/student/studentDetail/StudentDetail";
import ViewStudent from "../../page/student/studentDetail/viewStudent/ViewStudent";
import EditStudent from "../../page/student/editStudent/EditStudent";
import ClassTimeTable from "../../page/academics/classTimeTable/ClassTimeTable";
import Class from "../../page/academics/class/Class";
import TestPage from "../../page/test/TestPage";
import AttendanceSheet from "../../page/attendance/AttendanceSheet";
import PersonalAttendance from "../../page/attendance/PersonalAttendance";
import Fee from "../../page/fee/Fee";
import CollectFee from "../../page/fee/collect/CollectFee";
import FeeType from "../../page/fee/type/FeeType";
import Mark from "../../page/mark/Mark";
import Subject from "../../page/subject/Subject";
import TestPage2 from "../../page/test/TestPage2";
import Teacher from "../../page/teacher/Teacher";
import Teacher2 from "../../page/teacher/Teacher2";
import Report from "../../page/totalReport/studentInfo/Report";
import ClassSection from "../../page/totalReport/classSection/ClassSection";
import Schedule from "../../page/exam/examSchedule/Schedule";
import Registration2 from "../../page/student/registration/Registration2";
import Report2 from "../../page/report/Report2";
import Student2 from "../../page/student/student2/Student2";
import Register from "../../page/student/student2/register/Register";
import ReportCard from "../../page/mark/mark2/ReportCard";
import StudentPerformance from "../../page/admin/performance/StudentPerformance";
import Report3 from "../../page/report/Report3";

const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem("Dashboard", "sub1", <MdDashboard />, [
    getItem("Admin Dashboard", "3"),
    getItem("Teacher Dashboard", "4"),
    getItem("Student Dashboard", "5"),
    getItem("Student performance", "/performance"),
  ]),
  getItem("Student", "sub2", <FaUserGraduate />, [
    getItem("Registration", "/registration"),
    getItem("Registration2", "/reg2"),
    getItem("Student Detail", "/studentdetail"),
    getItem("Promotion", "/student2"),
    getItem(" Course Registration", "/courseregister"),
  ]),
  getItem("Teacher", "sub3", <FaChalkboardTeacher />, [
    getItem("Add Teacher", "/addteacher"),
    getItem("Assign Teacher", "/assignteacher"),
    getItem("Teacher 2", "/teacher2"),
  ]),
  getItem("Academics", "sub4", <SiMicrosoftacademic />, [
    getItem("Class Timetable", "/classtimetable"),
    getItem("Teacher Timetable", "14"),
    getItem("Class", "/class"),
    getItem("Subject", "/subject"),
    // getItem("Section", "11"),
  ]),
  getItem("Attendance", "sub6", <FaUserCheck />, [
    getItem("Attendance Sheet", "/attendancesheet"),
    getItem("Personal Report", "/personalattendance"),
  ]),
  getItem("Fee", "sub7", <RiMoneyDollarBoxFill />, [
    getItem("Collect Fees", "/fee"),
    getItem("Fees Type", "/feetype"),
  ]),
  getItem("Mark", "sub8", <RiMoneyDollarBoxFill />, [
    getItem("Mark Sheet", "/mark"),
    getItem("Report Card", "/reportcard"),
  ]),
  getItem("Report", "sub9", <LineChartOutlined />, [
    getItem("Student Report", "/report"),
    getItem("Report2", "/report2"),
    getItem("Report3", "/report3"),
  ]),
  getItem("Exam", "sub10", <AiOutlineSchedule />, [
    getItem("Exam Schedule", "/schedule"),
    getItem("m", "/sc"),
  ]),
];
function Layouts() {
  const navigate = useNavigate();
  const [marginLeft, setMarginLeft] = useState(200);
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <div className="layoutCon">
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          style={{
            position: "fixed",
            height: "100vh",
            left: 0,
            top: 0,
            bottom: 0,
            overflow: "auto",
          }}
        >
          <div
            style={{
              height: 32,
              margin: 16,
              background: "rgba(255, 255, 255, 0.2)",
            }}
          />

          <Menu
            onClick={({ key }) => {
              if (key === "signout") {
                // signout features here
              } else {
                navigate(key);
              }
            }}
            theme="dark"
            defaultSelectedKeys={["1"]}
            mode="inline"
            items={items}
          />
        </Sider>
        <Layout
          className="site-layout"
          style={{
            marginLeft: marginLeft,
          }}
        >
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
              position: "sticky",
              zIndex: "10",
              top: 0,
            }}
          >
            {" "}
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: () => {
                  setCollapsed(!collapsed);
                  if (collapsed === false) {
                    setMarginLeft(80);
                  } else {
                    setMarginLeft(200);
                  }
                },
              }
            )}
          </Header>
          <Content
            style={{
              margin: "0 16px",
            }}
          >
            <div>
              <br />
            </div>
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
              }}
            >
              <Contents />
            </div>
          </Content>
          <Footer
            style={{
              textAlign: "center",
            }}
          >
            {/* School management system */}
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
}
function Contents() {
  return (
    <div>
      <Routes>
        <Route path="/registration" element={<Registration />} />
        <Route path="/studentdetail" element={<StudentDetail />} />
        <Route path="/viewstudent" element={<ViewStudent />} />
        <Route path="/editstudent" element={<EditStudent />} />
        <Route path="/classtimetable" element={<ClassTimeTable />} />
        <Route path="/class" element={<Class />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/test2" element={<TestPage2 />} />
        <Route path="/attendancesheet" element={<AttendanceSheet />} />
        <Route path="/personalattendance" element={<PersonalAttendance />} />
        <Route path="/fee" element={<Fee />} />
        <Route path="/collectfee" element={<CollectFee />} />
        <Route path="/feetype" element={<FeeType />} />
        <Route path="/mark" element={<Mark />} />
        <Route path="/subject" element={<Subject />} />
        <Route path="/addteacher" element={<Teacher />} />
        <Route path="/report" element={<Report />} />
        <Route path="/classsection" element={<ClassSection />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/reg2" element={<Registration2 />} />
        <Route path="/report2" element={<Report2 />} />
        <Route path="/teacher2" element={<Teacher2 />} />
        <Route path="/student2" element={<Student2 />} />
        <Route path="/courseregister" element={<Register />} />
        <Route path="/reportcard" element={<ReportCard />} />
        <Route path="/performance" element={<StudentPerformance />} />
        <Route path="/report3" element={<Report3 />} />
      </Routes>
    </div>
  );
}
export default Layouts;
