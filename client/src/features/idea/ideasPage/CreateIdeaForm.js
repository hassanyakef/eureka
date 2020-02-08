import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContentText from '@material-ui/core/DialogContentText';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const styles = makeStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  textField: {
    marginRight: theme.spacing(2),
  },
}));

const DialogTitle = ({theme, ...props}) => {
  const classes = styles(theme);

  const { children, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
};

const appTypes = [
  {
    value: 'ios',
    label: 'IOS',
  },
  {
    value: 'android',
    label: 'Android',
  },
  {
    value: 'webapp',
    label: 'Web App',
  },
  {
    value: 'desktopapp',
    label: 'Desktop App',
  },
];

const visibilities = [
  {
    value: 'public',
    label: 'Public',
  },
  {
    value: 'private',
    label: 'Private',
  },
];

const CreateIdeaForm = ({handleClose, open, theme}) => {

  const classes = styles(theme);

  const [appType, setAppType] = useState('ios');
  const [visibility, setVisibility] = useState('private');

  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title" onClose={handleClose}>Idea Form</DialogTitle>
        <DialogContent>
          <DialogContentText>
            What kind of app do you wish to be made?
          </DialogContentText>
          <TextField
            required
            autoFocus
            margin="dense"
            id="name"
            label="App idea Suggestion"
            placeholder="What kind of app do you need?"
            className={classes.textField}
          />
          <TextField
            required
            id="standard-select-currency"
            select
            label="Platform"
            margin="dense"
            value={appType}
            onChange={(event) => setAppType(event.target.value)}
            style={{minWidth: 100}}
            className={classes.textField}

          >
            {appTypes.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            required
            id="standard-select-currency"
            select
            label="Visibility"
            margin="dense"
            value={visibility}
            onChange={(event) => setVisibility(event.target.value)}
            style={{minWidth: 100}}
          >
            {visibilities.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            required
            label="Enter more details..."
            multiline
            rows="4"
            placeholder="State your problem and potential features for the app"
            fullWidth

          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Post Idea
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CreateIdeaForm;