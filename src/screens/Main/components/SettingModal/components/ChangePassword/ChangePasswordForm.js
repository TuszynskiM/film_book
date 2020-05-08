import React, {useState} from 'react';
import * as Yup from 'yup';
import CustomForm from '../../../../../shared/components/CustomForm';
import CustomBtn from '../../../../../shared/components/CustomBtn';
import {changePassword} from "../../../../../../api/changePassword";
import ErrorMassage from "../../../../../shared/components/ErrorMassage";
import {Form} from "formik";

const Schema = Yup.object().shape({
    newPasswordRepeat: Yup.string()
        .min(6, "Podane hasło jest za krotkie, podaj minimum 6 znaków")
        .required("Pole jest wymagane"),
    newPassword: Yup.string()
        .min(6, "Podane hasło jest za krotkie, podaj minimum 6 znaków")
        .required("Pole jest wymagane")
})
const initialValues = {
    newPassword: '',
    newPasswordRepeat: '',
}
const inputConfig = [
    {
        name: 'newPassword',
        type: 'password',
        label: 'Nowe hasło'
    },
    {
        name: 'newPasswordRepeat',
        type: 'password',
        label: 'Powtórz nowe hasło'
    },
]

const ChangePasswordForm = () => {
    const btnText = 'Zmień hasło'
    const [mesg, setMesg] = useState('');
    const userId = localStorage.getItem('loggedId')

    const handleSubmit = (value, {resetForm}) => {
        value.newPassword !== value.newPasswordRepeat ? (
            setMesg('Hasła nie są identyczne')
        ) : (
            changePassword(userId, value.newPassword)
                .then((resp) => setMesg(resp.message))
        )
        resetForm()
    }

    return (
        <div>
            <CustomForm inputConfig={inputConfig} initialValue={initialValues} validationSchema={Schema}
                        handleSubmit={handleSubmit} message={mesg}>
                <CustomBtn btnText={btnText}/>
            </CustomForm>
            <ErrorMassage>
                {mesg}
            </ErrorMassage>
        </div>
    )
}

export default ChangePasswordForm;