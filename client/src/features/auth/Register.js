import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link'
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  card: {
    padding: theme.spacing(5)
  }

}));

const Register = ({ theme }) => {
  const classes = useStyles(theme);
  return (
    <Grid container className={classes.root} spacing={5}>
      <Grid item lg={8} sm={12}>
        <Card className={classes.card}>
          <Typography variant='h2'><strong>Sign Up</strong></Typography>
          <Typography variant='subtitle1'>Create your Eureka account</Typography>

          <form autoComplete="off">
            <Box my={2}>
              <TextField fullWidth={true} label="Name"/>
            </Box>
            <Box my={2}>
              <TextField autoComplete="off" fullWidth={true} label="Email Address" type='email'/>
            </Box>
            <Box my={2}>
              <TextField fullWidth={true}  label="Password" type='password'/>
            </Box>
            <Box my={2}>
              <TextField fullWidth={true}  label="Confirm Password" type='password'/>
            </Box>
            <Button variant='outlined' color='primary' fullWidth={true}>Submit</Button>
            <Box mt={2}>
              <Typography variant='body1'>Already have an account? <Link component={RouterLink} to='/login'>Log In</Link></Typography>
            </Box>


          </form>

        </Card>
      </Grid>
      <Grid item lg={4} sm={12}>
      </Grid>
    </Grid>
  )
};

export default Register;