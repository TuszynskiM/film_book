import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import SectionTitle from './componetns/SectionTitle';

const useStyle =makeStyles(()=>({
  section:{
    margin:'40px ',
    textAlign: 'center',
    fontWeight: 'bold',
  },
}));

const SettingSection = ({children, sectionTitle}) => {
    const classes = useStyle();

  return (
      <Box className={classes.section}>
        <SectionTitle text={sectionTitle}/>
        {children}
      </Box>
  )
};

SettingSection.propTypes={
  children: PropTypes.node,
  sectionTitle: PropTypes.string.isRequired
}

export default SettingSection;