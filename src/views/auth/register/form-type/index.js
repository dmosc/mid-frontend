import React from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'antd';
import {BankOutlined, UserOutlined} from '@ant-design/icons';

const FormType = () => {
  return (
    <div style={{width: '100%', display: 'flex', justifyContent: 'space-around'}}>
      <Link to='/register/mediator'>
        <Button
          style={{width: 200, height: 200}}
          icon={<UserOutlined />}
        >
          Mediador
        </Button>
      </Link>
      <Link to='/register/company'>
        <Button
          style={{width: 200, height: 200}}
          icon={<BankOutlined />}
        >
          Compañía
        </Button>
      </Link>
    </div>
  );
};

export default FormType;