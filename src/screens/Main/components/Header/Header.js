import React from 'react';
import Box from '@material-ui/core/Box';
import CustomMenu from './components/Menu/CustomMenu';
import Title from './components/Title';

const Header = () => {
  return (
      <Box
          width={1400}
          display='flex'
          justifyContent='space-between'
          alignItems='center'
          pt={3}
      >
        <Title/>
        <CustomMenu/>
      </Box>

  )
}

export default Header;