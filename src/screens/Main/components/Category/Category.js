import React, {useState} from 'react';
import VideosList from './components/VideosList/VideosList';
import Box from '@material-ui/core/Box';
import CategoryTitle from './components/CategoryTitle';
import CustomNavigation from './components/CustomNavigation/CustomNavigation';

const Category = () => {
  const [position, setPosition] = useState(0);



  return (
      <Box>
        <CategoryTitle title={'Horror'}/>
        <VideosList position={position}/>
        <CustomNavigation setPosition={setPosition}/>
      </Box>
  )
};

export default Category;