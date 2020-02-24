import React, {Fragment} from 'react';
import IdeaDetailedComment from './IdeaDetailedComment';
import { Typography } from '@material-ui/core';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

const IdeaDetailedComments = ({comments, sortCommentsByDate, sortCommentsByLikes}) => {
  return comments.length > 0 ? (
    <Fragment>
      <Box my={2} mx={1}>
        <Box mr={0.5} component='span'>
          <Typography variant='body2' component='span'>
            Sort by:
          </Typography>
        </Box>
        <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
          <Button style={{textTransform: 'capitalize'}} onClick={() => sortCommentsByDate()}>Date</Button>
          <Button style={{textTransform: 'capitalize'}} onClick={() => sortCommentsByLikes()}>Likes</Button>
        </ButtonGroup>
      </Box>

      {comments.map(comment => (
      <IdeaDetailedComment comment={comment}/>
      ))}
    </Fragment>
  ) : null;
};

export default IdeaDetailedComments;