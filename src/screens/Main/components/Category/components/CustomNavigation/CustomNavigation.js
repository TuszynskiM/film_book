import React from 'react';
import Box from '@material-ui/core/Box';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';
import PropTypes from 'prop-types';

const CustomNavigation = ({setIndex}) => {

  return (
      <Box display='flex' justifyContent='center' alignItems='center' height={45}>
        <LeftArrow setIndex={setIndex}/>
        <RightArrow setIndex={setIndex}/>
      </Box>
  )
};

CustomNavigation.propTypes = {
  setIndex: PropTypes.func.isRequired
}

export default CustomNavigation;

