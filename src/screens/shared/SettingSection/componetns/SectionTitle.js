import React from 'react';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';

const SectionTitle = ({text}) => (
    <Box
        color='#E60B0B'
        fontSize={30}
    >
      {text}
    </Box>
);

SectionTitle.propTypes = {
  text: PropTypes.string.isRequired
}

export default SectionTitle;