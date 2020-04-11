import React from 'react';
import {useHistory} from 'react-router-dom';
import {ROUTE} from '../../../App/route-config';
import CustomBtnLink from '../../shared/CustomBtnLink';
import Box from '@material-ui/core/Box';

const ReturnLinkBtn = () => {
  let history = useHistory();

  return (
      <Box mt={3}>
        <CustomBtnLink handleClick={() => history.push(ROUTE.LOGIN)}>
          Powrót
        </CustomBtnLink>
      </Box>
  )
}

export default ReturnLinkBtn;



