import React from 'react';
import TextField from '@material-ui/core/TextField';

const TextInput = ({ input, width, fullWidth, type, label, meta: { touched, error } }) => {
  return (
    <TextField
      error={touched && !!error}
      helperText={touched && error}
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