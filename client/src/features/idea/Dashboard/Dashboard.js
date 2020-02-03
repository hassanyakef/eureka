import React from 'react';
import DashboardHeader from './DashboardHeader';
import DashboardBody from './DashboardBody';
import DashboardSidebarRight from './DashboardSidebarRight';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  container: {
    padding: theme.spacing(2),
  },

}));

const Dashboard = ({ theme }) => {
  const classes = useStyles(theme);
  return (
    <Container className={classes.container} maxWidth={'lg'}>
      <Grid container className={classes.root} spacing={5}>
        <Grid item lg={8} sm={12}>
          <Grid container className={classes.root}>
            <Grid item sm={12}>
              <DashboardHeader/>
            </Grid>
            <Grid item sm={12}>
              <DashboardBody/>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={4} sm={12}>
          <DashboardSidebarRight/>
        </Grid>
      </Grid>
    </Container>
  )
};

export default Dashboard;