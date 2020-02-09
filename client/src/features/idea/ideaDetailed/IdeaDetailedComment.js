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

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  card: {
    padding: theme.spacing(5),
    marginBottom: theme.spacing(2)
  },
  icon: {
    marginBottom: '-4px',
    marginRight: '4px'
  },
  iconText: {
    marginRight: theme.spacing(2)
  }

}));

const IdeaDetailedComment = ({ theme }) => {
  const classes = useStyles(theme);
  return (
      <Card className={classes.card}>
        <Box mb={2}>
          <Chip
            avatar={  <Avatar className={classes.profile} alt="Remy Sharp"
                              src="http://swipemarket.com/wp-content/uploads/2014/06/Untitled-6.jpg"/>}
            label="John Doe"
            clickable
            color="primary"
            component={RouterLink}
            to='/users/1'
          />

        </Box>
        <Typography variant='body1' paragraph={true}>Post your app ideas and choose for them to be seen by the world or completely private.</Typography>

        <Typography className={classes.iconText} variant="body2" style={{color: '#757575'}} paragraph={true} display='inline'>
          Posted Mar 28, 2019
        </Typography>
        <Typography variant="body2" display="inline" className={classes.iconText} gutterBottom={true}>
          <Link href='#' color="secondary">
            <FavoriteIcon color="action" className={classes.icon} fontSize='small'/>
            15
          </Link>
        </Typography>

      </Card>
  )
};

export default IdeaDetailedComment;