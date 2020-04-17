import React from 'react';
import Box from '@material-ui/core/Box';
import CustomMenu from './components/CustomMenu';
import FilmbookTitle from '../../../shared/components/FilmbookTitle';
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
          mb={8}
      >
        <FilmbookTitle style={titleStyle}/>
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