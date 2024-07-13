import React, { useState, useEffect} from 'react';

import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import Home from './Home';
import About from './About';
import Contact from './Contact';
import Dashboard from './Dashboard';
import Profile from './Profile';
import Settings from './Settings';

import Addfunc from '../test/Addfunc';
import UseStatusComponent from '../test/UseStatusComponent';
import MyTable from '../test/MyTable';
import MyUrlTable from '../test/MyUrlTable';

const { SubMenu } = Menu;

const FengFengApp = () => {

  const [current, setCurrent] = useState('home');

  const handleClick = e => {
    console.log('Clicked: ', e);
    setCurrent(e.key);
  };

  const renderComponent = (key) => {
    switch (key) {
      case 'home':
        return <Home />
      case 'app':
        return <h2>app</h2>;
      case '1':
        return <Addfunc />;
      case '2':
        return <UseStatusComponent />;
      case '3':
        return <MyTable />;
      case '4':
        return <MyUrlTable />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        {/* 菜单1 */}
        <Menu.Item key="home" icon={<SettingOutlined />}>
          Home
        </Menu.Item>
        {/* 菜单2 */}
        <Menu.Item key="mail" icon={<MailOutlined />}>
          Mail
        </Menu.Item>
        {/* 菜单3 */}
        <Menu.Item key="app" icon={<AppstoreOutlined />}>
          App
        </Menu.Item>
        {/* 菜单4，有子菜单 */}
        <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Navigation Submenu-Test">
          <Menu.ItemGroup title="react例子">
            <Menu.Item key="1">加法1</Menu.Item>
            <Menu.Item key="2">加法2:UseStatus</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="表格">
            <Menu.Item key="3">表格-antd</Menu.Item>
            <Menu.Item key="4">表格-模拟请求</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
      </Menu>
      <div style={{ marginTop: 20 }}>{renderComponent(current)}</div>
    </div>
    // <Router>
    //   <div>
    //     <nav>
    //       <ul>
    //         <li>
    //           <Link to="/">Home</Link>
    //         </li>
    //         <li>
    //           <Link to="/about">About</Link>
    //         </li>
    //         <li>
    //           <Link to="/contact">Contact</Link>
    //         </li>
    //         <li>
    //           <Link to="/dashboard">Dashboard</Link>
    //         </li>
    //       </ul>
    //     </nav>
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/about" element={<About />} />
    //       <Route path="/contact" element={<Contact />} />
    //       <Route path="/dashboard" element={<Dashboard />}>
    //         <Route path="profile" element={<Profile />} />
    //         <Route path="settings" element={<Settings />} />
    //       </Route>
    //     </Routes>
    //   </div>
    // </Router>
  );
};


export default FengFengApp;