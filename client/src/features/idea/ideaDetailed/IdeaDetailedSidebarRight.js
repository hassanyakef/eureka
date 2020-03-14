import React, {Fragment} from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import UserDetailedHeaderInfo from '../../user/UserDetailed/UserDetailedHeaderInfo';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  profile: {
      width: theme.spacing(15),
    height: theme.spacing(15),
    [theme.breakpoints.down('sm')]: {
      width: theme.spacing(12.5),
      height: theme.spacing(12.5),
    }
  }
}));

const IdeaDetailedSidebarRight = ({ theme, profile, isAuthenticated }) => {
  const classes = useStyles(theme);

  const {profession, company, website, bio, location, date, user: {avatar, name, _id} } = profile;
  return (
    <Fragment>
      <Grid container className={classes.root} spacing={2}>
        <Grid item md={2.5}>
          <Avatar className={classes.profile} alt={name}
                  src={avatar}/>
        </Grid>
        <Grid item md={12}>
          <Typography variant="h4" >
            {name}
          </Typography>
          <Typography variant="h6" gutterBottom={true}>
            {profession} at {company}
          </Typography>
          <Typography variant="body1" gutterBottom={true} >
            {bio}
          </Typography>
          <UserDetailedHeaderInfo profile={{website, location, date}}/>
          {isAuthenticated &&
            <Box my={2}>
              <Button size='large' fullWidth={true} variant='contained' color='secondary'>+ Follow</Button>
            </Box>
          }
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default IdeaDetailedSidebarRight;