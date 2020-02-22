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
import PeopleIcon from '@material-ui/icons/People';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link'
import { Link as RouterLink } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import AddIcon from '@material-ui/icons/Add';
import { logout } from '../auth/authActions';
import { connect } from 'react-redux';



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
    addIdeaButton: {
      borderRadius: '25px / 25px ',
      paddingRight: theme.spacing(5),
      paddingLeft: theme.spacing(4),
      textTransform: 'capitalize'
    }
}});

function ResponsiveDrawer({logout, auth: { isAuthenticated, loading }, ...props}) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const authenticatedMenu = (
    <div className={classes.outerDiv}>
      <div className={classes.toolbar} />
      <List>
        <ListItem button key={'Ideas'} component={RouterLink} to="/ideas">
          <ListItemIcon>
            <NoteIcon/>
          </ListItemIcon>
          <ListItemText primary={'Ideas'}/>
        </ListItem>
        <ListItem button key={'Dashboard'} component={RouterLink} to="/dashboard">
          <ListItemIcon>
            <DashboardIcon/>
          </ListItemIcon>
          <ListItemText primary={'Dashboard'}/>
        </ListItem>
        <ListItem button key={'Profile'} component={RouterLink} to="/users/1">
          <ListItemIcon>
            <PersonOutlineIcon/>
          </ListItemIcon>
          <ListItemText primary={'Profile'}/>
        </ListItem>
        <ListItem button key={'Users'} component={RouterLink} to="/users">
          <ListItemIcon>
            <PeopleIcon/>
          </ListItemIcon>
          <ListItemText primary={'Users'}/>
        </ListItem>
        <ListItem button key={'Bookmarks'}  component={RouterLink} to="/bookmarks">
          <ListItemIcon>
            <BookmarkBorderIcon/>
          </ListItemIcon>
          <ListItemText primary={'Bookmarks'}/>
        </ListItem>
        <ListItem button key={'Setting'} component={RouterLink} to="/edit-profile">
          <ListItemIcon>
            <SettingsIcon/>
          </ListItemIcon>
          <ListItemText primary={'Setting'}/>
        </ListItem>
        <Box ml={1} mt={1} mb={2}>
          <Button
            component={RouterLink}
            to="/ideas/add"
            variant="contained"
            color="primary"
            size='large'
            className={classes.addIdeaButton}
            startIcon={<AddIcon />}
          >
            Add Idea
          </Button>
        </Box>
      </List>
      <Divider/>
      <List>
        <ListItem button key={'Logout'} onClick={logout}>
          <ListItemIcon >
            <ExitToAppIcon/>
          </ListItemIcon>
          <ListItemText primary={'Logout'}/>
        </ListItem>
      </List>
    </div>
  );

  const unAuthenticatedMenu = (
    <div className={classes.outerDiv}>
      <div className={classes.toolbar} />
      <List>
        <ListItem button key={'Ideas'} component={RouterLink} to="ideas/">
          <ListItemIcon>
            <NoteIcon/>
          </ListItemIcon>
          <ListItemText primary={'Ideas'}/>
        </ListItem>
      </List>
      <Divider/>
      <List>
        <ListItem button key={'Login'} component={RouterLink} to="/login">
          <ListItemIcon>
            <ExitToAppIcon/>
          </ListItemIcon>
          <ListItemText primary={'Login'}/>
        </ListItem>
        <ListItem button key={'Register'} component={RouterLink} to="/register">
          <ListItemIcon>
            <ExitToAppIcon/>
          </ListItemIcon>
          <ListItemText primary={'Register'}/>
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
          <Link color='inherit' variant='h6' underline='none' component={RouterLink} to='/'>Eureka</Link>


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
            {isAuthenticated ? authenticatedMenu : unAuthenticatedMenu}
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
            {isAuthenticated ? authenticatedMenu : unAuthenticatedMenu}
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

const mapStateToProps = (state) => ({
  auth: state.auth
});


const actions = {
  logout
};

export default connect(mapStateToProps, actions)(ResponsiveDrawer);
