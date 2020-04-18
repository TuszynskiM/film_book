import React, {useEffect} from "react";
import Box from '@material-ui/core/Box';
import Header from './components/Header/Header';
import Category from './components/Category/Category';
import SettingModal from './components/SettingModal/SettingModal';
import {useHistory} from 'react-router-dom';
import {ROUTE} from '../../App/route-config';

const Main = () => {
  let isLogged = JSON.parse(localStorage.getItem('logged'))
  let history = useHistory();

  useEffect(() => {
    !isLogged && history.push(ROUTE.AUTHORIZATION)
  }, [])

  return (
      <Box
          display='flex'
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
      >
        <Header/>
        <Category/>
        <SettingModal/>
      </Box>
  );
}

export default Main;