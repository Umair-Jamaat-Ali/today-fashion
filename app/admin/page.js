"use client"
import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  UserOutlined,
  FileOutlined,
} from '@ant-design/icons';
import { getSession } from 'next-auth';
// import { patientModel } from '@/model/patientsData';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const fetchPatientsData = async () => {
  try {
    const data = await patientModel.find();
    console.log("data", data);
    return data
  } catch (error) {
    console.log("error", error);
  }
}

const Admin = async () => {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  const data = await fetchPatientsData();

  const user = await getSession();

  console.log("user", user);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div style={{ height: '32px', background: 'rgba(255, 255, 255, 0.2)', margin: '16px', color: 'WHITE',textAlign: 'center', padding: "5px", borderRadius: "5px"}}>
         <button>logout</button> 
        </div>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" icon={<DesktopOutlined />}>
            Dashboard
          </Menu.Item>
          {/* <SubMenu key="sub1" icon={<UserOutlined />} title="Users">
            <Menu.Item key="2">User 1</Menu.Item>
            <Menu.Item key="3">User 2</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<FileOutlined />} title="Files">
            <Menu.Item key="4">File 1</Menu.Item>
            <Menu.Item key="5">File 2</Menu.Item>
          </SubMenu> */}
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Patient</Breadcrumb.Item>
            <Breadcrumb.Item>Time</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
            {
              data?.map((patient)=> {
                return (
                  <>
                  <div>Patient Name : {patient.name}</div>
                  <div>Patient Contact : {patient.contact}</div>
                  <div>Patient History : {patient.medicalHistory}</div>
                  </>
                )
              })
            }
            Admin Panel
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Admin UI Footer</Footer>
      </Layout>
    </Layout>
  );
};

export default Admin;




// import { patientModel } from '@/model/patientsData'
// import React from 'react'
// import './style.css'
// import Button from '../components/button/button';
// import AppointmentBtn from '../components/AppointmentBtn/AppointmentBtn';

// const fetchPatientsData = async () => {
// try {
//   const data = await patientModel.find();
//   console.log("data", data);
//   return data
// } catch (error) {
//   console.log("error", error);
// }
// }

// export default async function page() {

//   const data = await fetchPatientsData();

//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>ID</th>
//           <th>Date</th>
//           <th>Name</th>
//           <th>Contact</th>
//           <th>Medical History</th>
//           <th>Update</th>
//           <th>Cancel Appoinment </th>
//         </tr>
//       </thead>
//       <tbody>
//         {data?.map((patient) => (
//           <tr key={patient._id}>
//             <td>{patient._id}</td>
//             <td>{new Date(patient.createdAt).toLocaleString()}</td>
//             <td>{patient.name}</td>
//             <td>{patient.contact}</td>
//             <td>{patient.medicalHistory}</td>
//             <td><AppointmentBtn isUpdate={true} patients={patient._id} title="Update"/> </td>
//             <td><Button id={patient._id} btnText="Cancel"/> </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );

// }
