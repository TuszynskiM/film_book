import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import VideoTile from './VideoTile/VideoTile';

const VideosList = ({videosList}) => {

  const videos = videosList.map(video => <VideoTile videoId={video.id.videoId} videoTitle={video.snippet.title}/>)

  return (
      <Box
          width={1400}
          height={200}
          display='flex'
          flexWrap='wrap'
          justifyContent='space-between'
          mt={10}
      >
        {videos}
        <VideoTile videoId={'7lCDEYXw3mM'} videoTitle={'Google I/O 101: Q&A On Using Google APIs'}/>
        <VideoTile videoId={'7lCDEYXw3mM'} videoTitle={'Google I/O 101: Q&A On Using Google APIs'}/>
        <VideoTile videoId={'7lCDEYXw3mM'} videoTitle={'Google I/O 101: Q&A On Using Google APIs'}/>
        <VideoTile videoId={'7lCDEYXw3mM'} videoTitle={'Google I/O 101: Q&A On Using Google APIs'}/>
        <VideoTile videoId={'7lCDEYXw3mM'} videoTitle={'Google I/O 101: Q&A On Using Google APIs'}/>
        <VideoTile videoId={'7lCDEYXw3mM'} videoTitle={'Google I/O 101: Q&A On Using Google APIs'}/>
        <VideoTile videoId={'7lCDEYXw3mM'} videoTitle={'Google I/O 101: Q&A On Using Google APIs'}/>
        <VideoTile videoId={'7lCDEYXw3mM'} videoTitle={'Google I/O 101: Q&A On Using Google APIs'}/>
        <VideoTile videoId={'7lCDEYXw3mM'} videoTitle={'Google I/O 101: Q&A On Using Google APIs'}/>
        <VideoTile videoId={'7lCDEYXw3mM'} videoTitle={'Google I/O 101: Q&A On Using Google APIs'}/>
        <VideoTile videoId={'7lCDEYXw3mM'} videoTitle={'Google I/O 101: Q&A On Using Google APIs'}/>
        <VideoTile videoId={'7lCDEYXw3mM'} videoTitle={'Google I/O 101: Q&A On Using Google APIs'}/>

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