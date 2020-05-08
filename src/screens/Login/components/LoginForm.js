import React, {useEffect, useRef, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import LoginBtn from './LoginBtn';
import {Field, Form, Formik} from 'formik';
import {TextField} from 'formik-material-ui';
import {ROUTE} from '../../../App/route-config';
import ErrorMassage from '../../shared/components/ErrorMassage';
import * as Yup from 'yup';
import RegisterLinkBtn from './RegisterLinkBtn';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import PropTypes from 'prop-types';
import {checkLoginExist} from "../loginApi";
import {useHistory} from 'react-router-dom'

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

const LoginForm = ({checkLoginExist, user}) => {
    const classes = useStyles();
    const history = useHistory()
    const [hasError, setHasError] = useState(false);
    const isDidMount = useRef(false)


    useEffect(() => {
        if (isDidMount.current) {
            if (user) {
                setHasError(false)
                localStorage.setItem('logged', JSON.stringify(true))
                localStorage.setItem('loggedId', JSON.stringify(user._id))
                history.push(ROUTE.HOME)
            } else
                setHasError(true)
        } else
            isDidMount.current = true

    }, [user])


    const handleSubmit = (value, {resetForm}) => {
        checkLoginExist(value.login, value.password)
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

LoginForm.propTypes = {
    checkLoginExist: PropTypes.func,
    user: PropTypes.object
}

const mapStateToProps = state => ({
    user: state.loginStore.user
})

const mapDispatchToProps = dispatch => bindActionCreators({
    checkLoginExist: checkLoginExist
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);