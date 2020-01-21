import React, { Fragment} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import NoteIcon from '@material-ui/icons/Note';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';



const useStyles = makeStyles(theme => {
  const drawerWidth = 400;

  return {
    root: {
      display: 'flex',
    },
    outerDiv: {
      [theme.breakpoints.up('sm')]: {
        marginLeft: `10%`
      },
      [theme.breakpoints.up('md')]: {
        marginLeft: `calc(${drawerWidth}px - 50%)`
      },


    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: 240,
        flexShrink: 0,
      },
      [theme.breakpoints.up('md')]: {
        width: drawerWidth,
        flexShrink: 0,
      },

    },
    appBar: {
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - 240px)`,
        marginLeft: 240,
      },
      [theme.breakpoints.up('md')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      }
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: 240,
      [theme.breakpoints.up('md')]: {
        width: drawerWidth,
      },

    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
}});

function ResponsiveDrawer(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className={classes.outerDiv}>
      <div className={classes.toolbar} />
      <List>
        <ListItem button key={'Dashboard'} component={Link} to="/">
          <ListItemIcon>
            <DashboardIcon/>
          </ListItemIcon>
          <ListItemText primary={'Dashboard'}/>
        </ListItem>
        <ListItem button key={'Profile'} component={Link} to="/profile/me">
          <ListItemIcon>
            <PersonOutlineIcon/>
          </ListItemIcon>
          <ListItemText primary={'Profile'}/>
        </ListItem>
        <ListItem button key={'Bookmarks'}  component={Link} to="/bookmarks">
          <ListItemIcon>
            <BookmarkBorderIcon/>
          </ListItemIcon>
          <ListItemText primary={'Bookmarks'}/>
        </ListItem>
        <ListItem button key={'My Ideas'} component={Link} to="/ideas/me">
          <ListItemIcon>
            <NoteIcon/>
          </ListItemIcon>
          <ListItemText primary={'My Ideas'}/>
        </ListItem>
        <ListItem button key={'Setting'} component={Link} to="/setting">
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

  return (
    <Fragment>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Eureka
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={ 'left'}
            open={mobileOpen}
            onClick={handleDrawerToggle}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </Fragment>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container: PropTypes.instanceOf(typeof Element === 'undefined' ? Object : Element),
};

export default ResponsiveDrawer;