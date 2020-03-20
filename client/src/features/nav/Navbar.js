import React, {useState} from 'react';
import AppBar from '@material-ui/core/AppBar/AppBar';
import { Container } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from './Drawer';
import { fade, makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    display: 'none',
    textDecoration: 'none',
    color: '#fff',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  menuItem: {
    marginLeft: theme.spacing(1),
    textTransform: 'capitalize',
    fontSize: '1rem'
  },

}));

const Navbar = ({theme}) => {
  const classes = useStyles(theme);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar color='primary' position="static">
        <Container maxWidth="xl">
          <Toolbar>
            <Drawer/>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
            <div>
              <IconButton
                className={classes.menuItem}
                aria-label="Profile" color="inherit"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
              >
                <Avatar className={classes.small} alt="Remy Sharp" src="http://swipemarket.com/wp-content/uploads/2014/06/Untitled-6.jpg" />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose} component={Link} to="/profile/me">Profile</MenuItem>
                <MenuItem onClick={handleClose} component={Link} to="/ideas/me">My Ideas</MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Navbar;