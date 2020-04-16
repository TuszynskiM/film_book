import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types'

const useStyles = makeStyles(() => ({
          button: {
            width: 390,
            height:55,
            margin: '40px 0',
            borderRadius: 30,
            color: '#000',
            backgroundColor: '#E60B0B',
            fontFamily:'Montserrat',
            fontWeight:'bold',
            fontSize: 18,
            '&:hover':{
              color: '#000',
              backgroundColor: '#af1111',
            }
          }
        }));

const CustomBtn = ({btnText}) => {
  const classes = useStyles();

  return (
      <Button className={classes.button} variant="contained" type='submit' >
        {btnText}
      </Button>
  )
}

CustomBtn.propTypes ={
  btnText: PropTypes.string.isRequired,
};

export default CustomBtn;