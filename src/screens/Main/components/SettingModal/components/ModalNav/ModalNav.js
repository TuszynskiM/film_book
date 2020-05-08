import React from 'react';
import Box from '@material-ui/core/Box';
import ModalNavBtn from './ModalNavBtn';
import PropTypes from 'prop-types';
import {modalBtnConfig} from '../../settingConfig';


const ModalNav = ({setOption}) => {
  return (
      <Box display='flex' justifyContent='center' mt={3}>
        {modalBtnConfig.map(btn => <ModalNavBtn key={btn.name} btnText={btn.name} setOption={()=> setOption(btn.option)}/>)}
      </Box>
  )
};

ModalNav.propTypes ={
  setOption: PropTypes.func.isRequired
}

export default ModalNav;