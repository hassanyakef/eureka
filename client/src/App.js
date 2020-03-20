import React, { Fragment, useEffect } from 'react';
import './App.css';
import grey from '@material-ui/core/colors/grey';
import blue from '@material-ui/core/colors/blue';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import UserDetailedPage from './features/user/UserDetailed/UserDetailedPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import IdeasPage from './features/idea/ideasPage/IdeasPage';
import CssBaseline from '@material-ui/core/CssBaseline';
import ResponsiveDrawer from './features/nav/ResponsiveDrawer';
import Landing from './features/layout/Landing';
import Dashboard from './features/dashboard/Dashboard';
import Register from './features/auth/Register';
import Login from './features/auth/Login';
import UsersPage from './features/user/UsersPage/UsersPage';
import IdeaDetailed from './features/idea/ideaDetailed/IdeaDetailed';
import Bookmark from './features/idea/bookmarks/Bookmarks'
import { green, red } from '@material-ui/core/colors';
import EditIdea from './features/idea/ideaForm/EditIdea';
import EditProfile from './features/user/Settings/EditProfile';
import AddIdea from './features/idea/ideaForm/AddIdea';
import { Provider } from 'react-redux';
import setAuthToken from './app/common/util/setAuthToken';
import ReduxToastr from 'react-redux-toastr';
import { loadUser } from './features/auth/authAction';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import PrivateRoute from './app/common/util/PrivateRoute';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './app/reducers';

const store = configureStore({
  reducer: rootReducer,
  devTools:  process.env.NODE_ENV !== 'production'
});

const theme = createMuiTheme({
  palette: {
    primary:blue,
    secondary: grey,
    error: red,
    success: green
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
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0.5),
    }
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

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  const classes = useStyles();

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <div className="App">
            <ThemeProvider theme={theme}>
              <div className={classes.root}>
                <CssBaseline />
                <ResponsiveDrawer/>
                <main className={classes.content}>
                  <div className={classes.toolbar} />
                  <Container maxWidth={'lg'} className={classes.box}>
                    <ReduxToastr
                      position='bottom-right'
                      transitionIn='fadeIn'
                      transitionOut='fadeOut'
                    />
                    <Route exact path="/" component={Landing}/>
                    <Switch>
                      <Route exact path="/register" component={Register}/>
                      <Route exact path="/login" component={Login}/>
                      <Route exact path='/users/:id' component={UserDetailedPage} />
                      <PrivateRoute exact path='/users' component={UsersPage}/>
                      <PrivateRoute exact path="/edit-profile" component={EditProfile}/>
                      <Route exact path='/ideas' component={IdeasPage} />
                      <PrivateRoute exact path='/ideas/add' component={AddIdea} />
                      <Route exact path='/ideas/:id' component={IdeaDetailed} />
                      <PrivateRoute exact path='/ideas/edit/:id' component={EditIdea} />
                      <PrivateRoute exact path='/dashboard' component={Dashboard} />
                      <PrivateRoute exact path='/bookmarks' component={Bookmark} />
                    </Switch>
                  </Container>
                </main>
              </div>
            </ThemeProvider>
          </div>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
