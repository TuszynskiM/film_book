import React from 'react';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';

const CategoryTitle = ({title})=>(
    <Box
      fontSize={36}
      color='rgb(230, 11, 11)'
      fontWeight={700}
      mb={3}
    >
      {title}
    </Box>
);

CategoryTitle.propTypes ={
  title: PropTypes.string.isRequired
};

export default CategoryTitle;