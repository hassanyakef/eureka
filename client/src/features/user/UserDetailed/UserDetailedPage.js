import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import UserDetailedHeader from './UserDetailedHeader';
import UserDetailedSidebar from './UserDetailedSidebar';
import UserDetailedPageBody from './UserDetailedPageBody';
import IdeasPageSidebarRight from '../../idea/ideasPage/IdeasPageSidebarRight';

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
      <Grid container className={classes.root} spacing={5}>
        <Grid item lg={8} sm={12}>
          <Grid container className={classes.root}>
            <Grid item sm={12}>
              <UserDetailedHeader/>
            </Grid>
            <Grid item sm={12}>
              <UserDetailedPageBody/>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={4} sm={12}>
          <UserDetailedSidebar/>
        </Grid>
      </Grid>
  );
};

export default UserDetailedPage;