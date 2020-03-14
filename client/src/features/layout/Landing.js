import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { Link as RouterLink, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  card: {
    padding: theme.spacing(5)
  }

}));

const Landing = ({ theme, auth: {isAuthenticated} }) => {
  const classes = useStyles(theme);

  if(isAuthenticated) {
    return <Redirect to="/dashboard"/>
  }

  return (
      <Grid container className={classes.root} spacing={5}>
        <Grid item lg={8} sm={12}>
          <Card className={classes.card}>
            <Box mb={3}>
              <Typography variant='h2'><strong>Welcome</strong></Typography>
            </Box>
            <Typography variant='body1' paragraph>Welcome to Eureka 1.0.0</Typography>
            <Typography variant='body1' paragraph>Post your app ideas and choose for them to be seen by the world or completely private.</Typography>
            <Box component='span'>
              <Button color='primary' size="large" component={RouterLink} to="/login">Login</Button>
            </Box>
            <Box component='span'>
              <Button size="large" component={RouterLink} to='/register'>Register</Button>
            </Box>
          </Card>
        </Grid>
        <Grid item lg={4} sm={12}>
        </Grid>
      </Grid>
  )
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);