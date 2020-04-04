import React, {useEffect} from "react";
import {getVideos} from '../../api/getVideos';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import VideosList from './components/VideosList/VideosList';
import Box from '@material-ui/core/Box';

const Main = ({getVideos}) => {

  useEffect(() => {
    getVideos()
  }, [])

  return (
      <Box
      bgcolor='black'
      >
        <VideosList/>
      </Box>
  );
}

Main.propTypes = {
  getVideos: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => bindActionCreators({
  getVideos: getVideos
}, dispatch)

export default connect(null, mapDispatchToProps)(Main);