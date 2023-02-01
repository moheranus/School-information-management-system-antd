
import { useState } from 'react'
import "./Registration.css"
import { DownCircleOutlined, PlusOutlined ,LoadingOutlined } from "@ant-design/icons";
import {Form, Steps, Input, Button, DatePicker, Select, message, Upload} from "antd"

import{
    FormOutlined,
    IdcardOutlined,
    UserSwitchOutlined,
    AimOutlined,  
} from "@ant-design/icons"


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





//gender handle value
const handleChange = (value) => {
    console.log(`selected ${value}`);
  };





function Registration() {











    const[current, setCurrent] = useState(0)
    const[studentnfo, setStudentInfo] =useState(null);
    const[assignSection, setAssignSection] = useState(null);
    const[emeregency, setEmeregency] = useState(null);
    const [address, setAddress] = useState(null);

    const onFinishStudentInfo = (values)=>{
      console.log(values)
        setStudentInfo(values);
        setCurrent(1)
    }

    const onFinishAssignSection = (values)=>{
      console.log(values)
        setAssignSection(values);
        setCurrent(2)
    }
    const onFinishEmeregency = (values)=>{
      console.log(values)
        setEmeregency(values);
        setCurrent(3);
    }
    const onFinishAddress = (values) => {
      console.log(values)
      setAddress(values)
    }
    const forms=[
        <StudentInfo onFinish={onFinishStudentInfo}/>,
        <AssignSection onFinish={onFinishAssignSection}/>,
        <Emeregency onFinish={onFinishEmeregency}/>,
        <Address onFinish={onFinishAddress}/>
    ]
  return (
    <div className='addStudent'>
        {/* <div className='studentHeader'>
            <h2>Student Registration</h2>
        </div> */}
        <div className='studentForm'>
            <Steps style={{padding:"32px 32px",}} onChange={setCurrent} current={current}>
                <Steps.Step title="Student Info" icon={<FormOutlined />}/>
                <Steps.Step title="Assign Section" icon={<IdcardOutlined/>}/>
                <Steps.Step title="Emeregency Contact" icon={<UserSwitchOutlined />}/>
                <Steps.Step title="Address" icon={<AimOutlined />}/>
            </Steps>
            {forms[current]}
        </div>
    </div>
  )
}

function StudentInfo({onFinish}){
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
        marginTop: 8,
      }}
    >
      Upload
    </div>
  </div>
);

//student image upload ends here
    return (
        <div className='studentInfos'>
            
    <Form onFinish={onFinish}>
    <p>First Name</p>
        <Form.Item  name="fname"rules={[{
            required: true,
            message:'Please enter student first name'
        }]} 
        >
            
            <Input placeholder='Please enter student first name'/>
        </Form.Item>
        <p>Last Name</p>
        <Form.Item  name="lname" rules={[{
            required:true,
            message:'Please enter student last name'
        }]}>
            
            <Input placeholder='Please Enter student last name'/>
        </Form.Item>
        <p>Email</p>
        <Form.Item  name="email" rules={[{
            required: true,
            type:'email',
            message:'Please enter student email'
        }]}>
            
            <Input placeholder='Please enter  student email '/>
        </Form.Item>
        <p>Phone Number</p>
        <Form.Item  name="phoneNumber" rules={[{
            required: true,
            
            message:'Please enter student phone number'
        }]}>
            
            <Input placeholder='please enter student phone number'/>
        </Form.Item>
        <div className='uploadStudentImage'>
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
            height:"50px"
          }}
        />
      ) : (
        uploadButton
      )}
    </Upload>
    <p style={{
      padding:"0px",
      marginTop:"30px"
    }}>Please upload student image</p>
        </div>
        <div className='continueBtnCon'>
           <Button type='primary' htmlType='submit'
           className='nextBtn btn'
           style={{marginTop:"-70px"}}
           >Continue</Button>
        </div>


       
        
        
    </Form>
    </div>
    )
}



