import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import VideoTile from './VideoTile/VideoTile';
import {movies} from '../../../../dataBase/dataBase';

const VideosList = ({videosList, hasSearch}) => {
  const movieList = hasSearch ? videosList : movies;
  const videos = movieList.map(video => <VideoTile videoId={video.id.videoId} videoTitle={video.snippet.title}/>);

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
  videosList: PropTypes.array.isRequired,
  hasSearch: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
  videosList: state.mainStore.videosList,
  hasSearch: state.mainStore.hasSearch
})

export default connect(mapStateToProps)(VideosList);