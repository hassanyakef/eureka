import React, { Fragment, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link'
import { Link as RouterLink } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

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

const AddIdea = ({ theme }) => {
  const classes = useStyles(theme);


  const [appType, setAppType] = useState('ios');
  const [visibility, setVisibility] = useState('private');

  return (
    <Grid container className={classes.root} spacing={5}>
      <Grid item lg={8} sm={12}>
        <Card className={classes.card}>
          <Typography variant='h3'>Add Idea</Typography>
          <Typography variant='subtitle1'>What kind of app do you wish to be made?</Typography>
          <form>
            <Box mb={1}>
              <TextField
                required
                autoFocus
                fullWidth={true}
                margin="dense"
                id="name"
                label="App idea Suggestion"
                placeholder='What kind of app do you need?'
              />
            </Box>
            <Box mr={2} mb={1} component='span'>
              <TextField
                required
                id="standard-select-currency"
                select
                label="Platform"
                margin="dense"
                value={appType}
                onChange={(event) => setAppType(event.target.value)}
                style={{minWidth: 100}}
              >
                {appTypes.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
            <Box mr={2} mb={1} component='span'>
              <TextField
                required
                id="standard-select-currency"
                select
                label="Visibility"
                margin="dense"
                value={visibility}
                onChange={(event) => setVisibility(event.target.value)}
                style={{minWidth: 100}}
              >
                {visibilities.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
            <Box mb={3}>
              <TextField
                required
                label="Enter more details..."
                multiline
                rows="5"
                placeholder="State your problem and potential features for the app..."
                fullWidth

              />
            </Box>

            <Box mt={3}>
              <Button variant='outlined' color='primary' fullWidth={true}>Submit</Button>
            </Box>
          </form>

        </Card>
      </Grid>
      <Grid item lg={4} sm={12}>
      </Grid>
    </Grid>
  )
};

export default AddIdea;