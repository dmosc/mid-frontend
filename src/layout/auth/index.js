import React from 'react';
import PropTypes from 'prop-types';
import {Layout} from 'antd';
import {AuthWrapper} from './elements';

const AuthLayout = ({children}) => {
  return (
    <Layout>
      <AuthWrapper>
        <div style={{maxWidth: 500, width: '100%', padding: 20, height: 'auto'}}>
          {children}
        </div>
      </AuthWrapper>
    </Layout>
  );
};

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthLayout;
