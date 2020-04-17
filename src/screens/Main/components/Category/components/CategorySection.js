import React, {useState} from 'react';
import Box from '@material-ui/core/Box';
import CategoryTitle from './CategoryTitle';
import VideosList from './VideosList/VideosList';
import PropTypes from 'prop-types';

const CategorySection =({type, db})=>{
  return(
      <Box>
        <CategoryTitle title={type}/>
        <VideosList db={db}/>
      </Box>
  );
}

CategorySection.propTypes ={
  type: PropTypes.string.isRequired,
  db: PropTypes.array.isRequired
}

export default CategorySection;