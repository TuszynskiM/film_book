import React from 'react';
import {ROUTE} from '../../../App/route-config';
import {useHistory} from "react-router-dom";
import CustomBtnLink from '../../shared/CustomBtnLink';

const RegisterLinkBtn = () => {
  let history = useHistory();

  return (
      <CustomBtnLink handleClick={() => history.push(ROUTE.REGISTER)}>
          Zarejestruj się
      </CustomBtnLink>
  );
}

export default RegisterLinkBtn;