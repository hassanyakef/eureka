import React from 'react';
import IdeasPageHeader from './IdeasPageHeader';
import IdeasPageBody from './IdeasPageBody';
import IdeasPageSidebarRight from './IdeasPageSidebarRight';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },

}));

const IdeasPage = ({ theme }) => {
  const classes = useStyles(theme);
  return (
      <Grid container className={classes.root} spacing={5}>
        <Grid item lg={8} sm={12}>
          <Grid container className={classes.root}>
            <Grid item sm={12}>
              <IdeasPageHeader/>
            </Grid>
            <Grid item sm={12}>
              <IdeasPageBody/>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={4} sm={12}>
          <IdeasPageSidebarRight/>
        </Grid>
      </Grid>
  )
};

export default IdeasPage;