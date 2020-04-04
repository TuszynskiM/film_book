import React from 'react';
import Box from '@material-ui/core/Box';
import CustomMenu from './components/CustomMenu';
import Title from './components/Title';
import SearchBar from './components/SearchBar';

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
        <Box
            display='flex'
            alignItems='center'
        >
          <SearchBar/>
          <CustomMenu/>
        </Box>
      </Box>

  )
}

export default Header;