import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import {makeStyles} from '@material-ui/core/styles';

const useStyle = makeStyles(() => ({
  btn: {
    width: 300,
    height: 60,

    fontWeight: 'bold',
    letterSpacing: 1.20,
    backgroundColor: '#E60B0B',
    textAlign: 'center',
    lineHeight: '60px',
    transition: '0.2s',

    '&:hover': {
      cursor: 'pointer',
      backgroundColor: '#ac0909',
    }
  }
}))


const ModalNavBtn = ({btnText, setOption}) => {
  const classes = useStyle();

  return (
      <Box className={classes.btn} onClick={setOption}>
        {btnText}
      </Box>
  )
}

ModalNavBtn.propTypes = {
  btnText: PropTypes.string.isRequired,
  setOption: PropTypes.func.isRequired
}

export default ModalNavBtn;