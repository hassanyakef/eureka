import React, {Fragment} from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import UserDetailedHeaderInfo from '../../user/UserDetailed/UserDetailedHeaderInfo';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

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
    padding: theme.spacing(3),
  },
  follower: {
    marginRight: theme.spacing(2)
  },
  icon: {
    marginBottom: '-3px'
  }
}));

const IdeaDetailedSidebarRight = ({ theme }) => {
  const classes = useStyles(theme);

  return (
    <Fragment>
      <Grid container className={classes.root} spacing={2}>
        <Grid item md={2.5}>
          <Avatar className={classes.profile} alt="Remy Sharp"
                  src="http://swipemarket.com/wp-content/uploads/2014/06/Untitled-6.jpg"/>
        </Grid>
        <Grid item md={12}>
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
          <Box my={2}>
           <Button size='large' fullWidth={true} variant='contained' color='secondary'>+ Follow</Button>
          </Box>

        </Grid>
      </Grid>
    </Fragment>
  );
};

export default IdeaDetailedSidebarRight;