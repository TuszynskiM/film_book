import React from "react";
import Box from '@material-ui/core/Box';
import FilmbookTitle from '../shared/components/FilmbookTitle';
import LoginForm from './components/LoginForm';

const Login = () => (
    <Box
        display='flex'
        flexDirection='column'
        height='100vh'
        justifyContent='center'
        alignItems='center'
    >
      <FilmbookTitle style={{fontSize: 100}}/>
      <LoginForm/>
    </Box>
);

export default Login;