import React from "react";
import Box from '@material-ui/core/Box';
import Header from './components/Header/Header';
import Category from './components/Category/Category';

const Main = () => (
    <Box
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
    >
      <Header/>
      <Category/>
    </Box>
);

export default Main;