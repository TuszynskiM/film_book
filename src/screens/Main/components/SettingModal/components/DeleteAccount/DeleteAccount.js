import React from 'react';
import DeleteAccountForm from './DeleteAccountForm';
import SettingSection from '../../../../../shared/components/SettingSection/SettingSection';

const DeleteAccount = () => {
  const title = 'Usuń konto';

  return (
      <SettingSection sectionTitle={title}>
        <DeleteAccountForm/>
      </SettingSection>
  )
}

export default DeleteAccount;