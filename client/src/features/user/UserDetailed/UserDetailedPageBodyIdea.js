import React, {Fragment} from 'react';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import UserDetailedBodyInfo from './UserDetailedBodyInfo';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

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
  },
  idea: {
    padding: theme.spacing(1),
  }
}));

const UserDetailedPageBodyIdea = ({theme}) => {
  const classes = useStyles(theme);

  return (
    <Fragment>
      <ListItem>
        <Grid container className={classes.root} spacing={1}>
          <Grid item md={1}>
            <Avatar className={classes.profile} alt="Remy Sharp"
                    src="http://swipemarket.com/wp-content/uploads/2014/06/Untitled-6.jpg"/>
          </Grid>
          <Grid item md={11}>
            <Typography variant="h6" gutterBottom={true}>
              <Link href="#">
                Idea Generator
              </Link>
            </Typography>
            <Typography variant="body1" gutterBottom={true} >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, delectus fugit in itaque placeat possimus quasi quo reprehenderit sint. Deserunt.
            </Typography>
            <UserDetailedBodyInfo/>
          </Grid>
        </Grid>
      </ListItem>
      <Divider variant="inset" component="li" />
    </Fragment>
  );
};

export default UserDetailedPageBodyIdea;