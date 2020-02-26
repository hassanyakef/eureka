import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import { Link } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import FavoriteIcon from '@material-ui/icons/Favorite';
import moment from 'moment';
import { likeComment, deleteComment } from '../ideaActions';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  card: {
    padding: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(3),
    }
  },
  icon: {
    marginBottom: '-4px',
    marginRight: '4px'
  },
  button: {
    cursor: 'pointer'
  }
}));

const IdeaDetailedComment = ({ theme, comment, likeComment, deleteComment, ideaId, user }) => {
  const {commentUser, name, avatar, commentBody, commentDate, likes, _id} = comment;

  const buttonColor = likes && likes.length > 0 && likes.find(like => like._id === user._id) !== undefined ? 'red' : 'gray';

  const classes = useStyles(theme);
  return (
    <Fragment>
      <Box mb={2}>
        <Card className={classes.card} >
          <Box style={{display: 'flex', justifyContent: 'space-between'}}>
            <Box mb={2} component='span'>
              <Chip
                avatar={  <Avatar alt={name}
                                  src={avatar}/>}
                label={name}
                clickable
                color="primary"
                component={RouterLink}
                to={`/users/${commentUser}`}
              />

            </Box>
            {
              user._id === commentUser && <Box component='span'>
                <IconButton onClick={() => deleteComment(ideaId, _id)} aria-label="delete" style={{color: '#ba1818'}}>
                  <DeleteIcon fontSize="medium" />
                </IconButton>
              </Box>
            }

          </Box>


          <Typography variant='body1' paragraph={true}>{commentBody}</Typography>
          <Box mr={2} component='span'>
            <Typography variant="body2" style={{color: '#757575'}} paragraph={true} display='inline'>
              Posted {moment(commentDate).fromNow()}
            </Typography>
          </Box>
          <Box mr={2} component='span'>
            <Typography variant="body2" display="inline" gutterBottom={true}>
              <Link className={classes.button} onClick={() => likeComment(ideaId, _id)} style={{color: `${buttonColor}`}}>
                <FavoriteIcon style={{color: `${buttonColor}`}} className={classes.icon} fontSize='small'/>
                {likes.length}
              </Link>
            </Typography>
          </Box>
        </Card>
      </Box>
    </Fragment>

  )
};

const mapStateToProps = (state) => ({
  user: state.auth.user
});

const actions = {
  likeComment,
  deleteComment
};

export default connect(mapStateToProps, actions)(IdeaDetailedComment);
