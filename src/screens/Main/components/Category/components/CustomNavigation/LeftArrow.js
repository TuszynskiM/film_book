import React from 'react';
import Box from '@material-ui/core/Box';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {makeStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyle = makeStyles(() => ({
  arrow: {
    color: '#E60B0B',
    fontSize: 40,
    paddingRight: 5,
    '&:hover': {
      fontSize: 45,
      paddingRight: 0,
      cursor: 'pointer',
    }
  }
}));

const LeftArrow = ({setIndex}) => {
  const classes = useStyle();
  const handleMoveLeft = () => {
    setIndex(prevState => prevState + 1)
  }

  return (
      <Box>
        <ArrowBackIosIcon onClick={handleMoveLeft} className={classes.arrow}/>
      </Box>
  )
};

LeftArrow.propTypes = {
  setIndex: PropTypes.func.isRequired
}

export default LeftArrow;