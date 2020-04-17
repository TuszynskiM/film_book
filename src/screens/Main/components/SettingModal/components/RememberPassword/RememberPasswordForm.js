import React from 'react';
import * as Yup from 'yup';
import CustomForm from '../../../../../shared/components/CustomForm';
import CustomBtn from '../../../../../shared/components/CustomBtn';

const Schema = Yup.object().shape({
  login: Yup.string()
      .min(6, "Podany login jest za krotki, podaj minimum 6 znaków")
      .required("Pole jest wymagane"),
  email: Yup.string()
      .email('Podano nie prawidłowy email')
      .required("Pole jest wymagane"),
})
const initialValues = {
  login: '',
  password: ''
}
const inputConfig = [
  {
    name: 'login',
    type: 'text',
    label: 'Login'
  },
  {
    name: 'email',
    type: 'email',
    label: 'Email'
  }
]

const RememberPasswordForm = () => {
  const btnText = 'Przypomnij hasło';

  return (
      <CustomForm inputConfig={inputConfig} initialValue={initialValues} validationSchema={Schema}>
        <CustomBtn btnText={btnText}/>
      </CustomForm>
  )
};

export default RememberPasswordForm;