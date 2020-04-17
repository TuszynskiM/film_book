import React from 'react';
import Box from '@material-ui/core/Box';
import {movieCategory} from './categoryConfig';
import CategorySection from './components/CategorySection';


const Category = () => {
const categories = movieCategory.map(category=><CategorySection key={category.id} type={category.type} db={category.db}/>)
  return (
      <Box>
        {categories}
      </Box>
  )
};

export default Category;