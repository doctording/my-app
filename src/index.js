import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import
import Line from './test/Line';
import Addfunc from './test/Addfunc';
import FuncComponent from './test/FuncComponent';
import UseStatusComponent from './test/UseStatusComponent';
import MyTable from './test/MyTable';
import MyUrlTable from './test/MyUrlTable';

import FengFengApp from './main/FengFengApp';

// antx
import { Table } from 'antd';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}

    <FengFengApp />

    {/* <Line/>
    <h1>函数组件</h1>
    <FuncComponent name='Jack'/>
    <FuncComponent name='Tom'/>
 
    <Line/>
    <h1>有状态组件</h1>
    <Addfunc/>

    <Line/>
    <h1>useState</h1>
    <UseStatusComponent />

    <Line/>
    <h1>表格</h1>
    <MyTable />

    <Line/>
    <h1>表格模拟请求</h1>
    <MyUrlTable /> */}

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
