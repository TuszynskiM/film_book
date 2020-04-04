import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import VideoTile from './VideoTile/VideoTile';

const VideosList = ({videosList}) => {
console.log('list',videosList)
  const videos = videosList.map(video => <VideoTile videoId={video.id.videoId} videoTitle={video.snippet.title}/>)

  return (
      <Box
          display='flex'
          flexWrap='wrap'
          justifyContent='center'
      >
        {videos}
      </Box>
  )
}

VideosList.propTyeps = {
  videosList: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  videosList: state.mainStore.videosList
})

export default connect(mapStateToProps)(VideosList);