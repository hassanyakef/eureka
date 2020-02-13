import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link'
import { Link as RouterLink } from 'react-router-dom';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ShareIcon from '@material-ui/icons/Share';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import { Box } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  icon: {
    marginBottom: '-4px',
    marginRight: '4px'
  },
}));

const IdeasPageBodyIdeaButtons = ({theme}) => {
  const classes = useStyles(theme);

  return (
    <Box mb={1} mt={1.5}>
      <Box mr={2.5} component={'span'}>
        <Typography variant="body2" display="inline" gutterBottom={true}>
          <Link href='#' color="secondary">
            <ThumbUpOutlinedIcon color="action" className={classes.icon} fontSize='small'/>
            15
          </Link>
        </Typography>
      </Box>
      <Box mr={2.5} component={'span'}>
        <Typography variant="body2" display="inline" gutterBottom={true}>
          <Link href="#" color="secondary">
            <ShareIcon color="action" className={classes.icon} fontSize='small'/>
            6
          </Link>
        </Typography>
      </Box>
      <Box mr={2.5} component={'span'}>
        <Typography variant="body2" display="inline" gutterBottom={true}>
          <Link component={RouterLink} to='/ideas/1' color="secondary">
            <ChatBubbleOutlineIcon color="action" className={classes.icon} fontSize='small'/>
            8
          </Link>
        </Typography>
      </Box>
    </Box>

  );
};

export default IdeasPageBodyIdeaButtons;