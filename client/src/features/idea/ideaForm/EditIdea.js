import React, { Fragment, useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { getIdea, updateIdea } from '../ideaActions';
import { combineValidators, composeValidators, isRequired } from 'revalidate';
import TextInput from '../../../app/common/form/TextInput';
import SelectInput from '../../../app/common/form/SelectInput';
import TextArea from '../../../app/common/form/TextArea';
import CircularProgress from '@material-ui/core/CircularProgress';
import RichEditor from '../../../app/common/form/RichEditor';
import Spinner from '../../../app/common/util/Spinner';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  card: {
    padding: theme.spacing(5)
  }

}));


const appTypes = [
  {
    value: 'ios',
    label: 'IOS',
  },
  {
    value: 'android',
    label: 'Android',
  },
  {
    value: 'webapp',
    label: 'Web App',
  },
  {
    value: 'desktopapp',
    label: 'Desktop App',
  },
];

const visibilities = [
  {
    value: 'public',
    label: 'Public',
  },
  {
    value: 'private',
    label: 'Private',
  },
];

const validate = combineValidators({
  title: isRequired('Title'),
  body: isRequired('Body'),
  category: isRequired('Category'),
  status: isRequired('Visibility'),
});

const EditIdea = ({ theme, getIdea, updateIdea, handleSubmit, history,
                    invalid, submitting, match, auth: {loading} }) => {
  const classes = useStyles(theme);


  useEffect(() => {
    getIdea(match.params.id);
  }, [match]);

  return loading ? (<Spinner/>) : (
    <Grid container className={classes.root} spacing={5}>
      <Grid item lg={8} sm={12}>
        <Card className={classes.card}>
          <Typography variant='h3'>Edit Idea</Typography>
          <Typography variant='subtitle1'>Update and save your idea <span style={{visibility: 'hidden'}}>sssssssss</span></Typography>
          <form onSubmit={handleSubmit(val => updateIdea(match.params.id, val, history))}>
            <Box mb={1}>
              <Field
                required={true}
                autoFocus={true}
                fullWidth={true}
                margin="dense"
                label="App idea Suggestion"
                placeholder='What kind of app do you need?'
                name="title"
                component={TextInput}
              />
            </Box>
            <Box mr={2} mb={1} component='span'>
              <Field
                required={true}
                margin="dense"
                name="category"
                label="Platform"
                defaultValue={appTypes[1].value}
                style={{minWidth: 100}}
                component={SelectInput}
              >
                {appTypes.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Field>
            </Box>
            <Box mr={2} mb={1} component='span'>
              <Field
                required={true}
                margin="dense"
                name="status"
                label="Visibility"
                defaultValue={visibilities[1].value}
                style={{minWidth: 100}}
                component={SelectInput}
              >
                {visibilities.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Field>
            </Box>
            <Box mb={3} mt={3}>
              <Field
                name="body"
                config={
                  {
                    alignment: {
                      options: [ 'left', 'center', 'justify', 'right']
                    }
                  }
                }
                component={RichEditor}
              />
            </Box>

            <Box mt={3}>
              <Button type='submit' disabled={invalid || submitting} variant='outlined' color='primary' fullWidth={true}>Save {submitting && <Box ml={1.5} mb={-0.7}><CircularProgress size={20}/></Box>}</Button>
            </Box>
          </form>

        </Card>
      </Grid>
      <Grid item lg={4} sm={12}>
      </Grid>
    </Grid>
  )
};

const mapStateToProps = (state) => ({
  initialValues: state.idea.idea,
  auth: state.auth
});

const actions = { updateIdea, getIdea };

export default connect(mapStateToProps, actions)(reduxForm({ form: 'editIdeaForm', validate})(
  withRouter(EditIdea)));
