import React from 'react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import DashboardBodyIdeaButtons from './DashboardBodyIdeaButtons';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  profile: {
    width: theme.spacing(6),
    height: theme.spacing(6)
  },
  container: {
    marginTop: theme.spacing(5)
  },
  card: {
    padding: theme.spacing(3),
    marginBot: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
  follower: {
    marginRight: theme.spacing(2)
  },
  socialStat: {
    marginTop: theme.spacing(1),
  },
  icon: {
    marginBottom: '-3px'
  },
  profileName: {
    marginTop: theme.spacing(0.5)
  },
  ideaLink: {
    color: '#64b5f6',
    "&:hover": {
      color: '#2196f3'
    }
  },

}));

const DashboardBodyIdea = ({theme}) => {
  const classes = useStyles(theme);

  return (
    <Card className={classes.card} variant="outlined">
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6" >
            <Link href="#" color="secondary">
              An app to share ideas
            </Link>
          </Typography>
        </Grid>
        <Grid item sm={2.5}>
          <Avatar className={classes.profile} alt="Remy Sharp"
                  src="http://swipemarket.com/wp-content/uploads/2014/06/Untitled-6.jpg"/>

        </Grid>
        <Grid item sm={6}>
          <Typography variant="body2" className={classes.profileName}>
            <Link href="#" color="secondary">
              John Doe
            </Link>
          </Typography>
          <Typography variant="body2" style={{color: '#757575'}} className={classes.profileName}>
              Written Mar 21, 2019
          </Typography>
        </Grid>
        <Grid item md={12}>
          <Typography variant="body1" gutterBottom={true}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto blanditiis dolorem error facere incidunt, ipsam repellat. Aliquam consequatur dignissimos distinctio fuga ipsa, odio omnis pariatur quidem, quisquam quod rem suscipit...
            {' '}
            <Link href="#">
              (more)
            </Link>

          </Typography>
          <DashboardBodyIdeaButtons/>
        </Grid>
      </Grid>
    </Card>
  );
};

export default DashboardBodyIdea;