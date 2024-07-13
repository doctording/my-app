import React, { useState, useEffect} from 'react';
import { Table, Spin, Input, Button } from 'antd';
 
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jack',
    age: 30,
    address: 'Shanghai',
  },
  {
    key: '3',
    name: 'Tom',
    age: 30,
    address: 'BeiJing',
  },
  // ...更多数据
];
 
const MyUrlTable = () => {
  const [tableData, setTableData] = useState([]);
  const [name, setInputName] = useState('');
  const [address, setInputAddress] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    fetchDataSearch();
  };

  function isEmptyString(str) {
    return /^\s*$/.test(str);
  }

  const fetchData = async () => {
    try {
      // 模拟查询很慢，有loading效果
      setLoading(true);
      await sleep(1000);
      // 返回数据，loading结束
      setTableData(data);
      setLoading(false)
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  const fetchDataSearch = async () => {
    try {
      // 模拟查询很慢，有loading效果
      setLoading(true);
      await sleep(500);
     
      console.log('handleSearch values', name, address);
      let filterTableData = data;
      if (!isEmptyString(name)) {
        filterTableData = data.filter(item => 
          item.name.toLocaleLowerCase().includes(name.toLocaleLowerCase()));
      }
      if (!isEmptyString(address)) {
        filterTableData = data.filter(item => 
          item.address.toLocaleLowerCase().includes(address.toLocaleLowerCase()));
      }
      setTableData(filterTableData);

      setLoading(false)
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };
  
  useEffect( () => {
    console.log('init values', name, address);
    fetchData();
  },[]) //空数组初始化一次

  const handleChangeName = (e) => {
    setInputName(e.target.value);
  };

  const handleChangeAddress = (e) => {
    setInputAddress(e.target.value);
  };

  const clearInput = () => {
    setInputName('');
    setInputAddress('');
  };

  const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  };
 
  return (
    <div>
      <input placeholder="搜索名字"
        type='text'
        name="searchName"
        value={name}
        onChange={handleChangeName}
        style={{ marginBottom: 16 }}
      />

      <input
        type='text'
        name="searchAddress"
        value={address}
        onChange={handleChangeAddress}
        placeholder="搜索地址"
        style={{ marginBottom: 16 }}
      />

      <button onClick={handleSearch}>点击查询</button>

      <button onClick={clearInput}>清空</button>

      {/* antx画表格 */}
      <Spin spinning={loading}>
        <Table dataSource={tableData}>
          <Table.Column title="名字" dataIndex="name" key="name" />
          <Table.Column title="年龄" dataIndex="age" key="age" />
          <Table.Column title="地址" dataIndex="address" key="address" />
        </Table>
      </Spin>
    </div>
  );
};
 
export default MyUrlTable;