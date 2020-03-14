import React, { Fragment } from 'react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  profile: {
    width: theme.spacing(5),
    height: theme.spacing(5)
  },
  card: {
    padding: theme.spacing(3)
  },
  ideaLink: {
    color: '#64b5f6',
    '&:hover': {
      color: '#2196f3'
    }
  }
}));

const IdeasPageHeader = ({ theme, user }) => {

  const classes = useStyles(theme);
  const { name, avatar, _id } = user;

  return (
    <Fragment>
      <Card className={classes.card}>
        <Grid container className={classes.root} spacing={2}>
          <Grid item sm={2.5}>
            <Link component={RouterLink} to={`/users/${_id}`}>
              <Avatar className={classes.profile} alt={name}
                      src={avatar}/>
            </Link>

          </Grid>
          <Grid item sm={8}>
            <Box component='span' mt={0.5}>
              <Link variant="h5" style={{ color: '#757575' }} component={RouterLink}
                    to={`/users/${_id}`}>{name}</Link>
            </Box>

          </Grid>
          <Grid item md={12}>
            <Link variant="h5" component={RouterLink} to='/ideas/add'
                  className={classes.ideaLink}>
              What is your idea?
            </Link>
          </Grid>
        </Grid>
      </Card>
    </Fragment>

  );
};

export default IdeasPageHeader;