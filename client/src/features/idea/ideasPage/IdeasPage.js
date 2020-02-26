import React, { Fragment, useEffect } from 'react';
import IdeasPageHeader from './IdeasPageHeader';
import IdeasPageBody from './IdeasPageBody';
import IdeasPageSidebarRight from './IdeasPageSidebarRight';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { getIdeas } from '../../idea/ideaActions';
import { connect } from 'react-redux';
import Spinner from '../../../app/common/util/Spinner';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}));

const IdeasPage = ({ theme, getIdeas, ideas, auth : {loading, user} }) => {
  const classes = useStyles(theme);

  useEffect(() => {
    getIdeas();
  }, [getIdeas]);

  return (
    <Fragment>
      { loading || user === null ? (
        <Spinner />
      ) : (
      <Grid container className={classes.root} spacing={5}>
        <Grid item lg={8} sm={12}>
          <Grid container className={classes.root}>
            <Grid item sm={12}>
              <IdeasPageHeader user={user}/>
            </Grid>
            <Grid item sm={12}>
              <IdeasPageBody ideas={ideas}/>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={4} sm={12}>
          <IdeasPageSidebarRight/>
        </Grid>
      </Grid>
      )}
    </Fragment>
  )
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  ideas: state.idea.ideas,
});

const actions = {
  getIdeas
};

export default connect(mapStateToProps, actions)(IdeasPage);
