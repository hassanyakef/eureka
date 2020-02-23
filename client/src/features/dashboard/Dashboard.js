import React, { Fragment, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { Card, Box, Grid } from '@material-ui/core';
import DashboardIdeaCard from './DashboardIdeaCard';
import Button from '@material-ui/core/Button';
import PersonIcon from '@material-ui/icons/Person';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import CreateIcon from '@material-ui/icons/Create';
import { Link as RouterLink } from 'react-router-dom';
import Spinner from '../../app/common/util/Spinner';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../user/profileActions';

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
  },
  icon: {
    marginBottom: '-4px',
    marginRight: '4px'
  },
  successButton: {
    color: '#4caf50',
    borderColor: '#4caf50',
    '&:hover': {
      backgroundColor: '#f1f8e9'
    }
  }
}));

const Dashboard = ({ theme, user, profile: { profile, loading}, getCurrentProfile }) => {
  const classes = useStyles(theme);

  useEffect(() => {
    getCurrentProfile();
  }, []);

  const mainDiv = <Fragment>
    <Box mb={2}>
      <Card className={classes.card}>
        <Box my={1}>
          <Typography variant='h3'>
            Dashboard
          </Typography>
        </Box>
        <Box my={1}>
          <Typography variant='h5'>
            <PersonIcon className={classes.icon}/>
            Welcome {user?.name}
          </Typography>
        </Box>
        <Box mt={1.5}>
          <ButtonGroup aria-label="button group">
            <Button color='primary' component={RouterLink} to='/edit-profile' startIcon={ <AccountCircleIcon />}>
              Edit Profile
            </Button>
            <Button  className={classes.successButton} component={RouterLink} to='/ideas/add' startIcon={<CreateIcon />}>
              Post Idea</Button>
          </ButtonGroup>
        </Box>
      </Card>
    </Box>

    <Card className={classes.card}>
      <Box my={1}>
        <Typography variant='h5'>
          My Ideas
        </Typography>
      </Box>
      <Box mt={2} mb={0.5}>
        <Divider/>
      </Box>
      <List className={classes.root}>
        <Grid container spacing={20}>
          <DashboardIdeaCard/>
          <DashboardIdeaCard/>
          <DashboardIdeaCard/>
          <DashboardIdeaCard/>
          <DashboardIdeaCard/>
        </Grid>

      </List>
    </Card>
  </Fragment>;

  return loading && profile === null ? <Spinner/> : mainDiv;
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  profile: state.profile
});

const actions = {
  getCurrentProfile
};

export default connect(mapStateToProps, actions)(Dashboard);
