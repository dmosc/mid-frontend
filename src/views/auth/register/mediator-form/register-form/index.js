import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Button, Form, Input, message} from 'antd';
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  FontColorsOutlined,
  LockOutlined,
  LoginOutlined,
  UserOutlined,
} from '@ant-design/icons';
import cookies from 'react-cookies';
import client from 'utils/auth';
import {Link} from 'react-router-dom';
import theme from 'config/theme';
import {useUser} from 'providers/user';

const {Item} = Form;

const RegisterForm = ({step, setStep}) => {
  const [loading, setLoading] = useState(false);
  const {getUser} = useUser();

  const onFinish = async (values) => {
    setLoading(true);

    try {
      const {data} = await client.post('/auth/register', {...values});
      if (data) {
        cookies.save('token', data.token);
        await getUser();
        setStep(step + 1);
      }
    } catch (e) {
      message.error('No ha sido posible crear la cuenta!');
      setLoading(false);
    }
  };

  return (
    <Form onFinish={onFinish}>
      <Item
        name='firstName'
        rules={[{required: true, message: 'Ingresa tus nombres'}]}
      >
        <Input size='large' prefix={<FontColorsOutlined />} placeholder='Nombre(s)' />
      </Item>
      <Item
        name='lastName'
        rules={[{required: true, message: 'Ingresa tus apellidos'}]}
      >
        <Input size='large' prefix={<FontColorsOutlined />} placeholder='Apellidos' />
      </Item>
      <Item
        name='email'
        rules={[{required: true, message: 'Ingresa tu email'}]}
      >
        <Input size='large' prefix={<UserOutlined />} placeholder='Email' />
      </Item>
      <Item
        style={{marginTop: 10}}
        name='password'
        rules={[{required: true, message: 'Ingresa una contraseña'}]}
      >
        <Input.Password
          size='large'
          prefix={<LockOutlined />}
          placeholder='Contraseña'
          iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
        />
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
          Registrarse
        </Button>
        ¿Ya tienes cuenta? <Link to='/login'>Ingresar</Link>
      </Item>
    </Form>
  );
};

RegisterForm.propTypes = {
  step: PropTypes.number,
  setStep: PropTypes.func,
};

export default RegisterForm;