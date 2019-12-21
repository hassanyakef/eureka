import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import UserDetailedHeader from './UserDetailedHeader';
import UserDetailedSidebar from './UserDetailedSidebar';
import UserDetailedPageBody from './UserDetailedPageBody';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  container: {
    marginTop: theme.spacing(5)
  },

}));

const UserDetailedPage = ({theme}) => {
  const classes = useStyles(theme);
  return (
    <Container className={classes.container}>
      <Grid container className={classes.root} spacing={5}>
        <Grid item md={9}>
          <Grid container className={classes.root}>
            <Grid item md={12}>
              <UserDetailedHeader/>
            </Grid>
            <Grid item md={12}>
              <UserDetailedPageBody/>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={3}>
          <UserDetailedSidebar/>
        </Grid>
      </Grid>
    </Container>
  );
};

export default UserDetailedPage;