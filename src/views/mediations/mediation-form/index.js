import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Button, Form, Input, message, Modal, Select, Tooltip} from 'antd';
import {useUser} from 'providers/user';

const {Item} = Form;
const {TextArea} = Input;

const MediationForm = ({showMediationCreate, setShowMediationCreate}) => {
  const [loading, setLoading] = useState(false);
  const {user} = useUser();

  const onFinish = async (values) => {
    setLoading(true);

    try {
      // eslint-disable-next-line no-console
      console.log(values);
      setShowMediationCreate(false);
    } catch (e) {
      message.error('No ha sido posible crear la mediación!');
      setLoading(false);
    }
  };

  return (
    <Modal
      visible={showMediationCreate}
      onCancel={() => setShowMediationCreate(false)}
      title='Nueva mediación'
      closable={false}
      footer={[
        <Button
          size='large'
          loading={loading}
          block
          type='primary'
          form='mediation-form'
          key='submit'
          htmlType='submit'
        >
          Crear
        </Button>,
      ]}
    >
      <Form
        id='mediation-form'
        onFinish={onFinish}
        initialValues={{representatives: [user?.email]}}
      >
        <Tooltip placement='rightTop' title='Presiona espacio o enter entre cada email'>
          <Item
            name='inviteesEmails'
            rules={[{required: true, message: 'Ingresa los emails de los invitados'}]}
          >
            <Select
              mode='tags'
              allowClear
              style={{width: '100%'}}
              tokenSeparators={[' ']}
              placeholder='Emails de invitados'
            />
          </Item>
        </Tooltip>
        <Tooltip placement='rightTop' title='Presiona espacio o enter entre cada email'>
          <Item
            name='representatives'
            rules={[{required: true, message: 'Ingresa los emails de los representantes'}]}
          >
            <Select
              mode='tags'
              allowClear
              style={{width: '100%'}}
              tokenSeparators={[' ']}
              placeholder='Emails de representantes'
            />
          </Item>
        </Tooltip>
        <Item
          name='description'
        >
          <TextArea
            placeholder='Agrega una descripción de la mediación...'
            autoSize={{minRows: 5, maxRows: 10}}
          />
        </Item>
      </Form>
    </Modal>
  );
};

MediationForm.propTypes = {
  showMediationCreate: PropTypes.bool,
  setShowMediationCreate: PropTypes.func,
};

export default MediationForm;