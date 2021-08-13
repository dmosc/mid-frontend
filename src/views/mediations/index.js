import React, {useState} from 'react';
import {Button, DatePicker, Input, Layout} from 'antd';
import {PlusOutlined} from '@ant-design/icons';
import {datePresets} from 'utils';
import {FiltersContainer} from './elements';
import MediationForm from './mediation-form';

const {Content} = Layout;
const {Search} = Input;
const {RangePicker} = DatePicker;

const Mediations = () => {
  const [showMediationCreate, setShowMediationCreate] = useState();

  return (
    <>
      <Content style={{display: 'flex', justifyContent: 'space-between'}}>
        <FiltersContainer>
          <Search placeholder='Buscar palabras...' style={{width: 200}} />
          <RangePicker ranges={datePresets} />
        </FiltersContainer>
        <Button
          onClick={() => setShowMediationCreate(true)}
          type='primary'
          icon={<PlusOutlined />}
        >
          Crear mediación
        </Button>
      </Content>
      <Content>
        Mediaciones
      </Content>
      <MediationForm
        showMediationCreate={showMediationCreate}
        setShowMediationCreate={setShowMediationCreate}
      />
    </>
  );
};

export default Mediations;