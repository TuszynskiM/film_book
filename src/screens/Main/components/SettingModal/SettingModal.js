import React, {useState} from 'react';
import Dialog from '@material-ui/core/Dialog';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {switchSettingModal} from '../../main-actions';
import {connect} from 'react-redux';
import FilmbookTitle from '../../../shared/components/FilmbookTitle';
import {makeStyles} from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import Box from '@material-ui/core/Box';
import DialogContent from '@material-ui/core/DialogContent';
import ModalNav from './components/ModalNav/ModalNav';
import {OPTIONS} from './settingConfig';
import SwitchForm from './components/SwitchForm';

const useStyle = makeStyles(() => ({
  dialog: {
    '& .MuiDialog-paper': {
      padding: '30px 25px 30px 30px',
      backgroundColor: '#000000'
    },
    '& .MuiDialog-container': {
      backgroundColor: 'rgba(141,20,20,0.1)'
    },
  },
  navigation: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    color: '#E60B0B',
    fontSize: 45,
    marginRight: 5,
    '&:hover': {
      fontSize: 55,
      marginRight: 0,
      cursor: 'pointer'
    }
  }
}))

const SettingModal = ({hasModalOpen, switchSettingModal}) => {
  const [option, setOption] = useState(OPTIONS.CHANGE);
  const classes = useStyle();

  return (
      <Dialog className={classes.dialog} open={hasModalOpen} aria-labelledby="filmbook-setting" fullWidth={true}
              maxWidth='lg'>
        <DialogContent>
          <Box className={classes.navigation}>
            <FilmbookTitle/>
            <CloseIcon className={classes.icon} onClick={() => switchSettingModal(false)}/>
          </Box>
          <ModalNav setOption={setOption}/>
          <SwitchForm option={option}/>
        </DialogContent>
      </Dialog>
  )
}

SettingModal.propState = {
  switchSettingModal: PropTypes.func.isRequired,
  hasModalOpen: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
  hasModalOpen: state.mainStore.hasModalOpen
})

const mapDispatchToProps = dispatch => bindActionCreators({
  switchSettingModal: switchSettingModal
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SettingModal);