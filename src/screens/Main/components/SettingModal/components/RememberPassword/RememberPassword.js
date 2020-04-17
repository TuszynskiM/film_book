import React from 'react';
import SettingSection from '../../../../../shared/components/SettingSection/SettingSection';
import RememberPasswordForm from './RememberPasswordForm';


const RememberPassword = () => {
  const title = 'Przypomnij hasło';

  return (
      <SettingSection sectionTitle={title}>
        <RememberPasswordForm/>
      </SettingSection>
  )
}

export default RememberPassword;