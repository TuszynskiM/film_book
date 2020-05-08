import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types'

const useStyles = makeStyles(() => ({
  button: {
    width: 390,
    height: 55,
    margin: '10px 0 0',
    borderRadius: 30,
    color: '#000',
    backgroundColor: '#E60B0B',
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    fontSize: 14,
    '&:hover': {
      color: '#000',
      backgroundColor: '#af1111',
    }
  }
}));

const CustomBtn = ({btnText, handleClick}) => {
  const classes = useStyles();
  let type;
  if (handleClick) {
    type = 'button'
  } else {
    type = 'submit'
    handleClick = () => {
    };
  }

  return (
      <Button className={classes.button} variant="contained" type={type} onClick={handleClick}>
        {btnText}
      </Button>
  )
}

CustomBtn.propTypes = {
  btnText: PropTypes.string.isRequired,
  handleClick: PropTypes.func
};

export default CustomBtn;