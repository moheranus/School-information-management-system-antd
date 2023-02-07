import {
  Row,
  Col,
  Card,
  Radio,
  Table,
  Upload,
  message,
  Progress,
  Button,
  Avatar,
  Typography,
} from "antd";

const { Title } = Typography;

// table code start
const columns = [
  {
    title: "Teacher",
    dataIndex: "name",
    key: "name",
    width: "32%",
  },
  {
    title: "STAFF",
    dataIndex: "function",
    key: "function",
  },

  {
    title: "STATUS",
    key: "status",
    dataIndex: "status",
  },
  {
    title: "EMPLOYED",
    key: "employed",
    dataIndex: "employed",
  },
];

const data = [
  {
    key: "1",
    name: (
      <>
        <Avatar.Group>
          <div className="avatar-info">
            <Title level={5}>Kasa Lamessa</Title>
            <p>kasal@mail.com</p>
          </div>
        </Avatar.Group>{" "}
      </>
    ),
    function: (
      <>
        <div className="author-info">
          <Title level={5}>Biology</Title>
        </div>
      </>
    ),

    status: (
      <>
        <Button type="primary" className="tag-primary">
          Assigned
        </Button>
      </>
    ),
    employed: (
      <>
        <div className="ant-employed">
          <span>23/04/18</span>
          <a href="#pablo">Edit</a>
        </div>
      </>
    ),
  },

  {
    key: "2",
    name: (
      <>
        <Avatar.Group>
          <div className="avatar-info">
            <Title level={5}>Alex kasa</Title>
            <p>alexa@mail.com</p>
          </div>
        </Avatar.Group>{" "}
      </>
    ),
    function: (
      <>
        <div className="author-info">
          <Title level={5}>Mathematics</Title>
        </div>
      </>
    ),

    status: (
      <>
        <Button className="tag-badge"> Not Assigned</Button>
      </>
    ),
    employed: (
      <>
        <div className="ant-employed">
          <span>23/12/20</span>
          <a href="#pablo">Edit</a>
        </div>
      </>
    ),
  },

  {
    key: "3",
    name: (
      <>
        <Avatar.Group>
          <div className="avatar-info">
            <Title level={5}>Eliyas Asefa</Title>
            <p>Eli23@mail.com</p>
          </div>
        </Avatar.Group>{" "}
      </>
    ),
    function: (
      <>
        <div className="author-info">
          <Title level={5}>Physics</Title>
        </div>
      </>
    ),

    status: (
      <>
        <Button type="primary" className="tag-primary">
          Assigned
        </Button>
      </>
    ),
    employed: (
      <>
        <div className="ant-employed">
          <span>03/04/21</span>
          <a href="#pablo">Edit</a>
        </div>
      </>
    ),
  },
  {
    key: "4",
    name: (
      <>
        <Avatar.Group>
          <div className="avatar-info">
            <Title level={5}>Fatuma Roba</Title>
          </div>
        </Avatar.Group>{" "}
      </>
    ),
    function: (
      <>
        <div className="author-info">
          <Title level={5}>civics</Title>
        </div>
      </>
    ),

    status: (
      <>
        <Button type="primary" className="tag-primary">
          Assigned
        </Button>
      </>
    ),
    employed: (
      <>
        <div className="ant-employed">
          <span>03/04/21</span>
          <a href="#pablo">Edit</a>
        </div>
      </>
    ),
  },
];
// project table start

function Teacher2() {
  const onChange = (e) => console.log(`radio checked:${e.target.value}`);

  return (
    <>
      <div className="tabled">
        <Row gutter={[24, 0]}>
          <Col xs="24" xl={24}>
            <Card
              bordered={false}
              className="criclebox tablespace mb-24"
              title="Teacher Tables"
              extra={
                <>
                  <Card
                    bordered={false}
                    className="criclebox tablespace mb-24"
                    extra={
                      <>
                        <Radio.Group onChange={onChange} defaultValue="all">
                          <Radio.Button value="all">All</Radio.Button>
                          <Radio.Button value="online">Assigned</Radio.Button>
                          <Radio.Button value="store">
                            Not Assigned
                          </Radio.Button>
                        </Radio.Group>
                      </>
                    }
                  ></Card>
                </>
              }
            >
              <div className="table-responsive">
                <Table
                  columns={columns}
                  dataSource={data}
                  pagination={false}
                  className="ant-border-space"
                />
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Teacher2;
