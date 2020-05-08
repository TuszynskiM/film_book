import React from 'react';
import * as Yup from 'yup';
import CustomForm from '../../../../../shared/components/CustomForm';
import CustomBtn from '../../../../../shared/components/CustomBtn';
import {deleteUser} from "../../../../../../api/deleteUser";

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
    type: 'password',
    label: 'Hasło'
  }
]

const DeleteAccountForm = () => {
  const btnText = 'Usuń konto';


  const handleSubmit =(value, )=>{
    console.log(value)
    const user = deleteUser(value.login, value.password)

    user.then(resp=> {
      console.log(resp.message)
    })
  /*  localStorage.removeItem('logged')
    history.push(ROUTE.LOGIN)*/
  }


  return (
      <CustomForm inputConfig={inputConfig} initialValue={initialValues} validationSchema={Schema} handleSubmit={handleSubmit}>
        <CustomBtn btnText={btnText}/>
      </CustomForm>
  )
};

export default DeleteAccountForm;