import React from 'react';
import DashboardBodyIdea from './DashboardBodyIdea';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  root: {

  },
}));

const DashboardBody = ({theme}) => {
  const classes = useStyles(theme);

  return (
    <div className={classes.root}>
      <DashboardBodyIdea/>
      <DashboardBodyIdea/>
      <DashboardBodyIdea/>
      <DashboardBodyIdea/>
    </div>
  );
};

export default DashboardBody;