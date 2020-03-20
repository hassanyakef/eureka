import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { Card, Box } from '@material-ui/core';
import IdeasPageBodyIdea from '../../idea/ideasPage/IdeasPageBodyIdea';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
  card: {
    padding: theme.spacing(3),
  },
  divider: {
    marginTop: theme.spacing(2),
  }
}));

const UserDetailedPageBody = ({ theme, sectionTitle, ideas, name }) => {
  const classes = useStyles(theme);

  return (
    <Fragment>
      <Card className={classes.card}>
        <Typography variant='h5'>
          {sectionTitle}
        </Typography>
        <Box mt={2}>
          <Divider/>
        </Box>
        <List className={classes.root}>
          {ideas.length > 0 ? (
            ideas.map(idea => (
              <IdeasPageBodyIdea key={idea._id} idea={idea} elevateCard={false} marginY={0} dividerBottom={true}/>
              ))
          ) : (
            <Typography variant='body1'>{name} hasn't posted any ideas...</Typography>
          )}
        </List>
      </Card>
    </Fragment>
  );
};

export default UserDetailedPageBody;