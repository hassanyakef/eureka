import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import NoteIcon from '@material-ui/icons/Note';
import SettingsIcon from '@material-ui/icons/Settings';
import IconButton from '@material-ui/core/IconButton';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles(theme => ({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
}));

const Drawer = ({theme}) => {
  const classes = useStyles(theme);
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = () => event => {
    if (event && event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(!drawerOpen);
  };

  const sideList = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer()}
      onKeyDown={toggleDrawer()}
    >
      <List>
        <ListItem button key={'Profile'}>
          <ListItemIcon>
            <PersonOutlineIcon/>
          </ListItemIcon>
          <ListItemText primary={'Profile'}/>
        </ListItem>
        <ListItem button key={'Bookmarks'}>
          <ListItemIcon>
            <BookmarkBorderIcon/>
          </ListItemIcon>
          <ListItemText primary={'Bookmarks'}/>
        </ListItem>
        <ListItem button key={'My Ideas'}>
          <ListItemIcon>
            <NoteIcon/>
          </ListItemIcon>
          <ListItemText primary={'My Ideas'}/>
        </ListItem>
        <ListItem button key={'Setting'}>
          <ListItemIcon>
            <SettingsIcon/>
          </ListItemIcon>
          <ListItemText primary={'Setting'}/>
        </ListItem>
      </List>
      <Divider/>
      <List>
        <ListItem button key={'Logout'}>
          <ListItemIcon>
            <ExitToAppIcon/>
          </ListItemIcon>
          <ListItemText primary={'Logout'}/>
        </ListItem>
      </List>
    </div>
  );

  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  return (
    <div>
      <IconButton
        onClick={toggleDrawer()}
        edge="start"
        className={classes.menuButton}
        aria-label="menu" color="inherit"
      >
        <MenuIcon/>
      </IconButton>
      <SwipeableDrawer
        open={drawerOpen}
        onClose={toggleDrawer()}
        onOpen={toggleDrawer()}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
      >
        {sideList()}
      </SwipeableDrawer>
    </div>
  );
};

export default Drawer;