import React from 'react';
import Box from '@material-ui/core/Box';
import CustomMenu from './components/CustomMenu';
import Title from '../../../shared/Title';
import SearchBar from './components/SearchBar';

const Header = () => {
  const titleStyle = {paddingTop: 15, paddingLeft: 5};

  return (
      <Box
          width={1400}
          display='flex'
          justifyContent='space-between'
          alignItems='center'
          pt={3}
      >
        <Title style={titleStyle}/>
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