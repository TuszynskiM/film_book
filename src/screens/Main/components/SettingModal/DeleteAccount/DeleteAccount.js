import React from 'react';
import DeleteAccountForm from './DeleteAccountForm';
import SettingSection from '../../../../shared/SettingSection/SettingSection';

const DeleteAccount = () => {
  const title = 'Zmiana hasła';

  return (
      <SettingSection sectionTitle={title}>
        <DeleteAccountForm/>
      </SettingSection>
  )
}

export default DeleteAccount;