import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { Field, reduxForm } from 'redux-form';
import { combineValidators, isRequired } from 'revalidate';
import TextArea from '../../../app/common/form/TextArea';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  }
}));

const validate = combineValidators({
  commentBody: isRequired('Comment body'),
});

const IdeaDetailedAddComment = ({ theme, addComment, idea, handleSubmit, invalid, submitting  }) => {
  const classes = useStyles(theme);
  return (
      <Fragment>
        <form onSubmit={handleSubmit(val => addComment(idea._id, val))}>
          <Typography variant='h4'>
            Comment
          </Typography>
          <Field
            required
            name="commentBody"
            label="Add Comment"
            multiline={true}
            fullWidth={true}
            rows="3"
            component={TextArea}
          />
          <Box mt={2}>
            <Button disabled={invalid || submitting} type='submit' fullWidth={false} variant='contained' color='primary'>Submit</Button>
          </Box>
        </form>
      </Fragment>
  )
};

export default reduxForm({ form: 'addCommentForm', validate})(IdeaDetailedAddComment);