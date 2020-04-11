import React from 'react';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';

const VideoTile = ({videoId, videoTitle}) => {

  const videoUrl = `https://www.youtube.com/embed/${videoId}`

  return (
      <Box
          mb={2}
      >
        <iframe title={videoTitle} src={videoUrl} allowFullScreen height={300} width={450}/>
      </Box>
  );
}

VideoTile.propTypes = {
  videoId: PropTypes.string.isRequired,
  videoTitle: PropTypes.string.isRequired
};

export default VideoTile;