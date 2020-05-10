import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link'
import { Link as RouterLink } from 'react-router-dom';
import { combineValidators, composeValidators, isRequired } from 'revalidate';
import { login } from './authAction';
import { Field, reduxForm } from 'redux-form';
import TextInput from '../../app/common/form/TextInput';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import { isValidEmail } from '../../app/common/util/validator';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  card: {
    padding: theme.spacing(5)
  }

}));

const validate = combineValidators({
  email: composeValidators(
    isRequired({ message: 'Email is required' }),
    isValidEmail
  )(),
  password: isRequired('password'),
});

const Login = ({ theme, auth: {isAuthenticated, loading}, login, handleSubmit, invalid, submitting }) => {
  const classes = useStyles(theme);

  if(!loading && isAuthenticated) {
    return <Redirect to="/ideas"/>
  }

  return (
    <Grid container className={classes.root} spacing={5}>
      <Grid item lg={8} sm={12}>
        <Card className={classes.card}>
          <Typography variant='h2'><strong>Log In</strong></Typography>
          <Typography variant='subtitle1'>Sign in to your Eureka account</Typography>
          <form  onSubmit={handleSubmit(login)}>
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
            <Box mt={3}>
              <Button type='submit' disabled={invalid || submitting} variant='outlined' color='primary' fullWidth={true}>Submit {submitting && <Box ml={1.5} mb={-0.7}><CircularProgress size={20}/></Box>}</Button>
            </Box>
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

const actions = {
  login,
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, actions)(reduxForm({ form: 'loginForm', validate})(Login));