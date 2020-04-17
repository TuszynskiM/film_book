import React from "react";
import Box from '@material-ui/core/Box';
import FilmbookTitle from '../shared/components/FilmbookTitle';
import RegisterForm from './components/RegisterForm';
import ReturnLinkBtn from './components/ReturnLinkBtn';

const Register = () => (
    <Box
        display='flex'
        flexDirection='column'
        height='100vh'
        justifyContent='center'
        alignItems='center'
    >
      <FilmbookTitle style={{fontSize: 100}}/>
      <RegisterForm/>
      <ReturnLinkBtn/>
    </Box>
);

export default Register;