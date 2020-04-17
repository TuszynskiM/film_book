import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import VideoTile from './VideoTile';
import CustomNavigation from '../CustomNavigation/CustomNavigation';

const VideosList = ({db}) => {
  const [index, setIndex] = useState(0);

  const videos = db.map(video => <VideoTile key={video.id.videoId} videoId={video.id.videoId} videoTitle={video.snippet.title}/>);

  index < 0 && setIndex(db.length - 1)
  index > db.length - 1 && setIndex(0)

  let leftIndex = index - 1 < 0 ? db.length - 1 : index - 1;
  let rightItems = index + 1 > db.length - 1 ? 0 : index + 1;

  return (
      <Box>
        <Box
            width={1398}
            height={330}
            overflow='hidden'
        >
          <Box display='flex' style={{transition: '1s'}}>
            {videos[leftIndex]}
            {videos[index]}
            {videos[rightItems]}
          </Box>
        </Box>
        <CustomNavigation setIndex={setIndex}/>
      </Box>
  )
}

VideosList.propTyeps = {
  db: PropTypes.array.isRequired
}

export default VideosList;