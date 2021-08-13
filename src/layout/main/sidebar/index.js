import React from 'react';
import {Layout, Menu} from 'antd';
import {useHistory} from 'react-router-dom';
import {AlertOutlined, CommentOutlined} from '@ant-design/icons';
const {Sider} = Layout

const Sidebar = () => {
  const {push} = useHistory();

  return(
    <Sider breakpoint='lg' collapsedWidth='0' style={{backgroundColor: '#ffffff'}}>
      <Menu
        onClick={({ key }) => push(`/${key}`)}
        mode='inline'
        defaultSelectedKeys={['mediations']}
        style={{heigh: '100%', borderRight: 0}}
      >
        <Menu.Item key='mediations' icon={<CommentOutlined />}>Mediaciones</Menu.Item>
        <Menu.Item key='complaints' icon={<AlertOutlined />}>Quejas</Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;