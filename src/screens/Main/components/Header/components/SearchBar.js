import React, {useState} from "react";
import SearchIcon from '@material-ui/icons/Search';
import {makeStyles} from '@material-ui/core/styles'
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {changeSearchValue} from '../../../../../actions/main-actions';

const useStyles = makeStyles(() => ({
  root: {
    '& .MuiOutlinedInput-root': {
      color: '#E60B0B',
      height: '45px',
      width: '300px',
      '& fieldset': {
        border: '2px solid #E60B0B',
        borderRadius: '30px',
        color: '#E60B0B'
      },
      '&:hover fieldset': {
        borderColor: '#E60B0B',
        color: '#E60B0B'
      },
      '&.Mui-focused fieldset': {
        borderColor: '#E60B0B',
        color: '#E60B0B'
      },
    },
    '& label': {
      color: '#E60B0B',
    },
    '& label.Mui-focused': {
      color: '#E60B0B',
    },
  },

  iconButton: {
    padding: 10,
    color: '#E60B0B',
    '&:hover': {
      color: '#E60B0B'
    },
    '&:focus': {
      color: '#E60B0B'
    }
  },

}));

const SearchBar = ({searchValue, changeSearchValue}) => {
  const classes = useStyles();


  const handleChange = (event) => {
    changeSearchValue(event.target.value)
  }

  return (
      <TextField
          className={classes.root}
          value={searchValue}
          onChange={handleChange}
          variant='outlined'
          label="Szukaj"
          InputProps={{
            startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon className={classes.iconButton}/>
                </InputAdornment>
            ),
          }}
      />
  );
}

SearchBar.propTypes = {
  searchValue: PropTypes.string.isRequired,
  changeSearchValue: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  searchValue: state.mainStore.searchValue
})

const mapDispatchToProps = dispatch => bindActionCreators({
  changeSearchValue: changeSearchValue
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
