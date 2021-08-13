import React from 'react';
import PropTypes from 'prop-types';
import {Layout} from 'antd';
import NavBar from './navbar';
import Sidebar from './sidebar';

const {Content} = Layout;

const MainLayout = ({children}) => {
  return (
    <Layout style={{minHeight: '100vh', backgroundColor: '#ffffff'}}>
      <NavBar />
      <Layout>
        <Sidebar />
        <Layout style={{padding: 40}}>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 500,
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