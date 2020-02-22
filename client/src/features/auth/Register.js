import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link'
import { Link as RouterLink } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import {combineValidators, isRequired} from 'revalidate';
import {register, loadUser} from './authActions';
import TextInput from '../../app/common/form/TextInput';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';

const validate = combineValidators({
  name: isRequired('name'),
  email: isRequired('email'),
  password: isRequired('password'),
  password2: isRequired('password2'),
});

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  card: {
    padding: theme.spacing(5)
  }

}));

const Register = ({ theme, handleSubmit, register, error, invalid, submitting, auth: {isAuthenticated}}) => {
  const classes = useStyles(theme);

  if(isAuthenticated) {
    return <Redirect to="/dashboard"/>
  }
  return (
    <Grid container className={classes.root} spacing={5}>
      <Grid item lg={8} sm={12}>
        <Card className={classes.card}>
          <Typography variant='h2'><strong>Sign Up</strong></Typography>
          <Typography variant='subtitle1'>Create your Eureka account</Typography>

          <form autoComplete="off" onSubmit={handleSubmit(register)}>
            <Box my={2}>
              <Field
                name="name"
                component={TextInput}
                fullWidth={true}
                label="Name"
              />
            </Box>
            <Box my={2}>
              <Field
                name="email"
                component={TextInput}
                fullWidth={true}
                label="Email Address"
                type='email'
              />
            </Box>
            <Box my={2}>
              <Field
                name="password"
                component={TextInput}
                fullWidth={true}
                label="Password"
                type='password'
              />
            </Box>
            <Box my={2}>
              <Field
                name="password2"
                component={TextInput}
                fullWidth={true}
                label="Confirm Password"
                type='password'
              />
            </Box>
            <Box mt={3}>
              <Button type='submit' disabled={invalid || submitting} variant='outlined' color='primary' fullWidth={true}>Submit {submitting && <Box ml={1.5} mb={-0.7}><CircularProgress size={20}/></Box>}</Button>
            </Box>
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

const actions = {
  register,
  loadUser
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, actions)(reduxForm({ form: 'registerForm', validate})(Register));