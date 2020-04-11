import React from "react";
import Box from '@material-ui/core/Box';
import Title from '../shared/Title';
import LoginForm from './components/LoginForm';

const Login = () => (
    <Box
        display='flex'
        flexDirection='column'
        height='100vh'
        justifyContent='center'
        alignItems='center'
    >
      <Title style={{fontSize: 100}}/>
      <LoginForm/>
    </Box>
);

export default Login;