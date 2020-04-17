import React from 'react';
import {useHistory} from 'react-router-dom';
import {ROUTE} from '../../../App/route-config';
import CustomBtnLink from '../../shared/components/CustomBtnLink';
import Box from '@material-ui/core/Box';

const ReturnLinkBtn = () => {
  let history = useHistory();
  const btnText = 'Powrót';
  return (
      <Box mt={3}>
        <CustomBtnLink handleClick={() => history.push(ROUTE.LOGIN)} btnText={btnText}/>
      </Box>
  )
}

export default ReturnLinkBtn;



