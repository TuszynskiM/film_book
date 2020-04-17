import React from 'react';
import ChangePasswordForm from './ChangePasswordForm';
import SettingSection from '../../../../../shared/components/SettingSection/SettingSection';

const ChangePassword = () => {
  const title = 'Zmień hasło';
  return (
      <SettingSection sectionTitle={title}>
        <ChangePasswordForm/>
      </SettingSection>
  )
}

export default ChangePassword;