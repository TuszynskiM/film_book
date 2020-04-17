import React from 'react';
import CustomBtn from '../../shared/components/CustomBtn';
import Box from '@material-ui/core/Box';

const LoginBtn = () => {
  const btnText = 'Zaloguj';
  return(
      <Box mt={3} mb={5}>
        <CustomBtn btnText={btnText}/>
      </Box>
  );
}


export default LoginBtn;