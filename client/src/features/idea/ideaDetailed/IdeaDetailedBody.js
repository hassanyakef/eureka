import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar';
import BookmarkIcon from '@material-ui/icons/Bookmark';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  card: {
    padding: theme.spacing(5)
  },
  info: {
    marginBottom: theme.spacing(1)
  },
  hashtag: {
    padding: theme.spacing(0.5),
    borderRadius: theme.spacing(0.5)
  }

}));

const IdeaDetailedBody = ({ theme }) => {
  const classes = useStyles(theme);
  return (
    <Fragment>
      <Box mb={3}>
        <Typography variant='h3'>An app to share ideas</Typography>
      </Box>
      <Grid container spacing={2} className={classes.info}>
        <Grid item sm={2.5}>
          <Link component={RouterLink} to='/users/1'>
            <Avatar className={classes.profile} alt="Remy Sharp"
                    src="http://swipemarket.com/wp-content/uploads/2014/06/Untitled-6.jpg"/>
          </Link>
        </Grid>
          <Box mt={2} ml={1} mr={0} component='span'>
            <Link variant='body1' color="secondary" component={RouterLink} to='/users/1'>John Doe</Link>
          </Box>
          <Box mt={2} mx={1} component='span'>
            <Typography display='inline' variant="body1" style={{color: '#757575'}}>
              Written Mar 21, 2019
            </Typography>
          </Box>
          <Box  mt={2} mb={1} ml={2} component='span'>
            <Button
              variant="outlined"
              color="primary"
              size='small'
              className={classes.button}
              startIcon={<BookmarkIcon />}
            >
              Save
            </Button>
           </Box>
      </Grid>
      <Box mb={2}>
        <Box mr={1} component='span'>
          <Typography display='inline' variant="body2" className={classes.hashtag} style={{backgroundColor: 'yellow'}}>
            #IOS
          </Typography>
        </Box>
        <Box mr={1} component='span'>
          <Typography display='inline' variant="body2" className={classes.hashtag} style={{backgroundColor: 'lightgreen'}}>
            #public
          </Typography>
        </Box>

      </Box>

      <Box my={4}>
        <Typography variant='body1' paragraph={true}>Developer/coders often do not consider the
          software from the end user's point of view, and thus, they can miss-code some
          features. This app can solve this problem by creating an easy communication
          channel between the user (the idea creator) and the coder (the solver) without the
          coder having to share the user's experience themselves.
        </Typography>
        <Typography variant='body1' paragraph={true}>Developer/coders often do not consider the
          software from the end user's point of view, and thus, they can miss-code some
          features. This app can solve this problem by creating an easy communication
          channel between the user (the idea creator) and the coder (the solver) without the
          coder having to share the user's experience themselves.
        </Typography>
        <Typography variant='body1' paragraph={true}>Developer/coders often do not consider the
          software from the end user's point of view, and thus, they can miss-code some
          features. This app can solve this problem by creating an easy communication
          channel between the user (the idea creator) and the coder (the solver) without the
          coder having to share the user's experience themselves.
        </Typography>
      </Box>

    </Fragment>
  );
};

export default IdeaDetailedBody;