import React from 'react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link'
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import IdeasPageBodyIdeaButtons from './IdeasPageBodyIdeaButtons';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  profile: {
    width: theme.spacing(6),
    height: theme.spacing(6)
  },
  container: {
    marginTop: theme.spacing(5)
  },
  card: {
    padding: theme.spacing(3),
    marginBot: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
  follower: {
    marginRight: theme.spacing(2)
  },
  socialStat: {
    marginTop: theme.spacing(1),
  },
  icon: {
    marginBottom: '-3px'
  },
  ideaLink: {
    color: '#64b5f6',
    "&:hover": {
      color: '#2196f3'
    }
  },

}));

const IdeasPageBodyIdea = ({theme}) => {
  const classes = useStyles(theme);

  return (
    <Card className={classes.card} variant="outlined" >
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Link variant='h6' color="secondary" component={RouterLink} to='/ideas/1'> An app to share ideas</Link>
        </Grid>
        <Grid item sm={2.5}>
          <Box mt={0.5}>
            <Link component={RouterLink} to='/users/1'>
              <Avatar alt="Remy Sharp"
                      src="http://swipemarket.com/wp-content/uploads/2014/06/Untitled-6.jpg"/>
            </Link>
          </Box>

        </Grid>
        <Grid item sm={6}>
          <Box mt={0.5}>
            <Link variant='body2' color="secondary" component={RouterLink} to='/users/1'>John Doe</Link>
          </Box>
          <Box mt={0.5}>
            <Typography variant="body2" style={{color: '#757575'}}>
                Written Mar 21, 2019
            </Typography>
          </Box>
        </Grid>
        <Grid item md={12}>
          <Typography variant="body1" paragraph={true}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto blanditiis dolorem error facere incidunt, ipsam repellat. Aliquam consequatur dignissimos distinctio fuga ipsa, odio omnis pariatur quidem, quisquam quod rem suscipit...
            {' '}
            <Link variant='body1' component={RouterLink} to='/ideas/1'>(more)</Link>
          </Typography>
          <IdeasPageBodyIdeaButtons/>
        </Grid>
      </Grid>
    </Card>
  );
};

export default IdeasPageBodyIdea;