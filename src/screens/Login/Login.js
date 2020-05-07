import React, {useEffect} from "react";
import Box from '@material-ui/core/Box';
import FilmbookTitle from '../shared/components/FilmbookTitle';
import LoginForm from './components/LoginForm';
import {useHistory} from 'react-router-dom';
import {ROUTE} from '../../App/route-config';

const Login = () => {
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
        <LoginForm/>
      </Box>
  );
}

export default Login;