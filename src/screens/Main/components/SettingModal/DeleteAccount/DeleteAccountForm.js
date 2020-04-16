import React from 'react';
import * as Yup from 'yup';
import CustomForm from '../../../../shared/CustomForm';
import CustomBtn from '../../../../shared/CustomBtn';

const Schema = Yup.object().shape({
  login: Yup.string()
      .min(6, "Podany login jest za krotki, podaj minimum 6 znaków")
      .required("Pole jest wymagane"),
  password: Yup.string()
      .min(6, "Podane hasło jest za krotkie, podaj minimum 6 znaków")
      .required("Pole jest wymagane")
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
    name: 'password',
    type: 'text',
    label: 'Hasło'
  }
]

const DeleteAccountForm = () => {
  const btnText = 'Usuń konto';

  return (
      <CustomForm inputConfig={inputConfig} initialValue={initialValues} validationSchema={Schema}>
        <CustomBtn btnText={btnText}/>
      </CustomForm>
  )
};

export default DeleteAccountForm;