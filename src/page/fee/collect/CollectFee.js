import { useState } from "react";
import "./CollectFee.css";
import { ArrowLeftOutlined } from "@ant-design/icons";
import studentImage from "../../../assets/img/teacher2.svg";
import { Link } from "react-router-dom";
import {
  Form,
  Input,
  Button,
  Select,
  Drawer,
  Table,
  Tag,
  Row,
  Col,
} from "antd";

// Usage
const { Option } = Select;
const data = [
  {
    feescode: "admission-fees",
    duedate: "04/01/2022 ",
    status: "paid",
    amount: "200",
    paid: "150",
    balance: "4000",
  },
  {
    feescode: "may-month-fees",
    duedate: "04/01/2022 ",
    amount: "2500",
    status: "Not Paid",
    paid: "150",
    balance: "4000",
  },
  {
    feescode: "jun-month-fees",
    duedate: "04/01/2022 ",
    amount: "2500",
    status: "Not Paid",
    paid: "150",
    balance: "4000",
  },
  {
    feescode: "jul-month-fees",
    duedate: "04/01/2022 ",
    amount: "2500",
    status: "Not Paid",
    paid: "150",
    balance: "4000",
  },
];
function CollectFee() {
  const [form] = Form.useForm();
  const feeType = Form.useWatch("feeType", form);
  const [openFeeDrawer, setOpenFeeDrawer] = useState(false);
  const showFeeDrawer = () => {
    setOpenFeeDrawer(true);
  };
  const onCloseFeeDrawer = () => {
    setOpenFeeDrawer(false);
  };
  const columns = [
    {
      title: "Fees Code",
      dataIndex: "feescode",
      // width: 200,
    },
    {
      title: "Due Date",
      dataIndex: "duedate",
      // width: 200,
    },
    {
      title: "Status",
      dataIndex: "status",
      // width: 120,
      render: (value, record) => {
        if (value === "Not Paid") {
          return (
            <>
              <Tag color="red">Not Paid</Tag>
            </>
          );
        } else {
          return <Tag color="green">Paid</Tag>;
        }
      },
    },
    {
      title: "Amount",
      dataIndex: "amount",
      // width: 120,
    },
    {
      title: "Paid",
      dataIndex: "paid",

      // width: 120,
    },
    {
      title: "Balance",
      dataIndex: "balance",
    },
    {
      title: "Action",
      dataIndex: "key",
      // width: 200,
      render: (_, record) => {
        return (
          <>
            <Button
              type="primary"
              style={{
                width: "100px",
                backgroundColor: "#002E94",
              }}
              onClick={showFeeDrawer}
            >
              Collect fees
            </Button>
          </>
        );
      },
    },
  ];
  return (
    <div className="collectClass">
      <div class="feeHeader">
        <div className="titleandBtn">
          <div className="feeTitle">
            <h2>Student Fees</h2>
          </div>
          <div className="feeBackBtn">
            <Button
              icon={<ArrowLeftOutlined />}
              type="primary"
              style={{
                padding: "20px 20px",
                fontSize: "17px",
                fontFamily: "ubuntu",
                fontWeight: "600",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "#332FD0",
              }}
            >
              <Link to="/fee">Back</Link>
            </Button>
          </div>
        </div>
        <div className="feeInfo">
          <div className="info1">
            <div className="feeImage">
              <img src={studentImage} alt="studentphoto" />
            </div>
          </div>
          <div className="info1">
            <h3>Name</h3>
            <h3>Father Name</h3>
            <h3>Mobile Number</h3>
          </div>
          <div className="info1">
            <h3>Yonas Alemu</h3>
            <h3>Alemu Ingida</h3>
            <h3>0945349878</h3>
          </div>
          <div className="info1">
            <h3>Class</h3>
            <h3>Section</h3>
            <h3>Roll Number</h3>
          </div>
          <div className="info1 infoLast">
            <h3>Grade 4</h3>
            <h3>Section A</h3>
            <h3>34</h3>
          </div>
        </div>
      </div>
      <div className="collectFeeDrawer">
        <Drawer
          title="Collect Fee"
          placement="right"
          width={500}
          onClose={onCloseFeeDrawer}
          open={openFeeDrawer}
          className="cashbank"
        >
          <Form layout="vertical" hideRequiredMark form={form}>
            <Form.Item name={"feeType"} className="cashbank">
              <Select
                placeholder="Please choose payment type "
                name={"feeType"}
              >
                <Option value="cash">Cash</Option>
                <Option value="bank">Bank Transfer</Option>
              </Select>
            </Form.Item>
            {feeType === "cash" ? (
              <Form.Item>
                <Input defaultValue={"300 Birr"} />
              </Form.Item>
            ) : null}
            {feeType === "bank" ? (
              <Form.Item>
                <Input placeholder="Please Enter transaction Id" />
              </Form.Item>
            ) : null}

            <Button
              htmlType="submit"
              type="primary"
              block
              style={{
                float: "right",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#3EC70B",
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
      </div>
      <div class="feeTables">
        <Table
          columns={columns}
          dataSource={data}
          scroll={{
            y: 300,
            // x: '100vw',
          }}
        />
      </div>
    </div>
  );
}

export default CollectFee;
