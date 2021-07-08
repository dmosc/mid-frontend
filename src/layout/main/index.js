import React from 'react';
import PropTypes from 'prop-types';
import {Layout, Menu} from 'antd';
import NavBar from './navbar';

const {Sider, Content} = Layout;

const MainLayout = ({children}) => {
  return (
    <Layout style={{minHeight: '100vh', backgroundColor: '#ffffff'}}>
      <NavBar />
      <Layout>
        <Sider breakpoint='lg' collapsedWidth='0' style={{backgroundColor: '#ffffff'}}>
          <Menu mode='inline' style={{heigh: '100%', borderRight: 0, backgroundColor: '#ffffff'}}>
            <Menu.Item key='1'>option1</Menu.Item>
            <Menu.Item key='2'>option2</Menu.Item>
            <Menu.Item key='3'>option3</Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{padding: 40}}>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              backgroundColor: 'white',
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

MainLayout.propTypes = {
  children: PropTypes.object,
};

export default MainLayout;