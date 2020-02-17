import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
import IdeasPageBodyIdeaButtons from '../idea/ideasPage/IdeasPageBodyIdeaButtons';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  profile: {
    width: theme.spacing(10),
    height: theme.spacing(10)
  },
  card: {
    padding: theme.spacing(3),
    margin: theme.spacing(2, 1),
    border: '1px solid rgba(0, 0, 0, 0.12)',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(3),
      margin: theme.spacing(2, 0),
    }
  },
  deleteButton: {
    color: '#f44336',
    borderColor: '#f44336',
    '&:hover': {
      backgroundColor: '#ffebee'
    }
  }
}));

const DashboardIdeaCard = ({ theme }) => {
  const classes = useStyles(theme);

  return (
    <Fragment>
      <Grid item lg={4} md={6} sm={12} xl={3}>
        <Card className={classes.card} elevation={0}>
          <Grid container className={classes.root} spacing={2}>
            <Grid item md={12}>
              <Link variant='h5' color="secondary" component={RouterLink}
                    to='/ideas/1'> An app to share ideas</Link>
              <Box mt={0.5} mb={1}>
                <Typography variant="body2" style={{ color: '#757575' }}>
                  Written Mar 21, 2019
                </Typography>
              </Box>
              <Typography variant="body1" paragraph={true}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
                blanditiis dolorem error facere incidunt, ipsam repellat. Aliquam
                consequatur dignissimos distinctio fuga ipsa, odio omnis pariatur quidem,
                quisquam quod rem suscipit...
                {' '}
                <Link variant='body1' component={RouterLink} to='/ideas/1'>(more)</Link>
              </Typography>
              <Box mb={2}>
                <IdeasPageBodyIdeaButtons/>
              </Box>
              <Box my={2}>
                <ButtonGroup aria-label="button group">
                  <Button size='small' color='primary'
                          component={RouterLink}
                          to='/ideas/edit/1'
                          startIcon={<EditIcon/>}>
                    Edit
                  </Button>
                  <Button size='small' className={classes.deleteButton} startIcon={<DeleteIcon/>}>Delete</Button>
                </ButtonGroup>
              </Box>

            </Grid>
          </Grid>
        </Card>
      </Grid>

    </Fragment>
  );
};

export default DashboardIdeaCard;