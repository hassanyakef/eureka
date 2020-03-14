import React from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import UserDetailedHeaderInfo from './UserDetailedHeaderInfo';
import Link from '@material-ui/core/Link'
import { Link as RouterLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  profile: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    [theme.breakpoints.down('sm')]: {
      width: theme.spacing(15),
      height: theme.spacing(15),
    }
  },
  card: {
    padding: theme.spacing(3)
  },
  icon: {
    marginBottom: '-3px'
  }
}));

const UserDetailedHeader = ({ theme, profile, user, isAuthenticatedUser = true }) => {
  const classes = useStyles(theme);

  return (
    <Box mb={3}>
      <Card className={classes.card}>
        <Grid container className={classes.root} spacing={2}>
          <Grid item md={2.5}>
            <Avatar className={classes.profile} alt="Remy Sharp"
                    src={profile?.user?.avatar || user?.avatar}/>
          </Grid>
          <Grid item md={8}>
            <Typography variant="h4" >
              {profile?.user?.name || user?.name}
            </Typography>
            {profile !== null ? (<Typography variant="h6" gutterBottom={true}>
              {profile?.profession} at {profile?.company}
            </Typography>) : null}
            <Box my={1.5}>
              {isAuthenticatedUser ? <Button size='medium' fullWidth={false} variant='outlined' color='primary' component={RouterLink} to='/edit-profile'>Edit Profile</Button> :
                <Button size='medium' fullWidth={false} variant='contained' color='secondary'>+ Follow</Button>
              }
            </Box>
            <Typography variant="body1" gutterBottom={true} >
              {profile?.bio}
            </Typography>
            <UserDetailedHeaderInfo profile={profile}/>
            <Box mt={1}>
              <Box component='span' mr={2}>
                <Typography color="secondary" display="inline" variant="body1">
                  <Link color="secondary" component={RouterLink} to='/users'>
                    <strong>15</strong> Followers
                  </Link>
                </Typography>
              </Box>
              <Typography display="inline" variant="body1">
                <Link color="secondary"  component={RouterLink} to='/users'>
                  <strong>22</strong> Following
                </Link>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Card>
    </Box>

  );
};

export default UserDetailedHeader;