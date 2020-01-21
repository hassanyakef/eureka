import React from 'react';
import DashboardHeader from './DashboardHeader';
import DashboardBody from './DashboardBody';
import DashboardSidebarRight from './DashboardSidebarRight';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import UserDetailedHeader from '../../user/UserDetailed/UserDetailedHeader';
import UserDetailedPageBody from '../../user/UserDetailed/UserDetailedPageBody';
import UserDetailedSidebar from '../../user/UserDetailed/UserDetailedSidebar';
import DashboardSidebarLeft from './DashboardSidebarLeft';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  container: {
    marginTop: theme.spacing(5)
  },

}));

const Dashboard = ({ theme }) => {
  const classes = useStyles(theme);
  return (
    <Container className={classes.container}>
      <Grid container className={classes.root} spacing={5}>
        <Grid item md={2}>
          <DashboardSidebarLeft/>
        </Grid>
        <Grid item md={8}>
          <Grid container className={classes.root}>
            <Grid item md={12}>
              <DashboardHeader/>
            </Grid>
            <Grid item md={12}>
              <DashboardBody/>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={2}>
          <DashboardSidebarRight/>
        </Grid>
      </Grid>
    </Container>
  )
};

export default Dashboard;