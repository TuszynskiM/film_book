import React from "react";
import Box from '@material-ui/core/Box';
import Header from './components/Header/Header';
import Category from './components/Category/Category';
import SettingModal from './components/SettingModal/SettingModal';

const Main = () => (
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

export default Main;