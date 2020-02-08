import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link'
import { Link as RouterLink } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  card: {
    padding: theme.spacing(5)
  }

}));

const Login = ({ theme }) => {
  const classes = useStyles(theme);
  return (
    <Grid container className={classes.root} spacing={5}>
      <Grid item lg={8} sm={12}>
        <Card className={classes.card}>
          <Typography variant='h2'><strong>Log In</strong></Typography>
          <Typography variant='subtitle1'>Sign in to your Eureka account</Typography>

          <form>
            <Box my={2}>
              <TextField fullWidth={true} label="Email Address" type='email'/>
            </Box>
            <Box my={2}>
              <TextField fullWidth={true}  label="Password" type='password'/>
            </Box>
            <Button variant='outlined' color='primary' fullWidth={true}>Submit</Button>
            <Box mt={2}>
              <Typography variant='body1'>Don't have an account? <Link component={RouterLink} to='/register'>Sign Up</Link></Typography>
            </Box>
          </form>

        </Card>
      </Grid>
      <Grid item lg={4} sm={12}>
      </Grid>
    </Grid>
  )
};

export default Login;