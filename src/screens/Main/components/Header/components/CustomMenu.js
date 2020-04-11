import React from 'react';
import Box from '@material-ui/core/Box';
import MenuIcon from '@material-ui/icons/Menu';
import {withStyles} from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: '#E60B0B',
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);


const CustomMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
      <Box
          p={2}
      >
        <MenuIcon
            style={{fontSize: 50, color: '#E60B0B', cursor: 'pointer', paddingTop: '0px', marginLeft: '40px'}}
            onClick={handleClick}
        />
        <StyledMenu
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
        >
          <StyledMenuItem>
            <ListItemIcon>
              <AccountCircleIcon fontSize="large"/>
            </ListItemIcon>
            <ListItemText primary="Konto"/>
          </StyledMenuItem>
          <StyledMenuItem>
            <ListItemIcon>
              <SettingsIcon fontSize="large"/>
            </ListItemIcon>
            <ListItemText primary="Ustawienia"/>
          </StyledMenuItem>
          <StyledMenuItem>
            <ListItemIcon>
              <ExitToAppIcon fontSize="large"/>
            </ListItemIcon>
            <ListItemText primary="Wyloguj"/>
          </StyledMenuItem>
        </StyledMenu>
      </Box>
  )
}

export default CustomMenu;