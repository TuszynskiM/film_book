import React from 'react';
import * as Yup from 'yup';
import CustomForm from '../../../../shared/CustomForm';
import CustomBtn from '../../../../shared/CustomBtn';

const Schema = Yup.object().shape({
  currentPassword: Yup.string()
      .min(6, "Podane hasło jest za krotkie, podaj minimum 6 znaków")
      .required("Pole jest wymagane"),
  newPassword: Yup.string()
      .min(6, "Podane hasło jest za krotkie, podaj minimum 6 znaków")
      .required("Pole jest wymagane")
})
const initialValues={
  currentPassword: '',
  newPassword:'',
}
const inputConfig =[
  {
    name:'currentPassword',
    type:'text',
    label:'Obecne hasło'
  },
  {
    name:'newPassword',
    type:'text',
    label:'Nowe hasło'
  }
]

const ChangePasswordForm = () => {
  const btnText = 'Zmień hasło'

  return (
    <CustomForm inputConfig={inputConfig} initialValue={initialValues} validationSchema={Schema}>
      <CustomBtn btnText={btnText}/>
    </CustomForm>
  )
}

export default ChangePasswordForm;