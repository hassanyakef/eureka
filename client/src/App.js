import React, { Fragment } from 'react';
import './App.css';
import lightBlue from '@material-ui/core/colors/lightBlue';
import grey from '@material-ui/core/colors/grey';
import blue from '@material-ui/core/colors/blue';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Navbar from './features/nav/Navbar';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import UserDetailedPage from './features/user/UserDetailed/UserDetailedPage';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Dashboard from './features/idea/Dashboard/Dashboard';
import CssBaseline from '@material-ui/core/CssBaseline';
import ResponsiveDrawer from './features/nav/ResponsiveDrawer';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: grey
  }
});

const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(5),
  },
  mainContainer: {
    [theme.breakpoints.down('md')]: {
      padding: 0
    }
  },
  input: {
    padding: theme.spacing(1, 0),
  },
  box: {
    padding: theme.spacing(2),
  },
  fab: {
    bottom: theme.spacing(10),
    right: theme.spacing(10),
    margin: 0,
    top: 'auto',
    left: 'auto',
    position: 'fixed',
  },
  appIcon: {
    padding: theme.spacing(2)
  },
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
  },
  toolbar: theme.mixins.toolbar,
}));

const App = () => {
  const classes = useStyles();

  return (
    <Router>
      <Fragment>
        <div className="App">
          <ThemeProvider theme={theme}>
            <div className={classes.root}>
              <CssBaseline />
              <ResponsiveDrawer/>
              <main className={classes.content}>
                <div className={classes.toolbar} />
                <Route exact path="/" component={Dashboard}/>
                    <Fab className={classes.fab} color="primary" aria-label="add">
                      <AddIcon />
                    </Fab>
                    <Container maxWidth={'lg'} className={classes.box}>
                      <Switch>
                        <Route exact path="/register" component={UserDetailedPage}/>
                        <Route exact path="/login" component={UserDetailedPage}/>
                        <Route exact path='/profiles' component={UserDetailedPage} />
                        <Route exact path='/profile/:id' component={UserDetailedPage} />
                        <Route exact path="/create-profile" component={UserDetailedPage}/>
                        <Route exact path="/edit-profile" component={UserDetailedPage}/>
                        <Route exact path='/ideas' component={UserDetailedPage} />
                        <Route exact path='/ideas/me' component={UserDetailedPage} />
                        <Route exact path='/bookmarks' component={UserDetailedPage} />
                      </Switch>
                    </Container>
              </main>
            </div>
          </ThemeProvider>
        </div>
      </Fragment>
    </Router>
  );
};

export default App;
