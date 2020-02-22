import React from 'react';
import TextField from '@material-ui/core/TextField';

const TextInput = ({ input, width, fullWidth, type, label, meta: { touched, error, warning } }) => {
  return (
    <TextField
      error={touched && !!error || !!warning}
      helperText={touched && error || warning}
      {...input}
      label={label}
      fullWidth={fullWidth}
      width={width}
      type={type}
    >
    </TextField>
  );
};

export default TextInput;