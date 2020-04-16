import React from 'react';
import CustomBtn from '../../shared/CustomBtn';
import Box from '@material-ui/core/Box';

const RegisterBtn = () => {
  const btnText = 'Zarejestruj się';

  return (
      <Box textAlign='center' mt={5}>
        <CustomBtn btnText={btnText}/>
      </Box>
  )
}

export default RegisterBtn;