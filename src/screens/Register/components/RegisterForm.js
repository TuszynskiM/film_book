import React from 'react';
import {Field, Form, Formik} from 'formik';
import Box from '@material-ui/core/Box';
import {useHistory} from 'react-router-dom';
import {ROUTE} from '../../../App/route-config';
import {makeStyles} from '@material-ui/core/styles';
import {TextField} from 'formik-material-ui';
import RegisterBtn from './RegisterBtn';
import * as Yup from 'yup';

const useStyles = makeStyles(() => ({
    input: {
        '& .MuiOutlinedInput-root': {
            color: '#E60B0B',
            height: '60px',
            width: '400px',
            '& fieldset': {
                border: '2px solid #E60B0B',
                borderRadius: '30px',
                color: '#E60B0B'
            },
            '&:hover fieldset': {
                borderColor: '#E60B0B',
                color: '#E60B0B'
            },
            '&.Mui-focused fieldset': {
                borderColor: '#E60B0B',
                color: '#E60B0B'
            },
        },
        '& label': {
            color: '#E60B0B',
        },
        '& label.Mui-focused': {
            color: '#E60B0B',
        },
        marginTop: 20,
    },
    form: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    }
}));

const Schema = Yup.object().shape({
    login: Yup.string()
        .min(6, "Podany login jest za krotki, podaj minimum 6 znaków")
        .required("Pole jest wymagane"),
    email: Yup.string()
        .email('Podano nie prawidłowy email')
        .required("Pole jest wymagane"),
    password: Yup.string()
        .min(6, "Podane hasło jest za krotkie, podaj minimum 6 znaków")
        .required("Pole jest wymagane")
})


const RegisterForm = () => {
    const classes = useStyles();
    let history = useHistory();


    const handleSubmit = (value, {resetForm}) => {
        let accounts = localStorage.getItem('accounts')
        accounts = JSON.parse(accounts);
        accounts = accounts ? [accounts, value] : [value]
        localStorage.setItem('accounts', JSON.stringify(accounts));
        history.push(ROUTE.LOGIN)
        resetForm()
    }

    return (
        <Formik
            initialValues={{
                login: '',
                email: '',
                password: ''
            }}
            validationSchema={Schema}
            onSubmit={handleSubmit}
        >
            <Form>
                <Box className={classes.form}>
                    <Field
                        component={TextField}
                        name='login'
                        type='text'
                        label='Login'
                        variant="outlined"
                        className={classes.input}
                        autoComplete='off'
                    />
                    <Field
                        component={TextField}
                        name='password'
                        type='password'
                        label='Hasło'
                        variant="outlined"
                        className={classes.input}
                    />
                    <Field
                        component={TextField}
                        name='email'
                        type='email'
                        label='Email'
                        variant="outlined"
                        className={classes.input}
                    />
                </Box>
                <RegisterBtn/>

            </Form>
        </Formik>
    )
};

export default RegisterForm;