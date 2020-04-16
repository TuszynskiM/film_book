import React from 'react';
import ChangePasswordForm from './ChangePasswordForm';
import SettingSection from '../../../../shared/SettingSection/SettingSection';

const ChangePassword = () => {
  const title = 'Usuń konto';
  return (
      <SettingSection sectionTitle={title}>
        <ChangePasswordForm/>
      </SettingSection>
  )
}

export default ChangePassword;