import React, {Fragment} from 'react';
import IdeaDetailedComment from './IdeaDetailedComment';
import { Typography } from '@material-ui/core';

const IdeaDetailedComments = ({comments}) => {
  return comments.length > 0 ? (
    <Fragment>
      {comments.map(comment => (
      <IdeaDetailedComment comment={comment}/>
      ))}
    </Fragment>
  ) : null;
};

export default IdeaDetailedComments;