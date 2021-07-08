import React from 'react';
import {Form} from 'antd';

const UserForm = ({form, initialValues, onFinish}) => {
  return (
    <Form
      layout='vertical'
      onFinish={onFinish}
      initialValues={initialValues ? {...initialValues} : undefined}
    >

    </Form>
  );
};

export default UserForm;