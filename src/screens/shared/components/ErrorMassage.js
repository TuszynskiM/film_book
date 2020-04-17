import React from 'react';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types'

const ErrorMassage = ({children}) => (
    <Box
        color='#E60B0B'
        my={1}
        height={20}
    >
      {children}
    </Box>
);

ErrorMassage.propTypes = {
  children: PropTypes.node
};

export default ErrorMassage;