import React, {useState} from 'react';
import {Avatar, Button, Form, Input, message, Typography, Upload} from 'antd';
import ImgCrop from 'antd-img-crop';
import {
  CheckOutlined,
  FontColorsOutlined,
  LoadingOutlined,
  LoginOutlined,
  PlusOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import {useUser} from 'providers/user';
import {validateFileTypes} from 'utils/files';
import useUpload from 'hooks/use-upload';
import {useMutation} from '@apollo/client';
import {UPDATE_USER} from './requests';
import {list} from 'utils';

const {Item} = Form;
const {TextArea} = Input;
const {Text} = Typography;

const InfoForm = () => {
  const [loading, setLoading] = useState(false);
  const {upload, uploading} = useUpload();
  const [profileImg, setProfileImg] = useState();
  const [certificateUrl, setCertificateUrl] = useState();
  const {user, setIsLogged} = useUser();
  const [updateMediator] = useMutation(UPDATE_USER);

  const onFinish = async (values) => {
    setLoading(true);

    try {
      await updateMediator({variables: {id: user.id, user: {...values, profileImg, certificateUrl}}});
      setIsLogged(true);
    } catch (e) {
      message.error('No ha sido posible crear la cuenta!');
      setLoading(false);
    }
  };

  const handleUpload = async (file, setState) => {
    const url = await upload(file, file.name);
    setState(url);
  };

  return (
    <Form onFinish={onFinish}>
      <Item name='profileImg' wrapperCol={{offset: 8}}>
        <ImgCrop name='profileImg'>
          <Upload
            name='profileImg'
            listType='picture-card'
            showUploadList={false}
            customRequest={({file}) => handleUpload(file, setProfileImg)}
            beforeUpload={(file) => validateFileTypes(file)}
            accept='.png,.jpg,.jpeg'
          >
            {profileImg ? (
              <Avatar size={100} shape='square' src={profileImg} alt='profileImg' />
            ) : (
              <div>
                {uploading ? <LoadingOutlined /> : <PlusOutlined />}
                <div style={{marginTop: 8}}>Sube una foto de perfil</div>
              </div>
            )}
          </Upload>
        </ImgCrop>
      </Item>
      <Item name='certificateUrl'>
        <Upload
          name='certificateUrl'
          customRequest={({file}) => handleUpload(file, setCertificateUrl)}
          beforeUpload={(file) => validateFileTypes(file, 'application', ['pdf'])}
          iconRender={() => certificateUrl !== undefined ? <CheckOutlined /> : <LoadingOutlined />}
          multiple={false}
          accept='.pdf'
        >
          <Button icon={<UploadOutlined />}>Selecciona o arrastra tu certificado de mediador</Button>
        </Upload>
        <Text disabled>Formatos: {list(['pdf'])}</Text>
      </Item>
      <Item
        name='facilitatorId'
        rules={[{required: true, message: 'Ingresa tu cédula'}]}
      >
        <Input size='large' prefix={<FontColorsOutlined />} placeholder='Cédula de moderador' />
      </Item>
      <Item
        name='biography'
        rules={[{required: true, message: '¡Ándale, cuéntanos!'}]}
      >
        <TextArea
          placeholder='Cuéntanos sobre tu experiencia como mediador...'
          autoSize={{minRows: 5, maxRows: 10}}
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
        >
          Finalizar
        </Button>
      </Item>
    </Form>
  );
};

export default InfoForm;