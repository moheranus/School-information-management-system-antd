import { useState } from 'react'
import "./EditStudent.css"
import {Form, Input, Button, Select, DatePicker , message, Upload} from "antd"

import { DownCircleOutlined, PlusOutlined ,LoadingOutlined  } from "@ant-design/icons";

//gender handle value
const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
//image upload starts here

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
};
const beforeUpload = (file) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
};

//image upload ends here

function EditStudent() {
  //student image upload starts here


const [loading, setLoading] = useState(false);
const [imageUrl, setImageUrl] = useState();
const handleChange = (info) => {
  if (info.file.status === 'uploading') {
    setLoading(true);
    return;
  }
  if (info.file.status === 'done') {
    // Get this url from response in real world.
    getBase64(info.file.originFileObj, (url) => {
      setLoading(false);
      setImageUrl(url);
    });
  }
};
const uploadButton = (
  <div>
    {loading ? <LoadingOutlined /> : <PlusOutlined />}
    <div
      style={{
        marginTop: -5,
        
      }}
    >
      Upload student image
    </div>
  </div>
);

//student image upload ends here
  return (
    <div className='editCont'>
          <div className='editDiv'>
                <h2>Edit Student Information</h2>
          </div>
          <div className='editColumn'>
            <Form>
              <div class="column11">
              <p>First Name</p>
                <Form.Item  name="fname"
                
                 rules={[{
                    required:true,
                    message:'Please enter student first name'
                }]}>
                    
                    <Input placeholder="Daniel"/>
                </Form.Item>
               
                <p>Date Of Birth</p>
          <Form.Item>
          <DatePicker 
        
        style={{
            width:"100%",
            height:"55px",
            fontSize:"20px",
            
            
            border: "2px solid #3B3486",
            
            }} required
            onChange={(text, index) => {
              console.log(index.children);
              }}
            />
            
          </Form.Item>
          <p>Phone Number</p>
                <Form.Item  name="phoneNumber"
                
                 rules={[{
                    required:true,
                    message:'Please edit  student phone number'
                }]}>
                    
                    <Input placeholder="0949052848"/>
                </Form.Item>
                <div className='editSubmit'>
           <Button type='primary' htmlType='submit'
           className='nextBtn btn'
           >Submit</Button>
        </div>
              </div>
              <div class="column22">
              <p>Last Name</p>
                <Form.Item  name="lname"
                
                 rules={[{
                    required:true,
                    message:'Please enter student first name'
                }]}>
                    
                    <Input placeholder="Shobe"/>
                </Form.Item>
                <p>Class</p>
                  <Form.Item>
                     <Select 
                     
                     
                      defaultValue="Grade 1"
                      // style={{ height: "50px" }}
                      onChange={handleChange}
                      options={[
                        { value: '1st', label: 'Grade 1' },
                        { value: '2nd', label: 'Grade 2' },
                        { value: '3rd', label: 'Grade 3' },
                        
                      ]}
                     />
                  </Form.Item>
                  <p>Email Address</p>
                <Form.Item  name="email"
                
                 rules={[{
                    required:true,
                    message:'Please edit student email'
                }]}>
                    
                    <Input placeholder="dani@gmail.com"/>
                </Form.Item>
              </div>
              <div class="column33">
              <p>Gender</p>
                  <Form.Item>
                     <Select 
                     
                     
                      defaultValue="Male"
                      // style={{ height: "50px" }}
                      onChange={handleChange}
                      options={[
                        { value: 'male', label: 'Male' },
                        { value: 'female', label: 'Female' },
                        { value: 'other', label: 'Other' },
                        
                      ]}
                     />
                  </Form.Item>
                  <p>Section</p>
                  <Form.Item>
                     <Select 
                     
                     
                      defaultValue="Section A"
                      // style={{ height: "50px" }}
                      onChange={handleChange}
                      options={[
                        { value: 'A', label: 'Section A' },
                        { value: 'B', label: 'Section B' },
                        { value: 'C', label: 'Section C' },
                        
                      ]}
                     />
                  </Form.Item>
                  <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                
                beforeUpload={beforeUpload}
                onChange={handleChange}
              >
                {imageUrl ? (
                  <img
                    src={imageUrl}
                    alt="avatar"
                    style={{
                      width: '100%',
                      height:"20px",
                      marginLeft:"20px"
                    }}
                  />
                ) : (
                  uploadButton
                )}
              </Upload>
              {/* <h3 >Please upload student image</h3> */}

              </div>
              <div className='column44'>
                    {/* column 4 */}
              </div>
              </Form>
          </div>
    </div>
  )
}

export default EditStudent