function AssignSection({onFinish}){
    return (
        <div className='studentInfos'>
          <Form onFinish={onFinish}>
            <p>Date Of Birth</p>
          <Form.Item>
          <DatePicker 
        
        style={{
            width:"100%",
            height:"60px",
            fontSize:"20px",
            marginTop:"17px",
            border:"2px solid #5b5f97",
            
            }} required
            onChange={(text, index) => {
              console.log(index.children);
              }}
            />
            
          </Form.Item>
          <div className='column3'>
          <p>Gender</p>
              <Form.Item 
              name="gender"
              rules={[{
                required: true,
                message:"Please select student gender"
              }]}
              >
                <Select
                suffixIcon={<DownCircleOutlined style={{
                    fontSize:"30px",
                    // marginTop:"10px",
                    color:"#5b5f97"
                }}/>}
                showSearch
                placeholder="Select gender"
          style={{
        width: "100%",
        padding:"20px 0",
        lineHeight:"60px",
        marginLeft:"-10px",
      }}
      onChange={handleChange}
      options={[
        {
          value: 'female',
          label: 'Female',
        },
        {
          value: 'male',
          label: 'Male',
        },
        {
          value: 'other',
          label: 'Other',
        },
        
      ]}
    />

              </Form.Item>
              </div>
              <div className='column3'>
          <p>Class</p>
              <Form.Item 
              name="class"
              rules={[{
                required: true,
                message:"Please select student class"
              }]}
              >
                <Select
                suffixIcon={<DownCircleOutlined style={{
                    fontSize:"30px",
                    // marginTop:"25px",
                    color:"#5b5f97"
                }}/>}
                showSearch
                placeholder="Select class"
          style={{
        width: "100%",
        padding:"20px 0",
        lineHeight:"60px",
        marginLeft:"-10px",
      }}
      onChange={handleChange}
      options={[
        {
          value: '1st',
          label: 'Grade 1',
        },
        {
          value: '2nd',
          label: 'Grade 2',
        },
        {
          value: '3rd',
          label: 'Grade 3',
        },
        {
            value: '4th',
            label: 'Grade 4',
          },
          {
            value: '5th',
            label: 'Grade 5',
          },
        
      ]}
    />

              </Form.Item>
              </div>
              <div className='column3'>
          <p>Section</p>
              <Form.Item 
              name="section"
              rules={[{
                required: true,
                message:"Please select student section"
              }]}
              >
                <Select
                suffixIcon={<DownCircleOutlined style={{
                    fontSize:"30px",
                    // marginTop:"25px",
                    color:"#5b5f97"
                }}/>}
                showSearch
                placeholder="Select section"
          style={{
        width: "100%",
        padding:"20px 0",
        lineHeight:"60px",
        marginLeft:"-10px",
      }}
      onChange={handleChange}
      options={[
        {
          value: 'A',
          label: 'Section A',
        },
        {
          value: 'B',
          label: 'Section B',
        },
        {
          value: 'C',
          label: 'Section C',
        },
        {
            value: 'D',
            label: 'Section D',
          },
          {
            value: 'E',
            label: 'Section E',
          },
        
      ]}
    />

              </Form.Item>
              </div>
          <div className='continueBtnCon'>
           <Button type='primary' htmlType='submit'
           className='nextBtn btn'
           >Continue</Button>
        </div>
        
    </Form>
    </div>
    )
}



function Emeregency({onFinish}){
    return (
        <div className='studentInfos'>
    <Form onFinish={onFinish}>
    <p>First Name</p>
        <Form.Item  name="emeregencyfname"rules={[{
            required: true,
            message:'Please enter student first name'
        }]} 
        >
            
            <Input placeholder='Please enter student first name'/>
        </Form.Item>
        <p>Last Name</p>
        <Form.Item  name="emeregencylname" rules={[{
            required:true,
            message:'Please enter student last name'
        }]}>
            
            <Input placeholder='Please Enter student last name'/>
        </Form.Item>
        <p>Email</p>
        <Form.Item  name="emeregencyemail" rules={[{
            required: true,
            type:'email',
            message:'Please enter student email'
        }]}>
            
            <Input placeholder='Please enter  student email '/>
        </Form.Item>
        <p>Phone Number</p>
        <Form.Item  name="emeregencyphoneNumber" rules={[{
            required: true,
            
            message:'Please enter student phone number'
        }]}>
            
            <Input placeholder='please enter student phone number'/>
        </Form.Item>
        <div className='continueBtnCon'>
           <Button type='primary' htmlType='submit'
           className='nextBtn btn'
           >Continue</Button>
        </div>
        
    </Form>
    </div>
    )
}
 function Address ({onFinish}){
    return(
        <div className='studentInfos'>
          <Form onFinish={onFinish}>
          <p>City/Town</p>
        <Form.Item  name="city"rules={[{
            required: true,
            message:'Please enter city/town name'
        }]} 
        >
            
            <Input placeholder='Please enter city name'/>
        </Form.Item>
        <p>Kebele</p>
        <Form.Item  name="kebele" rules={[{
            required:true,
            message:'Please enter kebele'
        }]}>
            
            <Input placeholder='Please enter kebele'/>
        </Form.Item>
        <p>Street</p>
        <Form.Item  name="street" rules={[{
            required: true,
            
            message:'Please enter street name'
        }]}>
            
            <Input placeholder='Please enter street name '/>
        </Form.Item>
        <p>House Number</p>
        <Form.Item  name="housenumber" rules={[{
            required: true,
            
            message:'Please enter house number'
        }]}>
            
            <Input placeholder='please enter house number'/>
        </Form.Item>
        <div className='continueBtnCon'>
           <Button type='primary' htmlType='submit'
           className='nextBtn btn'
           >Continue</Button>
        </div>
          </Form>
        </div>
    )
 }

export default Registration