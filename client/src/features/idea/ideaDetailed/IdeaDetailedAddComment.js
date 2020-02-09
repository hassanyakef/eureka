import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  card: {
    padding: theme.spacing(5)
  }

}));

const IdeaDetailedAddComment = ({ theme }) => {
  const classes = useStyles(theme);
  return (
      <Fragment>
        <form>
          <Typography variant='h4'>
            Comment
          </Typography>
          <TextField
            required
            label="Add Comment"
            multiline
            rows="3"
            fullWidth
          />
          <Box mt={2}>
            <Button fullWidth={false} variant='contained' color='primary'>Submit</Button>
          </Box>
        </form>
      </Fragment>
  )
};

export default IdeaDetailedAddComment;