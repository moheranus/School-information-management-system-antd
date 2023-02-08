import { Button, Select, Table, Tag, Space } from "antd";
import React from "react";
import "./Student2.css";
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
function Student2() {
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
  ];
  return (
    <>
      <div className="studentPromo">
        <p className="promTitle">Search Student Promotion</p>
        <div className="promoAction">
          <div>
            <p>
              Current Session <span>*</span>
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
              Promote Session <span>*</span>
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
              Promotion from Class <span>*</span>
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
              Promotion To Class <span>*</span>
            </p>
            <Select
              defaultValue="Grade 2"
              // style={{
              //   width: 320,
              // }}
              onChange={handleChange}
              options={[
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
              ]}
            />
          </div>
        </div>
        <div className="promBtn">
          <Button
            type="primary"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "25px 40px",
              fontSize: "25px",
              background: "#03C988",
            }}
          >
            Save
          </Button>
          <Button
            type="primary"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "25px 40px",
              fontSize: "25px",
              marginLeft: "25px",
            }}
          >
            Reset
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
    </>
  );
}

export default Student2;
// i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
