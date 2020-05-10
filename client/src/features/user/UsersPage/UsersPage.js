import React, { Fragment, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { Card, Box, Grid } from '@material-ui/core';
import UserCard from './UserCard';
import { getProfiles } from '../profileAction';
import { connect } from 'react-redux';
import Spinner from '../../../app/common/util/Spinner';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
  card: {
    padding: theme.spacing(3),
  },
  divider: {
    marginTop: theme.spacing(2),
  }
}));

const UsersPage = ({ theme, getProfiles, profile: { profiles }, auth : {loading}}) => {
  const classes = useStyles(theme);

  useEffect(() => {
    if(!profiles) {
      getProfiles();
    }
  }, [getProfiles]);

  return (
    <Fragment>
    {loading || profiles === null? (
        <Spinner />
      ) : (
          <Card className={classes.card}>
            <Typography variant='h5'>
              Users to Follow
            </Typography>
            <Box mt={2}>
              <Divider/>
            </Box>
            <List className={classes.root}>
              <Grid container spacing={20}>
                {profiles?.length > 0 ? (
                    profiles.map(profile => (
                      <UserCard key={profile._id} profile={profile} />
                  ))
                ) : (
                  <h4>No profiles found...</h4>
                )}
              </Grid>

            </List>
          </Card>
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

const actions = {
  getProfiles
};

export default connect(mapStateToProps, actions)(UsersPage);
