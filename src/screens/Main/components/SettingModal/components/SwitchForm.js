import React from 'react';
import PropTypes from 'prop-types';
import {OPTIONS} from '../settingConfig';
import ChangePassword from './ChangePassword/ChangePassword';
import RememberPassword from './RememberPassword/RememberPassword';
import DeleteAccount from './DeleteAccount/DeleteAccount';

const SwitchForm = ({option}) => {
console.log(option)
  switch (option) {
    case OPTIONS.CHANGE:
      return <ChangePassword/>
    case OPTIONS.REMEMBER:
      return <RememberPassword/>
    case OPTIONS.DELETE:
      return <DeleteAccount/>
    default:
      return <ChangePassword/>
  }
}

SwitchForm.propTypes = {
  option: PropTypes.string.isRequired
}

export default SwitchForm;