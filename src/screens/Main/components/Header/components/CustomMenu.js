import React from 'react';
import Box from '@material-ui/core/Box';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {makeStyles} from '@material-ui/core/styles';
import {useHistory} from 'react-router-dom';
import {ROUTE} from '../../../../../App/route-config';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {switchSettingModal} from '../../../../../actions/main-actions';
import {connect} from 'react-redux';

const useStyle = makeStyles(() => ({
  icon: {
    color: '#E60B0B',
    fontSize: 40,
    padding: '0 10px',

    '&:hover': {
      fontSize: 46,
      padding: '0 7px',
      cursor: 'pointer',
    }
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 46,
    marginLeft: 26,
  }
}))

const CustomMenu = ({switchSettingModal}) => {
  const classes = useStyle()
  let history = useHistory()


  const handleLogout = () => {
    history.push(ROUTE.LOGIN)
  }

  return (
      <Box className={classes.container}>
        <SettingsIcon className={classes.icon} onClick={() => switchSettingModal(true)}/>
        <ExitToAppIcon className={classes.icon} onClick={handleLogout}/>
      </Box>
  )
}

CustomMenu.propTypes = {
  switchSettingModal: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => bindActionCreators({
  switchSettingModal: switchSettingModal
}, dispatch)

export default connect(null, mapDispatchToProps)(CustomMenu);