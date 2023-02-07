import React from "react";
import "./Registration2.css";
import {
  Button,
  Form,
  message,
  Steps,
  theme,
  Input,
  Select,
  DatePicker,
  Upload,
} from "antd";
import { useState } from "react";
import ImgCrop from "antd-img-crop";
import {
  DownCircleOutlined,
  PlusOutlined,
  ExclamationCircleFilled,
} from "@ant-design/icons";
const { Step } = Steps;
// const { Form.Item } = Form;

const steps = [
  {
    title: "First",
    // content: "First-content",
  },
  {
    title: "Second",
    // content: "Second-content",
  },
  {
    title: "Last",
    // content: "Last-content",
  },
  {
    title: "Last",
    // content: "Last-content",
  },
];
function Registration2() {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const [formData, setFormData] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [gardianFname, setGardianFname] = useState("");
  const [gardianEmail, setGardianEmail] = useState("");
  const [gardianLname, setgardianLname] = useState("");
  const [gardianphone, setGardianPhone] = useState("");
  const [city, setCity] = useState("");
  const [kebele, setKebele] = useState("");
  const [street, setStreet] = useState("");
  const [housenumber, setHouseNumber] = useState("");
  const [grade, setGrade] = useState("");
  const [section, setSection] = useState("");
  const [gender, setGender] = useState("");
  const [siblingfname, setSiblingfname] = useState("");
  const [siblinglname, setSiblinglname] = useState("");
  const [siblingemail, setSiblingemail] = useState("");
  const [siblingphone, setSiblingphone] = useState("");
  const [siblingsection, setSiblingSection] = useState("");
  const [siblinggrade, setSiblingGrade] = useState("");
  const [siblingbirth, setSiblingBirth] = useState("");
  const [siblinggender, setSiblingGender] = useState("");
  const [siblingInfo, setSiblingInfo] = useState(
    <Button
      icon={<PlusOutlined />}
      type="primary"
      block
      onClick={() => {
        add();
      }}
      style={{
        position: "relative",
        background: "#042954",
        width: "90%",
        marginLeft: "5%",
        fontSize: "22px",
        fontFamily: "poppins",
        paddingTop: " 25px",
        paddingBottom: "25px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      Add Siblings
    </Button>
  );

  const [form] = Form.useForm();

  // UPLOAD PROFILE IMAGE USESATE STARTS HERE

  const [fileList, setFileList] = useState([
    {
      uid: "-1",
      name: "image.png",
      status: "done",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
  ]);
  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };
  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  // UPLOAD PROFILE IMAGE USESTATE ENDS HERE

  // Case: Submit button out of Form
  const handleFormSubmit = () => {
    // form
    //   .validateFields()
    //   .then((values) => {
    //     // Submit values
    //     // submitValues(values);
    //     console.log("Success:", values);
    //   })
    //   .catch((errorInfo) => {
    //     console.log("error");
    //   });
  };
  const handleClickNext = () => {
    form
      .validateFields()
      .then(() => {
        // Here make api call of something else
        setCurrent(current + 1);
      })
      .catch((err) => console.log(err));
  };

  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const add = () => {
    const siblingInfoormation = (
      <>
        <div className="profileCards">
          <div className="title">
            <h2>Add Sibling Information</h2>
          </div>

          <div className="body">
            <div className="siblingPhoto">
              {/* ANTD IMAGE */}
              <ImgCrop rotate>
                <Upload
                  maxCount={1}
                  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                  listType="picture-card"
                  // fileList={fileList}
                  onChange={onChange}
                  onPreview={onPreview}
                >
                  {fileList.length <= 1 && "+ Upload Sibling Profile Image"}
                </Upload>
              </ImgCrop>
            </div>
            <br />
            <div className="siblingInput">
              <div className="wrapform">
                <p>
                  First Name <span>*</span>
                </p>
                <Form.Item
                  name="sibilingfname"
                  rules={[
                    {
                      message: "Please input enter student first name!",
                    },
                  ]}
                >
                  <Input
                    onChange={(e) => {
                      setSiblingfname({
                        siblingfname: e.target.value,
                      });
                    }}
                    placeholder="First Name"
                  />
                </Form.Item>
              </div>
              <p>
                Last Name <span>*</span>
              </p>
              <Form.Item
                name="siblinglname"
                rules={[
                  {
                    message: "Please input enter student last name!",
                  },
                ]}
              >
                <Input
                  onChange={(e) => {
                    setSiblinglname({
                      siblinglname: e.target.value,
                    });
                  }}
                  placeholder="Last Name"
                />
              </Form.Item>
              <p>
                Email Address <span>*</span>
              </p>
              <Form.Item
                name="siblingemail"
                rules={[
                  {
                    message: "Please input enter student email!",
                  },
                ]}
              >
                <Input
                  onChange={(e) => {
                    setSiblingemail({
                      siblingemail: e.target.value,
                    });
                  }}
                  placeholder="Email Address"
                />
              </Form.Item>
              <p>
                Phone Number <span>*</span>
              </p>
              <Form.Item
                name="siblingphone"
                rules={[
                  {
                    message: "Please input enter student phone!",
                  },
                ]}
              >
                <Input
                  onSelect={(e) => {
                    setSiblingphone({
                      siblingphone: e,
                    });
                  }}
                  placeholder="Phone number"
                />
              </Form.Item>
              <p>
                Gender <span>*</span>
              </p>
              <Form.Item name="siblinggender">
                <Select
                  onChange={(e) => {
                    setSiblingGender({
                      siblinggender: e,
                    });
                  }}
                  placeholder="Select student gender"
                  size="large"
                  style={{
                    width: "100%",
                  }}
                  // onChange={handleChange}
                  options={[
                    {
                      value: "female",
                      label: "Female",
                    },
                    {
                      value: "male",
                      label: "Male",
                    },
                    {
                      value: "other",
                      label: "Other",
                    },
                  ]}
                />
              </Form.Item>
              <Form.Item name="siblingdateofbirth">
                <p>Date Of Birth</p>
                <DatePicker
                  style={{
                    width: "100%",
                    height: "50px",
                    fontSize: "20px",
                    // marginTop: "17px",
                    // border: "2px solid #5b5f97",
                  }}
                  required
                  onChange={(text, index) => {
                    console.log(index.children);
                  }}
                />
              </Form.Item>
              <p>
                Grade <span>*</span>
              </p>
              <Form.Item name="siblinggrade">
                <Select
                  onSelect={(value) => {
                    setSiblingGrade({
                      siblinggrade: value,
                    });
                  }}
                  placeholder="Please Select Grade"
                  style={{
                    width: "100%",
                  }}
                  // onChange={handleChange}
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
                    {
                      value: "Grade 4",
                      label: "Grade 4",
                    },
                    {
                      value: "Grade 5",
                      label: "Grade 5",
                    },
                  ]}
                />
              </Form.Item>
              <p>
                Section <span>*</span>
              </p>
              <Form.Item name="siblingsection">
                <Select
                  placeholder="Please Select Section"
                  style={{
                    width: "100%",
                  }}
                  onSelect={(value) => {
                    setSiblingSection({
                      siblingsection: value,
                    });
                  }}
                  // onChange={handleChange}
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
                    {
                      value: "section D",
                      label: "Section D",
                    },
                    {
                      value: "section E",
                      label: "Section E",
                    },
                  ]}
                />
              </Form.Item>

              <br />
            </div>
          </div>
        </div>
      </>
    );
    setSiblingInfo(siblingInfoormation);
  };
  return (
    <Form
      form={form}
      onFinish={(values) => {
        const data = [
          firstName,
          lastName,
          phone,
          email,
          gardianFname,
          gardianLname,
          gardianEmail,
          gardianphone,
          city,
          street,
          kebele,
          housenumber,
          grade,
          section,
          gender,
          siblingfname,
          siblingemail,
          siblingbirth,
          siblinglname,
          siblinggrade,
          siblingphone,
          siblingemail,
          siblingsection,
          siblinggender,
        ];
        console.log(data);
      }}
    >
      <div className="regStepForms">
        <div className="stepForm">
          <div className="regTitle">
            <h2>Add New Students</h2>
          </div>
          <div className="stepCont">
            <Steps current={current}>
              <Step key={0} title="Student Info" />
              <Step key={1} title="Class-Section" />
              <Step key={2} title="Emeregency" />
              <Step key={3} title="Address" />
            </Steps>
            <div className="stepHolder">
              {current === 0 && (
                <div className="stepInput">
                  <div className="formGrid">
                    <div className="grid1">
                      <p>
                        First Name <span>*</span>
                      </p>
                      <Form.Item name="firstName">
                        <Input
                          onChange={(e) => {
                            setFirstName({ firstName: e.target.value });
                          }}
                          placeholder="First Name"
                        />
                      </Form.Item>
                    </div>
                    <div className="grid2">
                      <p>
                        Last Name <span>*</span>
                      </p>
                      <Form.Item
                        name="lastName"
                        rules={[
                          {
                            message: "Please input enter student last name!",
                          },
                        ]}
                      >
                        <Input
                          onChange={(e) => {
                            setLastName({ lastName: e.target.value });
                          }}
                          placeholder="Last Name"
                        />
                      </Form.Item>
                    </div>
                  </div>

                  <p>
                    Email Address <span>*</span>
                  </p>
                  <Form.Item name="email">
                    <Input
                      onChange={(e) => {
                        setEmail({ Email: e.target.value });
                      }}
                      placeholder="Email Address"
                    />
                  </Form.Item>
                  <p>
                    Phone Number <span>*</span>
                  </p>
                  <Form.Item name="phone">
                    <Input
                      onChange={(e) => {
                        setPhone({ phone: e.target.value });
                      }}
                      placeholder="Phone Number"
                    />
                  </Form.Item>
                </div>
              )}

              {current === 1 && (
                <div className="stepInput">
                  <div className="formGrid">
                    <div className="grid1">
                      <Form.Item name="dateofbirth">
                        <p>Date Of Birth</p>
                        <DatePicker
                          style={{
                            width: "100%",
                            height: "57px",
                            fontSize: "20px",
                            // marginTop: "17px",
                            // border: "2px solid #5b5f97",
                          }}
                          required
                          onChange={(text, index) => {
                            console.log(index.children);
                          }}
                        />
                      </Form.Item>
                    </div>
                    <div className="grid2">
                      <p>
                        Gender <span>*</span>
                      </p>
                      <Form.Item
                        name="gender"
                        onSelect={(value) => {
                          setGender({ gender: value });
                        }}
                      >
                        <Select
                          size="large"
                          style={{
                            width: "100%",
                          }}
                          // onChange={handleChange}
                          options={[
                            {
                              value: "female",
                              label: "Female",
                            },
                            {
                              value: "male",
                              label: "Male",
                            },
                            {
                              value: "other",
                              label: "Other",
                            },
                          ]}
                        />
                      </Form.Item>
                    </div>
                  </div>
                  <div className="gridSelect">
                    <p>
                      Grade <span>*</span>
                    </p>
                    <Form.Item name="grade">
                      <Select
                        onSelect={(value) => {
                          setGrade({ grade: value });
                        }}
                        placeholder="Please Select Grade"
                        style={{
                          width: "100%",
                        }}
                        // onChange={handleChange}
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
                          {
                            value: "Grade 4",
                            label: "Grade 4",
                          },
                          {
                            value: "Grade 5",
                            label: "Grade 5",
                          },
                        ]}
                      />
                    </Form.Item>
                    <p>
                      Section <span>*</span>
                    </p>
                    <Form.Item name="section">
                      <Select
                        placeholder="Please Select Section"
                        style={{
                          width: "100%",
                        }}
                        onSelect={(value) => {
                          setSection({ section: value });
                        }}
                        // onChange={handleChange}
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
                          {
                            value: "section D",
                            label: "Section D",
                          },
                          {
                            value: "section E",
                            label: "Section E",
                          },
                        ]}
                      />
                    </Form.Item>
                  </div>
                </div>
              )}
              {current === 2 && (
                <div className="stepInput">
                  <div className="formGrid">
                    <div className="grid1">
                      <p>
                        First Name <span>*</span>
                      </p>
                      <Form.Item name="gardianFname">
                        <Input
                          placeholder="First Name"
                          onChange={(e) => {
                            setGardianFname({ gardianFname: e.target.value });
                          }}
                        />
                      </Form.Item>
                    </div>
                    <div className="grid2">
                      <p>
                        Last Name <span>*</span>
                      </p>
                      <Form.Item
                        name="gardianLame"
                        rules={[
                          {
                            message: "Please input enter student last name!",
                          },
                        ]}
                      >
                        <Input
                          placeholder="Last Name"
                          onChange={(e) => {
                            setgardianLname({ gardianLname: e.target.value });
                          }}
                        />
                      </Form.Item>
                    </div>
                  </div>

                  <p>
                    Email Address <span>*</span>
                  </p>
                  <Form.Item name="gardianEmail">
                    <Input
                      placeholder="Email Address"
                      onChange={(e) => {
                        setGardianEmail({ gardianEmail: e.target.value });
                      }}
                    />
                  </Form.Item>
                  <p>
                    Phone Number <span>*</span>
                  </p>
                  <Form.Item name="gardianphone">
                    <Input
                      placeholder="Phone Number"
                      onChange={(e) => {
                        setGardianPhone({ gardianphone: e.target.value });
                      }}
                    />
                  </Form.Item>
                </div>
              )}
              {current === 3 && (
                <div className="stepInput">
                  <div className="formGrid">
                    <div className="grid1">
                      <p>
                        City/Town <span>*</span>
                      </p>
                      <Form.Item
                        name="city"
                        rules={[
                          {
                            message: "Please enter city name!",
                          },
                        ]}
                      >
                        <Input
                          placeholder="Akaki Kality"
                          onChange={(e) => {
                            setCity({ gardianFname: e.target.value });
                          }}
                        />
                      </Form.Item>
                    </div>
                    <div className="grid2">
                      <p>
                        Kebele <span>*</span>
                      </p>
                      <Form.Item
                        name="kebele"
                        rules={[
                          {
                            message: "Please enter kebele!",
                          },
                        ]}
                      >
                        <Input
                          placeholder="Akaki kality, 08"
                          onChange={(e) => {
                            setKebele({ kebele: e.target.value });
                          }}
                        />
                      </Form.Item>
                    </div>
                  </div>

                  <p>
                    Street <span>*</span>
                  </p>
                  <Form.Item name="street">
                    <Input
                      placeholder="Street"
                      onChange={(e) => {
                        setStreet({ street: e.target.value });
                      }}
                    />
                  </Form.Item>
                  <p>
                    House Number <span>*</span>
                  </p>
                  <Form.Item name="housenumber">
                    <Input
                      placeholder="House Number"
                      onChange={(e) => {
                        setHouseNumber({ housenumber: e.target.value });
                      }}
                    />
                  </Form.Item>
                </div>
              )}

              {/* <Button htmlType="submit">Save</Button> */}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 24,
              marginBottom: 30,
            }}
          >
            {current < steps.length - 1 && (
              <Button
                type="primary"
                onClick={() => {
                  setCurrent(current + 1);
                }}
                style={{
                  background: "#042954",
                  width: "150px",
                  marginLeft: "12%",
                  fontSize: "22px",
                  fontFamily: "poppins",
                  fontWeight: "600",
                  paddingTop: " 25px",
                  paddingBottom: "25px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Next
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button
                style={{
                  width: "150px",
                  marginLeft: "12%",
                  fontSize: "22px",
                  fontWeight: "600",
                  fontFamily: "poppins",
                  paddingTop: " 25px",
                  paddingBottom: "25px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                // onSubmit={handleFormSubmit}
                type="primary"
                htmlType="submit"
                preventDefault
                onClick={() =>
                  message.success("Student Registered successfully!")
                }
              >
                Submit
              </Button>
            )}
            {current > 0 && (
              <Button
                style={{
                  // background: "#ffae01",
                  // color: "#fff",
                  // width: "90%",
                  width: "150px",
                  marginLeft: "5%",
                  fontSize: "22px",
                  fontFamily: "poppins",
                  fontWeight: "600",
                  paddingTop: " 25px",
                  paddingBottom: "25px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "0 8px",
                }}
                onClick={() => prev()}
              >
                Previous
              </Button>
            )}
          </div>
        </div>
        <div class="stepFormSidebar">
          <div className="studentImg">
            <br />

            {/* ANTD IMAGE */}
            <ImgCrop rotate>
              <Upload
                maxCount={1}
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture-card"
                // fileList={fileList}
                onChange={onChange}
                onPreview={onPreview}
              >
                {fileList.length <= 1 && "+ Upload Student Profile Image"}
              </Upload>
            </ImgCrop>
          </div>

          <div className="addSibling">
            {/* <Form.Item>
              <Input placeholder="sibling name" />
            </Form.Item>
            <Form.Item>
              <Input placeholder="sibling email" />
            </Form.Item> */}
            <div>
              {/* <Form.List name={"siblingsinfo"}> */}
              {siblingInfo}
              {/* </Form.List> */}
            </div>
          </div>
        </div>
      </div>
    </Form>
  );
}

export default Registration2;
