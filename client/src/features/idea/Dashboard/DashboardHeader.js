import React, {Fragment} from 'react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import CreateIdeaForm from './CreateIdeaForm';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  profile: {
    width: theme.spacing(5),
    height: theme.spacing(5)
  },
  container: {
    marginTop: theme.spacing(5)
  },
  card: {
    padding: theme.spacing(3)
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
  profileName: {
    marginTop: theme.spacing(0.5)
  },
  ideaLink: {
    color: '#64b5f6',
    "&:hover": {
      color: '#2196f3'
    }
  }
}));

const DashboardHeader = ({theme}) => {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles(theme);

  return (
    <Fragment>
      <Card className={classes.card}>
        <Grid container className={classes.root} spacing={2}>
          <Grid item sm={2.5}>
            <Avatar className={classes.profile} alt="Remy Sharp"
                    src="http://swipemarket.com/wp-content/uploads/2014/06/Untitled-6.jpg"/>

          </Grid>
          <Grid item sm={8}>
            <Typography variant="h5" className={classes.profileName}>
              <Link href="#" style={{color: '#757575'}}>
              John Doe
              </Link>
            </Typography>
          </Grid>
          <Grid item md={12}>
            <Typography variant="h5" >
              <Link href="#" onClick={handleClickOpen} className={classes.ideaLink}>
              What is your idea?
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Card>
      <CreateIdeaForm open={open} handleClose={handleClose}/>
    </Fragment>

  );
};

export default DashboardHeader;