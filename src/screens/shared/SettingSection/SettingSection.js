import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import SectionTitle from './componetns/SectionTitle';

const useStyle =makeStyles(()=>({
  section:{
    margin:'40px 0'
  },
  line:{
    width: '1200px',
    height:'2px',
    /*    boxShadow: '0 0 2px #E60B0B'*/
  }
}));

const SettingSection = ({children, sectionTitle}) => {
    const classes = useStyle();

  return (
      <Box className={classes.section}>
        <Box className={classes.line}/>
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