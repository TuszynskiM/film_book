import React from 'react';
import Box from '@material-ui/core/Box';
import {ROUTE} from '../../../App/route-config';
import {useHistory} from "react-router-dom";
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

const RegisterBtn = () => {
  const classes = useStyles();
  let history = useHistory();

  return (
      <Box className={classes.link} onClick={() => history.push(ROUTE.REGISTER)}>
        Zarejestruj się
      </Box>
  );
}

export default RegisterBtn;