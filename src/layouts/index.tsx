import React from 'react';
import styles from './index.css';
import { Button } from 'antd';

const BasicLayout: React.FC = props => {
  return (
    <div>
      <Button type="primary">Primary</Button>
    <Button>Default</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="danger">Danger</Button>
    <Button type="link">Link</Button>
    </div>
  );
};

export default BasicLayout;
