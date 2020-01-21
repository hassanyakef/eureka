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
    marginTop: theme.spacing(3)
  },

}));

const UserDetailedPage = ({theme}) => {
  const classes = useStyles(theme);
  return (
      <Grid container className={classes.root} spacing={3}>
        <Grid item md={12}>
          <Grid container className={classes.root}>
            <Grid item md={12}>
              <UserDetailedHeader/>
            </Grid>
            <Grid item md={12}>
              <UserDetailedPageBody/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
  );
};

export default UserDetailedPage;