import React from 'react';
import Typography from '@material-ui/core/Typography';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import LinkIcon from '@material-ui/icons/Link';
import TodayIcon from '@material-ui/icons/Today';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

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

const UserDetailedHeaderInfo = ({theme}) => {
  const classes = useStyles(theme);

  return (
    <div className={classes.root}>
      <Typography variant="body2" display="inline" className={classes.iconText} gutterBottom={true}>
        <LocationOnOutlinedIcon color="action" className={classes.icon} fontSize='small'/>
        Blacksburg, VA
      </Typography>
      <Typography variant="body2" display="inline" className={classes.iconText} gutterBottom={true}>
        <Link href="#">
          <LinkIcon color="action" className={classes.icon} fontSize='small'/>
          johndoe.com
        </Link>
      </Typography>
      <Typography variant="body2" display="inline" className={classes.iconText} gutterBottom={true}>
        <TodayIcon color="action" className={classes.icon} fontSize='small'/>
        Joined March 2017
      </Typography>

    </div>
  );
};

export default UserDetailedHeaderInfo;