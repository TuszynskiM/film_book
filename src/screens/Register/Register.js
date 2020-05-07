import React, {useEffect} from "react";
import Box from '@material-ui/core/Box';
import FilmbookTitle from '../shared/components/FilmbookTitle';
import RegisterForm from './components/RegisterForm';
import ReturnLinkBtn from './components/ReturnLinkBtn';
import {useHistory} from 'react-router-dom';
import {ROUTE} from '../../App/route-config';

const Register = () => {
  let history = useHistory()

  useEffect(()=>{
    JSON.parse(localStorage.getItem('logged')) && history.push(ROUTE.HOME)
  })

  return(
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
}

export default Register;