import React, {useEffect, Fragment} from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import UserDetailedHeader from './UserDetailedHeader';
import UserDetailedSidebar from './UserDetailedSidebar';
import UserDetailedPageBody from './UserDetailedPageBody';
import { connect } from 'react-redux';
import { getProfileById } from '../profileActions';
import Spinner from '../../../app/common/util/Spinner';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },

}));

const UserDetailedPage = ({theme, getProfileById, profile: { profile }, ideas, auth : {user, loading, isAuthenticated}, match}) => {

  useEffect(() => {
    getProfileById(match.params.id);
  }, [getProfileById, match.params.id]);

  const classes = useStyles(theme);

  const mainDiv = <Fragment>
    <Grid container className={classes.root} spacing={5}>
      <Grid item lg={8} sm={12}>
        <Grid container className={classes.root}>
          <Grid item sm={12}>
            <UserDetailedHeader profile={profile} user={user}/>
             {/*myProfile={isAuthenticated && profile.user && user && user._id === profile.user._id}*/}
          </Grid>
          <Grid item sm={12}>
            <UserDetailedPageBody sectionTitle={'Use Ideas'} ideas={ideas} name={user?.name || profile?.user.name}/>
          </Grid>
        </Grid>
      </Grid>
      <Grid item lg={4} sm={12}>
        <UserDetailedSidebar/>
      </Grid>
    </Grid>
  </Fragment>;

  return loading || user === null ? <Spinner/> : mainDiv;

};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
  ideas: state.idea.ideas
});

const actions = {
  getProfileById
};

export default connect(mapStateToProps, actions)(UserDetailedPage);
