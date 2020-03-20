import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link'
import { Link as RouterLink, withRouter } from 'react-router-dom';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import { Box } from '@material-ui/core';
import { connect } from 'react-redux';
import { likeIdea } from '../ideaAction';

const useStyles = makeStyles(theme => ({
  icon: {
    marginBottom: '-4px',
    marginRight: '4px'
  },
  button: {
    cursor: 'pointer'
  }
}));

const IdeasPageBodyIdeaButtons = ({theme, likes, comments, id, likeIdea,
                                    auth: {user, isAuthenticated}, history}) => {
  const classes = useStyles(theme);
  const buttonColor = user && likes && likes.length > 0 && likes.find(like => like._id === user._id) !== undefined ? 'primary' : 'action';

  return (
    <Box mb={1} mt={1.5}>
      <Box mr={2.5} component={'span'}>
        <Typography variant="body2" display="inline" gutterBottom={true} >
          <Link className={classes.button} onClick={() => likeIdea(id, isAuthenticated, history)} color={buttonColor}>
            <ThumbUpOutlinedIcon color={buttonColor} className={classes.icon} fontSize='small'/>
            {likes.length}
          </Link>
        </Typography>
      </Box>
      <Box mr={2.5} component={'span'}>
        <Typography variant="body2" display="inline" gutterBottom={true}>
          <Link component={RouterLink} to={`/ideas/${id}`} color="secondary">
            <ChatBubbleOutlineIcon color="action" className={classes.icon} fontSize='small'/>
            {comments}
          </Link>
        </Typography>
      </Box>
    </Box>

  );
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

const actions = {
  likeIdea
};

export default connect(mapStateToProps, actions)(withRouter(IdeasPageBodyIdeaButtons));
