import React, {useState} from 'react';
import {Button, Form, Input, message, Typography} from 'antd';
import {FontColorsOutlined, LoginOutlined, NumberOutlined} from '@ant-design/icons';
import {useMutation} from '@apollo/client';
import {CREATE_COMPANY, UPDATE_USER} from './requests';
import theme from 'config/theme';
import {useUser} from 'providers/user';

const {Text} = Typography;
const {Item} = Form;

const InfoForm = () => {
  const [loading, setLoading] = useState(false);
  const [createCompany] = useMutation(CREATE_COMPANY);
  const [updateUser] = useMutation(UPDATE_USER);
  const {user, setIsLogged} = useUser();

  const onFinish = async (values) => {
    const company = {
      name: values.name,
      businessName: values.businessName,
      address: {
        country: values.country,
        city: values.city,
        state: values.state,
        street: values.street,
        postcode: values.postcode,
      }
    }

    try {
      setLoading(true);
      const {data} = await createCompany({variables: {company}});

      if (data) {
        const {createCompany: {id}} = data;
        const representative = {role: 'ADMIN', company: id};
        await updateUser({variables: {id: user.id, user: {representative}}});
        setIsLogged(true);
      }
    } catch (e) {
      message.error('No ha sido posible crear la cuenta!');
      setLoading(false);
    }
  };

  return (
    <Form onFinish={onFinish}>
      <Text disabled>Datos generales</Text>
      <Item
        name='name'
        rules={[{required: true, message: 'Ingresa el nombre de la compañía'}]}
      >
        <Input size='large' prefix={<FontColorsOutlined />} placeholder='Nombre de la compañía' />
      </Item>
      <Item
        name='businessName'
        rules={[{required: true, message: 'Ingresa la razón social'}]}
      >
        <Input size='large' prefix={<FontColorsOutlined />} placeholder='Razón social oficial' />
      </Item>
      <Text disabled>Dirección física</Text>
      <Item
        name='country'
        rules={[{required: true, message: 'Ingresa el país'}]}
      >
        <Input size='large' prefix={<FontColorsOutlined />} placeholder='País' />
      </Item>
      <Item
        name='state'
        rules={[{required: true, message: 'Ingresa el estado'}]}
      >
        <Input size='large' prefix={<FontColorsOutlined />} placeholder='Estado' />
      </Item>
      <Item
        name='city'
        rules={[{required: true, message: 'Ingresa la ciudad'}]}
      >
        <Input size='large' prefix={<FontColorsOutlined />} placeholder='Ciudad' />
      </Item>
      <Item
        name='street'
        rules={[{required: true, message: 'Ingresa la(s) calle(s)'}]}
      >
        <Input size='large' prefix={<FontColorsOutlined />} placeholder='Calle(s)' />
      </Item>
      <Item
        name='postcode'
        rules={[{required: true, message: 'Ingresa el código postal'}]}
      >
        <Input size='large' prefix={<NumberOutlined />} placeholder='Código postal' />
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
      </Item>
    </Form>
  );
};

export default InfoForm;