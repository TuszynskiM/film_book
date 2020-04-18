import React from 'react';
import FilmbookTitle from '../shared/components/FilmbookTitle';
import Box from '@material-ui/core/Box';
import CustomBtn from '../shared/components/CustomBtn';
import WarningIcon from '@material-ui/icons/Warning';
import {useHistory} from 'react-router-dom';
import {ROUTE} from '../../App/route-config';

const Authorization = () => {
  let history = useHistory();

  const btnText = 'Powrót'
  const warringInfo = 'Niestety nie jesteś zalogowany, żeby uzyskać dostęp do treści musisz się wcześniej zalogować'


  return (
      <Box
          display='flex'
          flexDirection='column'
          height='100vh'
          justifyContent='center'
          alignItems='center'
      >
        <FilmbookTitle style={{fontSize: 100}}/>
        <WarningIcon style={{color: '#E60B0B', fontSize: 70, marginTop: 4}}/>
        <Box color='#E60B0B' width={420} ml={3} mt={2} mb={2} fontSize={24}>
          {warringInfo}
        </Box>
        <Box mt={3} mb={5}>
          <CustomBtn btnText={btnText} handleClick={() => history.push(ROUTE.LOGIN)}/>
        </Box>
      </Box>
)
}

export default Authorization;