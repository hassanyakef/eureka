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
import PersonIcon from '@material-ui/icons/Person';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  card: {
    padding: theme.spacing(5)
  },
  icon: {
    marginBottom: '-4px',
    marginRight: '4px'
  },

}));

//
// const appTypes = [
//   {
//     value: 'ios',
//     label: 'IOS',
//   },
//   {
//     value: 'android',
//     label: 'Android',
//   },
//   {
//     value: 'webapp',
//     label: 'Web App',
//   },
//   {
//     value: 'desktopapp',
//     label: 'Desktop App',
//   },
// ];

const userStatuses = [
  {
    value: 'developer',
    label: 'Developer',
  },
  {
    value: 'public',
    label: 'Regular User',
  },
];

const EditProfile = ({ theme }) => {
  const classes = useStyles(theme);


  // const [appType, setAppType] = useState('ios');
  const [userStatus, setUserStatus] = useState('public');

  return (
    <Grid container className={classes.root} spacing={5}>
      <Grid item lg={8} sm={12}>
        <Card className={classes.card}>
          <Typography variant='h3'>Edit Profile</Typography>
          <Typography variant='subtitle1'>
            <PersonIcon className={classes.icon}/>
            Let's get some information to make your profile stand out</Typography>
          <form>
            <Box mr={2.5} mb={1} component='span'>
              <TextField
                required
                margin="dense"
                id="name"
                label="Job Title"
                placeholder='Student, Teacher, Developer, etc.'
              />
            </Box>
            <Box mr={2} mb={1} component='span'>
              <TextField
                required
                margin="dense"
                id="name"
                label="Company or School"
              />
            </Box>
            <Box mb={1}>
              <TextField
                required
                fullWidth={true}
                margin="dense"
                id="name"
                label="Location"
                placeholder='City, State'
              />
            </Box>
            <Box mb={1}>
              <TextField
                fullWidth={true}
                margin="dense"
                id="name"
                label="Interests"
                placeholder='Reading, Swimming, Hiking etc.'
              />
            </Box>
            <Box mr={2.5} mb={1} component='span'>
              <TextField
                margin="dense"
                id="name"
                label="Website"
              />
            </Box>
            <Box mr={2.5} mb={1} component='span'>
              <TextField
                margin="dense"
                id="name"
                label="Github Profile"
              />
            </Box>
            <Box mb={1} component='span'>
              <TextField
                required
                select
                label="User Status"
                margin="dense"
                value={userStatus}
                onChange={(event) => setUserStatus(event.target.value)}
                style={{minWidth: 175}}
              >
                {userStatuses.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
            <Box mb={3}>
              <TextField
                required
                label="Bio"
                multiline
                rows="4"
                placeholder="Tell us a little bit about yourself..."
                fullWidth
              />
            </Box>

            <Box mt={3}>
              <Button variant='outlined' color='primary' fullWidth={true}>Save</Button>
            </Box>
          </form>

        </Card>
      </Grid>
      <Grid item lg={4} sm={12}>
      </Grid>
    </Grid>
  )
};

export default EditProfile;