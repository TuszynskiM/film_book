import React from "react";
import VideosList from './components/VideosList/VideosList';
import Box from '@material-ui/core/Box';
import Header from './components/Header/Header';

const Main = () => (
    <Box
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
    >
      <Header/>
      <VideosList/>
    </Box>
);

export default Main;