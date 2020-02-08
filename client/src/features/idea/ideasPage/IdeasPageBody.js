import React from 'react';
import IdeasPageBodyIdea from './IdeasPageBodyIdea';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  root: {

  },
}));

const IdeasPageBody = ({theme}) => {
  const classes = useStyles(theme);

  return (
    <div className={classes.root}>
      <IdeasPageBodyIdea/>
      <IdeasPageBodyIdea/>
      <IdeasPageBodyIdea/>
      <IdeasPageBodyIdea/>
    </div>
  );
};

export default IdeasPageBody;