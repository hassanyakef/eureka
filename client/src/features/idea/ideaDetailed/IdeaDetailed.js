import React, { Fragment, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import IdeaDetailedSidebarRight from './IdeaDetailedSidebarRight';
import IdeaDetailedBody from './IdeaDetailedBody';
import IdeaDetailedAddComment from './IdeaDetailedAddComment';
import IdeaDetailedComments from './IdeaDetailedComments';
import { getProfileById } from '../../user/profileActions';
import { connect } from 'react-redux';
import Spinner from '../../../app/common/util/Spinner';
import { addComment, getIdea } from '../ideaActions';
import {sortCommentsByDate, sortCommentsByLikes} from '../ideaActions';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  card: {
    padding: theme.spacing(5),
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(3),
    }
  }

}));

const IdeaDetailed = ({ theme, idea, profile, auth: {loading},
                        getIdea, addComment, match, sortCommentsByDate,
                        sortCommentsByLikes
                      }) => {
  const classes = useStyles(theme);

  useEffect(() => {
    getIdea(match.params.id);
  }, [getIdea]);

  const mainDiv =<Fragment>
      <Grid container className={classes.root} spacing={3}>
        <Grid item lg={8} sm={12}>
          <Card className={classes.card}>
            <IdeaDetailedBody idea={idea}/>
          </Card>
          <Card className={classes.card}>
            <IdeaDetailedAddComment addComment={addComment} idea={idea}/>
          </Card>
          {idea !== null && idea.comments.length > 0 ? (
            <IdeaDetailedComments
              ideaId={idea._id}
            comments={idea.comments}
            sortCommentsByDate={sortCommentsByDate}
            sortCommentsByLikes={sortCommentsByLikes}/>) : null}
        </Grid>
        <Grid item lg={4} sm={12}>
          <Card className={classes.card}>
            <IdeaDetailedSidebarRight profile={profile}/>
          </Card>
        </Grid>
      </Grid>
    </Fragment>;

  return loading || idea === null || profile === null ? <Spinner/> : mainDiv;

};

const mapStateToProps = (state) => ({
  auth: state.auth,
  idea: state.idea.idea,
  profile: state.profile.profile
});

const actions = {
  getIdea,
  addComment,
  getProfileById,
  sortCommentsByDate,
  sortCommentsByLikes
};

export default connect(mapStateToProps, actions)(IdeaDetailed);
