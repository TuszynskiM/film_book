import React from 'react';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';

const Title = ({style}) => (
    <Box
        fontSize={70}
        fontFamily='Bangers'
        style={{color: '#E60B0B', letterSpacing: 10, fontWeight: 'bold', ...style}}
    >
      Filmbook
    </Box>
);

Title.propTypes ={
  style:PropTypes.object
}

export default Title;