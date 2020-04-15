import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import {movies} from '../../../../../../dataBase/dataBase';
import VideoTile from './VideoTile';

const VideosList = ({videosList, hasSearch, position}) => {
  const movieList = hasSearch ? videosList : movies;
  const videos = movieList.map(video => <VideoTile videoId={video.id.videoId} videoTitle={video.snippet.title}/>);

  return (
      <Box
          width={1398}
          height={330}
          overflow='hidden'
      >
        <Box display='flex' style={{transform: `translateX(${position}px)`, transition:'1s'}}>
        {videos}
        </Box>
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