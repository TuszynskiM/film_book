import React, {useState} from 'react';
import * as Yup from 'yup';
import CustomForm from '../../../../../shared/components/CustomForm';
import CustomBtn from '../../../../../shared/components/CustomBtn';
import {deleteUser} from "../../../../../../api/deleteUser";
import ErrorMassage from "../../../../../shared/components/ErrorMassage";
import {ROUTE} from "../../../../../../App/route-config";
import {useHistory} from 'react-router-dom';

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
    const [mesg, setMesg] = useState('');
    const history = useHistory();

    const handleSubmit = (value, {resetForm}) => {
        console.log(value)
        const user = deleteUser(value.login, value.password)

        user.then(resp => {
            setMesg(resp.message)
            if (resp.message === 'Konto usunięte poprawnie') {
                setTimeout(() => {
                    localStorage.removeItem('logged')
                    localStorage.removeItem('loggedId')
                    history.push(ROUTE.LOGIN)
                }, 5000)
            }
        })
        resetForm();
    }


    return (
        <CustomForm inputConfig={inputConfig} initialValue={initialValues} validationSchema={Schema}
                    handleSubmit={handleSubmit}>
            <ErrorMassage>
                {mesg}
            </ErrorMassage>
            <CustomBtn btnText={btnText}/>
        </CustomForm>
    )
};

export default DeleteAccountForm;