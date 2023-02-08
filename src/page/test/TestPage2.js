import { Table, Typography, Input, Form } from "antd";
import { useState } from "react";
const { Text } = Typography;

const markData = [
  {
    fullname: "Danie Shobe",
    ac1: 0,
    ac2: 0,
    ac3: 0,
    total: 0,
  },
  {
    fullname: "Eliyas Asefa",
    ac1: 0,
    ac2: 0,
    ac3: 0,
    total: 0,
  },
  {
    fullname: "Abraham Tare",
    ac1: 0,
    ac2: 0,
    ac3: 0,
    total: 0,
  },
];

const columns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Borrow",
    dataIndex: "borrow",
  },
  {
    title: "Repayment",
    dataIndex: "repayment",
  },
];
const data = [
  {
    key: "1",
    name: "John Brown",
    borrow: 10,
    repayment: 33,
  },
  {
    key: "2",
    name: "Jim Green",
    borrow: 100,
    repayment: 0,
  },
  {
    key: "3",
    name: "Joe Black",
    borrow: 10,
    repayment: 10,
  },
  {
    key: "4",
    name: "Jim Red",
    borrow: 75,
    repayment: 45,
  },
];

function Testpage2() {
  const [mark, setMark] = useState({
    ac1: " ",
    ac2: " ",
    ac3: " ",
    total: " ",
  });
  let total = 0;

  return (
    <Form>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        bordered
        summary={(pageData) => {
          let totalBorrow = 0;
          let totalRepayment = 0;
          pageData.forEach(({ borrow, repayment }) => {
            totalBorrow += borrow;
            totalRepayment += repayment;
          });
          return (
            <>
              <Table.Summary.Row>
                <Table.Summary.Cell index={0}>Total</Table.Summary.Cell>
                <Table.Summary.Cell index={1}>
                  <Text type="danger">{totalBorrow}</Text>
                </Table.Summary.Cell>
                <Table.Summary.Cell index={2}>
                  <Text>{totalRepayment}</Text>
                </Table.Summary.Cell>
              </Table.Summary.Row>
              <Table.Summary.Row>
                <Table.Summary.Cell index={0}>Balance</Table.Summary.Cell>
                <Table.Summary.Cell index={1} colSpan={2}>
                  <Text type="danger">{totalBorrow - totalRepayment}</Text>
                </Table.Summary.Cell>
              </Table.Summary.Row>
            </>
          );
        }}
      />

      <br />
      <Table
        columns={[
          {
            title: "Full Name",
            dataIndex: "fullname",
          },
          {
            title: "AC1",
            dataIndex: "ac1",
            render: () => {
              return (
                <Form.Item
                  value={mark.ac1}
                  onChange={(e) => setMark({ ac1: e.target.value })}
                >
                  <Input />
                </Form.Item>
              );
            },
          },
          {
            title: "AC2",
            dataIndex: "ac2",
            render: () => {
              return (
                <Form.Item
                  value={mark.ac2}
                  onChange={(e) => setMark({ ac2: e.target.value })}
                >
                  <Input />
                </Form.Item>
              );
            },
          },
          {
            title: "AC3",
            dataIndex: "ac3",
            render: () => {
              return (
                <Form.Item
                  value={mark.ac3}
                  onChange={(e) => setMark({ ac3: e.target.value })}
                >
                  <Input />
                </Form.Item>
              );
            },
          },
          {
            title: "Total",
            dataIndex: "total",
          },
        ]}
        dataSource={markData}
      />
      {/* <h2>here is the mark{mark.ac1 + mark.ac2}</h2> */}
      <h2>here is it {total}</h2>
    </Form>
  );
}
export default Testpage2;
