import React, {useState} from "react";
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import {makeStyles} from '@material-ui/core/styles'
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {getVideos} from '../../../../../api/getVideos';
import {setHasSearch} from '../../../../../actions/main-actions';

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
              color: '#E60B0B',
              cursor: 'pointer',
              fontSize: 35
            },
            '&:focus': {
              color: '#E60B0B'
            }
          },
        }
    )
);

const SearchBar = ({getVideos, setHasSearch, hasSearch}) => {
  const classes = useStyles();
  const [value, setValue] = useState('')

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const handleSearch = () => {
    hasSearch ? setValue('') : getVideos(value)
    setHasSearch(!hasSearch)
  }

  return (
      <TextField
          className={classes.root}
          value={value}
          onChange={handleChange}
          variant='outlined'
          label="Szukaj"
          InputProps={{
            startAdornment: (
                <InputAdornment position="start">
                  {hasSearch ? <ClearIcon className={classes.iconButton} onClick={handleSearch}/> :
                      <SearchIcon className={classes.iconButton} onClick={handleSearch}/>}
                </InputAdornment>
            ),
          }}
      />
  );
}

SearchBar.propTypes = {
  setHasSearch: PropTypes.func.isRequired,
  getVideos: PropTypes.func.isRequired,
  hasSearch: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
  hasSearch: state.mainStore.hasSearch
})


const mapDispatchToProps = dispatch => bindActionCreators({
  getVideos: getVideos,
  setHasSearch: setHasSearch
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
