import React from 'react';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
          link: {
            textAlign: 'center',
            color: '#E60B0B',
            fontSize: 22,
            letterSpacing: 2,
            textDecoration: 'underline',
            fontWeight: 'bold',
            '&:hover': {
              cursor: 'pointer'
            }
          }
        }
    )
);

const CustomBtnLink = ({ handleClick, btnText}) => {
  const classes = useStyles();

  return (
      <Box className={classes.link} onClick={handleClick}>
        {btnText}
      </Box>
  );
}

CustomBtnLink.propTypes = {
  handleClick: PropTypes.func.isRequired,
  btnText: PropTypes.string.isRequired
}

export default CustomBtnLink;