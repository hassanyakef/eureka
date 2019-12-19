import React from 'react';
import './App.css';
import lightBlue from '@material-ui/core/colors/lightBlue';
import blue from '@material-ui/core/colors/blue';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Navbar from './features/nav/Navbar';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: lightBlue,
  }
});

const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(5),
  },
  input: {
    padding: theme.spacing(1, 0),
  },
  box: {
    padding: theme.spacing(2),
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing(10),
    right: theme.spacing(10),
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Navbar/>
        <Container maxWidth="lg" className={classes.box}>
          <Fab className={classes.fab} color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default App;