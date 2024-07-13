import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useParams } from 'react-router-dom';
import Tab from './components/Tab';
import TabPane from './components/TabPane';

function MyTab() {
  return (
    <Router>
      <div className="App">
        <h1>React Tab Example with URL</h1>
        <Routes>
          <Route path="/tab/:tabId" element={<TabComponent />} />
          <Route path="/" element={<Navigate to="/tab/1" />} />
        </Routes>
      </div>
    </Router>
  );
}

const TabComponent = () => {
  const { tabId } = useParams();
  return (
    <Tab activeTab={tabId}>
      <TabPane label="1">
        <div>
          <h2>Tab 1 Content</h2>
          <p>This is the content for Tab 1.</p>
        </div>
      </TabPane>
      <TabPane label="2">
        <div>
          <h2>Tab 2 Content</h2>
          <p>This is the content for Tab 2.</p>
        </div>
      </TabPane>
      <TabPane label="3">
        <div>
          <h2>Tab 3 Content</h2>
          <p>This is the content for Tab 3.</p>
        </div>
      </TabPane>
    </Tab>
  );
}

export default MyTab;
