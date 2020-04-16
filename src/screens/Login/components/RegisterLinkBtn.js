import React from 'react';
import {ROUTE} from '../../../App/route-config';
import {useHistory} from "react-router-dom";
import CustomBtnLink from '../../shared/CustomBtnLink';

const RegisterLinkBtn = () => {
  let history = useHistory();
  const btnText = 'Zarejestruj się';

  return (
      <CustomBtnLink handleClick={() => history.push(ROUTE.REGISTER)} btnText={btnText}/>
  );
}

export default RegisterLinkBtn;