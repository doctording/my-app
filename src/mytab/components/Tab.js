import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './Tab.css';

const Tab = ({ children, activeTab }) => {
  return (
    <div className="tabs">
      <div className="tab-list">
        {children.map((child) => {
          const { label } = child.props;
          return (
            <Link
              key={label}
              className={label === activeTab ? 'tab-list-item active' : 'tab-list-item'}
              to={`/tab/${label}`}
            >
              Tab {label}
            </Link>
          );
        })}
      </div>
      <div className="tab-content">
        {children.map((child) => {
          if (child.props.label !== activeTab) return undefined;
          return child.props.children;
        })}
      </div>
    </div>
  );
};

export default Tab;
