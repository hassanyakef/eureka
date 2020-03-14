import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import SelectInput from '../../../app/common/form/SelectInput';
import TextInput from '../../../app/common/form/TextInput';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Field, reduxForm } from 'redux-form';
import { combineValidators, isRequired } from 'revalidate';
import { addIdea } from '../ideaActions';
import { withRouter } from 'react-router-dom';
import RichEditor from '../../../app/common/form/RichEditor';

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

const AddIdea = ({ theme, addIdea, handleSubmit, history, invalid, submitting }) => {
  const classes = useStyles(theme);

  return (
    <Grid container className={classes.root} spacing={5}>
      <Grid item lg={8} sm={12}>
        <Card className={classes.card}>
          <Typography variant='h3'>Add Idea</Typography>
          <Typography variant='subtitle1'>What kind of app do you wish to be made?</Typography>
          <form onSubmit={handleSubmit(val => addIdea(val, history))}>
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
              {/*<Field*/}
              {/*  required*/}
              {/*  margin="dense"*/}
              {/*  name="body"*/}
              {/*  label="Enter more details..."*/}
              {/*  multiline={true}*/}
              {/*  fullWidth={true}*/}
              {/*  rows="5"*/}
              {/*  placeholder="State your problem and potential features for the app..."*/}
              {/*  component={RichEditor}*/}
              {/*/>*/}
              <Box mb={1}>
                <Typography variant='body1'>Body</Typography>
              </Box>
              <Field
                name="body"
                config={
                  {
                    placeholder:"Enter more details...",
                  }
                }
                component={RichEditor}
              />
            </Box>

            <Box mt={3}>
              <Button disabled={invalid || submitting} type='submit' variant='outlined' color='primary' fullWidth={true}>Submit {submitting && <Box ml={1.5} mb={-0.7}><CircularProgress size={20}/></Box>}</Button>
            </Box>
          </form>

        </Card>
      </Grid>
      <Grid item lg={4} sm={12}>
      </Grid>
    </Grid>
  )
};

const actions = { addIdea };

export default connect(null, actions)(reduxForm({ form: 'addIdeaForm', validate})(
  withRouter(AddIdea)));
