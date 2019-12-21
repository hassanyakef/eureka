import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import UserDetailedPageBodyIdea from './UserDetailedPageBodyIdea';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
  cardMain: {
    padding: theme.spacing(3),
    marginTop: theme.spacing(3)
  },
  divider: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  }
}));

const UserDetailedPageBody = ({theme}) => {
  const classes = useStyles(theme);

  return (
    <Card className={classes.cardMain}>
      <Typography variant='h5'>
        User Ideas
      </Typography>
      <Divider className={classes.divider}/>
      <List className={classes.root}>
        <UserDetailedPageBodyIdea/>
        <UserDetailedPageBodyIdea/>
        <UserDetailedPageBodyIdea/>
        <UserDetailedPageBodyIdea/>
      </List>
    </Card>
  );
};

export default UserDetailedPageBody;