import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ShareIcon from '@material-ui/icons/Share';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(1.5),
  },
  icon: {
    marginBottom: '-4px',
    marginRight: '4px'
  },
  iconText: {
    marginRight: theme.spacing(2.5)

  }
}));

const UserDetailedBodyInfo = ({theme}) => {
  const classes = useStyles(theme);

  return (
    <div className={classes.root}>
      <Typography variant="body2" display="inline" className={classes.iconText} gutterBottom={true}>
        <Link href="#" color="secondary">
          <ThumbUpOutlinedIcon color="action" className={classes.icon} fontSize='small'/>
          15
        </Link>
      </Typography>
      <Typography variant="body2" display="inline" className={classes.iconText} gutterBottom={true}>
        <Link href="#" color="secondary">
          <ShareIcon color="action" className={classes.icon} fontSize='small'/>
          6
        </Link>
      </Typography>
      <Typography variant="body2" display="inline" className={classes.iconText} gutterBottom={true}>
        <Link href="#" color="secondary">
          <ChatBubbleOutlineIcon color="action" className={classes.icon} fontSize='small'/>
          8
        </Link>
      </Typography>
    </div>
  );
};

export default UserDetailedBodyInfo;