import React, {Fragment} from 'react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link'
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import IdeasPageBodyIdeaButtons from './IdeasPageBodyIdeaButtons';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import moment from 'moment';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  profile: {
    width: theme.spacing(6),
    height: theme.spacing(6)
  },
  cardIdeasPage: {
    padding: theme.spacing(3),
  },
  cardUserPage: {
    padding: theme.spacing(2, 1),
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(0),
      paddingRight: theme.spacing(0),
    },
  },

}));

const IdeasPageBodyIdea = ({theme, elevateCard = true, marginY = 2, dividerBottom = false, idea}) => {
  const classes = useStyles(theme);
  const {title, body, status, category, _id, avatar, authorName, user, likes, comments, date} = idea;

  return (
    <Fragment>
      <Box my={marginY}>
        <Card className={!elevateCard ? classes.cardUserPage : classes.cardIdeasPage} variant="outlined" elevation={elevateCard ? 1 : 0}>
          <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
              <Link variant='h6' color="secondary" component={RouterLink} to={`/ideas/${_id}`}>{title}</Link>
            </Grid>
            <Grid item sm={2.5}>
              <Box mt={0.5}>
                <Link component={RouterLink} to={`/users/${user}`}>
                  <Avatar alt={authorName}
                          src={avatar}/>
                </Link>
              </Box>

            </Grid>
            <Grid item sm={6}>
              <Box mt={0.5}>
                <Link variant='body2' color="secondary" component={RouterLink} to={`/users/${user}`}>{authorName}</Link>
              </Box>
              <Box mt={0.5}>
                <Typography variant="body2" style={{color: '#757575'}}>
                  Written {moment(date).format("LL")}
                </Typography>
              </Box>
            </Grid>
            <Grid item md={12}>
              <Typography variant="body1" paragraph={true}>
                {body}...
                {' '}
                <Link variant='body1' component={RouterLink} to={`/ideas/${_id}`}>(more)</Link>
              </Typography>
              <IdeasPageBodyIdeaButtons likes={likes.length} comments={comments.length} id={_id}/>
            </Grid>
          </Grid>
        </Card>
      </Box>
      {dividerBottom ? <Divider/> : null}
    </Fragment>
  );
};

export default IdeasPageBodyIdea;