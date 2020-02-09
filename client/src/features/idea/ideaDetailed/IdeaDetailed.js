import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import IdeaDetailedSidebarRight from './IdeaDetailedSidebarRight';
import IdeaDetailedBody from './IdeaDetailedBody';
import IdeaDetailedAddComment from './IdeaDetailedAddComment';
import IdeaDetailedComments from './IdeaDetailedComments';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  card: {
    padding: theme.spacing(5),
    marginBottom: theme.spacing(3)
  }

}));

const IdeaDetailed = ({ theme }) => {
  const classes = useStyles(theme);
  return (
    <Grid container className={classes.root} spacing={3}>
      <Grid item lg={8} sm={12}>
        <Card className={classes.card}>
         <IdeaDetailedBody/>
        </Card>
        <Card className={classes.card}>
          <IdeaDetailedAddComment/>
        </Card>
          <IdeaDetailedComments/>
      </Grid>
      <Grid item lg={4} sm={12}>
        <Card className={classes.card}>
          <IdeaDetailedSidebarRight/>
        </Card>
      </Grid>
    </Grid>
  )
};

export default IdeaDetailed;