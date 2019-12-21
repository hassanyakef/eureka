import React from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import UserDetailedHeaderInfo from './UserDetailedHeaderInfo';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  profile: {
    width: theme.spacing(20),
    height: theme.spacing(20)
  },
  container: {
    marginTop: theme.spacing(5)
  },
  card: {
    padding: theme.spacing(3)
  },
  follower: {
    marginRight: theme.spacing(2)
  },
  socialStat: {
    marginTop: theme.spacing(1),
  },
  icon: {
    marginBottom: '-3px'
  }
}));

const UserDetailedHeader = ({ theme }) => {
  const classes = useStyles(theme);

  return (
    <Card className={classes.card}>
      <Grid container className={classes.root} spacing={2}>
        <Grid item md={2.5}>
          <Avatar className={classes.profile} alt="Remy Sharp"
                  src="http://swipemarket.com/wp-content/uploads/2014/06/Untitled-6.jpg"/>
        </Grid>
        <Grid item md={9}>
          <Typography variant="h4" >
            John Doe
          </Typography>
          <Typography variant="h6" gutterBottom={true}>
            Student at Virginia Tech
          </Typography>
          <Typography variant="body1" gutterBottom={true} >
            I'm a web developer based in Blacksburg, Virginia. I have a strong background in creating websites as well as developing rich interactive web apps.
          </Typography>
          <UserDetailedHeaderInfo/>
          <div className={classes.socialStat}>
            <Typography color="secondary" className={classes.follower} display="inline" variant="body1">
              <Link color="secondary" href="#">
                <strong>15</strong> Followers
              </Link>
            </Typography>
            <Typography display="inline" variant="body1">
              <Link color="secondary" href="#">
                <strong>22</strong> Following
              </Link>
            </Typography>
          </div>

        </Grid>
      </Grid>
    </Card>
  );
};

export default UserDetailedHeader;