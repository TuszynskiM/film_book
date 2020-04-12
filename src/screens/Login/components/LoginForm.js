import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import LoginBtn from './LoginBtn';
import {useHistory} from 'react-router-dom';
import {Field, Form, Formik} from 'formik';
import {TextField} from 'formik-material-ui';
import {ROUTE} from '../../../App/route-config';
import ErrorMassage from '../../shared/ErrorMassage';
import * as Yup from 'yup';
import RegisterLinkBtn from './RegisterLinkBtn';

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
    password: Yup.string()
        .min(6, "Podane hasło jest za krotkie, podaj minimum 6 znaków")
        .required("Pole jest wymagane")
})

const LoginForm = () => {
    const classes = useStyles();
    let history = useHistory();
    const [hasError, setHasError] = useState(false)

    const handleSubmit = (value, {resetForm}) => {
        let accounts = localStorage.getItem('accounts');
        accounts = JSON.parse(accounts);

        const hasFound = accounts ? accounts.filter(account => account.login === value.login && account.password === value.password).length > 0 : false;

        if (hasFound) {
            setHasError(false)
            history.push(ROUTE.HOME)
        } else
            setHasError(true)

        resetForm()
    }

    return (
        <Formik
            initialValues={{
                login: '',
                password: '',
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
                    <ErrorMassage>
                        {hasError && 'Podano błędny login lub hasło'}
                    </ErrorMassage>


          </Box>
          <LoginBtn/>
          <RegisterLinkBtn/>
        </Form>
      </Formik>
  )
};

export default LoginForm;