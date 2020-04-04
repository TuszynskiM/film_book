import React from 'react';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';

const VideoTile = ({videoId, videoTitle}) => {

  const videoUrl = `https://www.youtube.com/embed/${videoId}`

  return (
      <Box
          mb={5}
      >
        <iframe title={videoTitle} src={videoUrl} allowFullScreen height={150} width={300} style={{
          border: '2px solid #E60B0B'
        }}/>
      </Box>
  );
}

VideoTile.propTypes = {
  videoId: PropTypes.string.isRequired,
  videoTitle: PropTypes.string.isRequired
};

export default VideoTile;