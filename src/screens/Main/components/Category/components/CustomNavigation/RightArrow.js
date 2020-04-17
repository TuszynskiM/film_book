import React from 'react';
import Box from '@material-ui/core/Box';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {makeStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyle = makeStyles(() => ({
  arrow: {
    color: '#E60B0B',
    fontSize: 40,
    paddingLeft: 5,
    '&:hover': {
      fontSize: 45,
      paddingLeft: 0,
      cursor: 'pointer',
    }
  }
}));

const RightArrow = ({setIndex}) => {
  const classes = useStyle();

  const handleMoveRight = () => {
    setIndex(prevState => prevState - 1)
  }

  return (
      <Box>
        <ArrowForwardIosIcon onClick={handleMoveRight} className={classes.arrow}/>
      </Box>
  )
};

RightArrow.propTypes = {
  setIndex: PropTypes.func.isRequired
}

export default RightArrow;