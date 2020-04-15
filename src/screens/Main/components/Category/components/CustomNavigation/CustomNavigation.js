import React from 'react';
import Box from '@material-ui/core/Box';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';
import PropTypes from 'prop-types';

const CustomNavigation = ({setPosition}) => {

  return (
      <Box display='flex' justifyContent='center' alignItems='center' height={45}>
        <LeftArrow setPosition={setPosition}/>
        <RightArrow setPosition={setPosition}/>
      </Box>
  )
};

CustomNavigation.propTypes = {
  setPosition: PropTypes.func.isRequired
}

export default CustomNavigation;

