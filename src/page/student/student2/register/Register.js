import { Button, Select, Table, Tag, Form, Input, Drawer } from "antd";
import { useState } from "react";
import "./Register.css";
const { Option } = Select;
const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const data = [
  {
    key: "0",
    fname: "Tesema",
    lname: "Geleta",
    gender: "Male",
    grade: " Grade 1",
    section: "A",
    session: "2014-2015",
    tags: ["Promoted"],
  },
  {
    key: "1",
    fname: "Tesema",
    lname: "Jote",
    gender: "Male",
    grade: " Grade 1",
    section: "A",
    session: "2014-2015",
    tags: ["Failed"],
  },
  {
    key: "2",
    fname: "Robe",
    lname: "Jalata",
    grade: "Grade 1",
    section: "A",
    gender: "Female",
    session: "2014-2015",
    tags: ["Promoted"],
  },
  {
    key: "3",
    fname: "Daniel",
    lname: "Shobe",
    gender: "Male",
    grade: "Grade 1",
    section: "A",
    session: "2014-2015",
    tags: ["failed"],
  },
];
function Register() {
  const [courseDrawer, setCourseDrawer] = useState(false);
  const showCourseDrawer = () => {
    setCourseDrawer(true);
  };
  const onCloseCourseDrawer = () => {
    setCourseDrawer(false);
  };
  const columns = [
    {
      title: " First Name",
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
    {
      title: "Session",
      dataIndex: "session",
    },
    {
      title: "Status",
      // key: "tags",
      dataIndex: "staus",
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
    },
    {
      title: "Action",
      dataIndex: "action",
      render() {
        return (
          <>
            <Button
              onClick={showCourseDrawer}
              type="primary"
              style={{
                background: "rgb(3, 201, 136)",
              }}
            >
              register
            </Button>
          </>
        );
      },
    },
  ];
  return (
    <>
      <div className="studentPromot">
        <div className="titleRibon">
          <p className="promTitles">Student Course Registration</p>
        </div>

        <div className="promoActions">
          <div>
            <p>
              Session <span>*</span>
            </p>
            <Select
              defaultValue="2014-2015"
              // style={{
              //   width: 320,
              // }}
              onChange={handleChange}
              options={[
                {
                  value: "2014-2015",
                  label: "2014-2015",
                },
                {
                  value: "2015-2016",
                  label: "2015-2016",
                },
                {
                  value: "2016-2017",
                  label: "2017-2018",
                },
              ]}
            />
          </div>

          <div>
            <p>
              Select Grade <span>*</span>
            </p>
            <Select
              defaultValue="Grade 1"
              // style={{
              //   width: 320,
              // }}
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
              ]}
            />
          </div>
          <div>
            <p>
              Select Section<span>*</span>
            </p>
            <Select
              defaultValue="A"
              // style={{
              //   width: 320,
              // }}
              onChange={handleChange}
              options={[
                {
                  value: "section A",
                  label: "Section A",
                },
                {
                  value: "section B",
                  label: "Section B",
                },
                {
                  value: "section C",
                  label: "Section C",
                },
              ]}
            />
          </div>
          <div>
            <p>
              Search by name<span>*</span>
            </p>
            <Form.Item>
              <Input placeholder="daniel shobe" />
            </Form.Item>
          </div>
          <Button
            type="primary"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "25px 40px",
              fontSize: "25px",
              background: "#03C988",
              marginTop: "20px",
            }}
          >
            Search
          </Button>
        </div>
      </div>
      <div className="promoTable">
        <Table
          scroll={{
            y: 500,
          }}
          columns={columns}
          dataSource={data}
        />
      </div>
      <Drawer
        title="Student Course Registration"
        placement="right"
        width={500}
        onClose={onCloseCourseDrawer}
        open={courseDrawer}
        className="cashbank"
      >
        <Form>
          <Form
            className="studCourseReg"
            style={{
              marginBottom: "22px",
            }}
          >
            <Input placeholder="First Name" />
          </Form>
          <Form
            className="studCourseReg"
            style={{
              marginBottom: "22px",
            }}
          >
            <Input placeholder="Last Name" />
          </Form>
          <Form.Item className="studCourseReg">
            <Select placeholder="Please Gender">
              <Option value="female">Female</Option>
              <Option value="male">Male</Option>
            </Select>
          </Form.Item>
          <Form.Item className="studCourseReg">
            <Select placeholder="Please Select Grade">
              <Option value="grade 2">Grade 2</Option>
              <Option value="grade 3">Grade 3</Option>
              <Option value="grade 4">Grade 4</Option>
              <Option value="grade 5">Grade 5</Option>
              <Option value="grade 6">Grade 6</Option>
              <Option value="grade 7">Grade 7</Option>
              <Option value="grade 8">Grade 8</Option>
            </Select>
          </Form.Item>
          <Form.Item className="studCourseReg">
            <Select placeholder="Please Select Selection">
              <Option value="section A">Section A</Option>
              <Option value="section B">Section B</Option>
              <Option value="section C">Section C</Option>
              <Option value="section D">Section D</Option>
              <Option value="section E">Section E</Option>
            </Select>
          </Form.Item>

          <Button
            htmlType="submit"
            type="primary"
            block
            style={{
              float: "right",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#03C988",
              width: "100%",
              padding: "20px",
              fontSize: "17px",
              fontWeight: "600",
              fontFamily: "Ubuntu",
            }}
          >
            Submit
          </Button>
        </Form>
      </Drawer>
    </>
  );
}

export default Register;
