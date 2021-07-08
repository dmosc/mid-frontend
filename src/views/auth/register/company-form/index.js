import React, {useState} from 'react';
import {Steps} from 'antd';
import RegisterForm from './register-form';
import InfoForm from './info-form';

const {Step} = Steps;

const CompanyForm = () => {
  const [step, setStep] = useState(0);

  const steps = [
    {
      title: 'Información',
      content: <RegisterForm step={step} setStep={setStep} />,
    },
    {
      title: 'Compañía',
      content: <InfoForm />,
    },
  ];

  return (
    <>
      <Steps current={step} style={{marginBottom: '15vh'}}>
        {steps.map(section => (
          <Step key={section.title} title={section.title} />
        ))}
      </Steps>
      {steps[step].content}
    </>
  );
};

export default CompanyForm;