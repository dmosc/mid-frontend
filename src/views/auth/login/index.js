import React, {useState} from 'react';
import {Button, Form, Input, message} from 'antd';
import {LockOutlined, LoginOutlined, UserOutlined} from '@ant-design/icons';
import cookies from 'react-cookies';
import client from 'utils/auth';
import {useUser} from 'providers/user';
import {Link} from 'react-router-dom';
import theme from 'config/theme';

const {Item} = Form;

const Login = () => {
  const [loading, setLoading] = useState(false);
  const {setIsLogged} = useUser();

  const onFinish = async (values) => {
    setLoading(true);

    try {
      const {data} = await client.post('/auth/login', {...values});
      if (data) {
        cookies.save('token', data.token);
        setIsLogged(true);
      }
    } catch (e) {
      message.error('Cuenta no reconocida. Verifica tu correo y contraseña');
      setLoading(false);
    }
  };

  return (
    <Form onFinish={onFinish}>
      <Item
        name='email'
        rules={[{required: true, message: 'Ingresa tu email'}]}
      >
        <Input size='large' prefix={<UserOutlined />} placeholder='Email' />
      </Item>
      <Item
        style={{marginTop: 10}}
        name='password'
        rules={[{required: true, message: 'Ingresa tu contraseña'}]}
      >
        <Input size='large' prefix={<LockOutlined />} type='password' placeholder='Contraseña' />
      </Item>
      <Item>
        <Button
          icon={<LoginOutlined />}
          size='large'
          loading={loading}
          block
          type='primary'
          htmlType='submit'
          style={{marginBottom: theme.margin}}
        >
          Ingresar
        </Button>
        ¿Nuevo? <Link to='/register'>Registrarse</Link>
      </Item>
    </Form>
  );
};

export default Login;
