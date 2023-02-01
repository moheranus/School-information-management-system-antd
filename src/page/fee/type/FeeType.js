import {
  Form,
  InputNumber,
  Popconfirm,
  Table,
  Typography,
  Input,
  Button,
  message,
} from "antd";
import { useState } from "react";
const originData = [
  {
    key: "1",
    name: "Admission Fee",
    feescode: "Admission-fees",
    amount: "200",
  },
  {
    key: "2",
    name: "September Month Fees",
    feescode: "sep-month-fees ",
    amount: "400",
  },
  {
    key: "3",
    name: "October Month Fees",
    feescode: "oct-month-fees ",
    amount: "500",
  },
  {
    key: "4",
    name: "November Month Fees",
    feescode: " 	nov-month-fees ",
    amount: "2300",
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

function FeeType() {
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
      title: "Fee Name",
      dataIndex: "name",
      width: "25%",
      editable: true,
      filteredValue: [searchedText],
      onFilter: (value, record) => {
        return String(record.name).toLowerCase().includes(value.toLowerCase());
      },
    },
    {
      title: "Fee Code",
      dataIndex: "feescode",
      width: "25%",
      editable: true,
    },
    {
      title: "Amount",
      dataIndex: "amount",
      width: "15%",
      editable: true,
    },

    {
      title: "operation",
      dataIndex: "operation",
      // width: "30%",
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
      width: "5%",
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
              width: "100px",
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
                style={{ backgroundColor: "#38E54D" }}
              >
                Save
              </Button>
            </div>

            <h2>Add Fees Type</h2>
            {/* <div className='classBtnTwo'>
                         <Button type='primary'>Save</Button>
                         <Button type='primary'>Add Section</Button>
                     </div> */}

            <div className="classForm"></div>
            <div className="classActions"></div>
            <div className="feetypeForm">
              <p
                style={{
                  marginLeft: "60px",
                  position: "absolute",
                  marginTop: "5px",
                  zIndex: "1",
                  background: "#fff",
                  fontSize: "19px",
                  fontFamily: "Ubuntu",
                  fontWeight: "600",
                  color: "#525e75",
                }}
              >
                Name
              </p>
              <Form.Item
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Please enter Fees name",
                  },
                ]}
              >
                <Input placeholder="Please enter Fees name" />
              </Form.Item>
              <p
                style={{
                  marginLeft: "60px",
                  position: "absolute",
                  marginTop: "5px",
                  zIndex: "1",
                  background: "#fff",
                  fontSize: "19px",
                  fontFamily: "Ubuntu",
                  fontWeight: "600",
                  color: "#525e75",
                }}
              >
                Fees Code
              </p>
              <Form.Item
                name="feescode"
                rules={[
                  {
                    required: true,
                    message: "Please enter fees code",
                  },
                ]}
              >
                <Input placeholder="Please enter Fees code" />
              </Form.Item>
              <p
                style={{
                  marginLeft: "60px",
                  position: "absolute",
                  marginTop: "5px",
                  zIndex: "1",
                  background: "#fff",
                  fontSize: "19px",
                  fontFamily: "Ubuntu",
                  fontWeight: "600",
                  color: "#525e75",
                }}
              >
                Amount
              </p>
              <Form.Item
                name="amount"
                rules={[
                  {
                    required: true,
                    message: "Please enter amount",
                  },
                ]}
              >
                <Input placeholder="Please enter amount" />
              </Form.Item>
            </div>
          </Form>
        </div>
        <div class="classList">
          <h2 style={{ marginBottom: "60px", paddingTop: "20px" }}>
            Fees type List
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
              />
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeeType;
