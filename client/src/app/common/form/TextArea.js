import React from 'react';
import TextField from '@material-ui/core/TextField';

const TextArea = ({ input, rows, label, multiline, fullWidth, placeholder, meta: { touched, error } }) => {
  return (
    <TextField
      error={touched && !!error}
      helperText={error}
      {...input}
      placeholder={placeholder}
      rows={rows}
      fullWidth={fullWidth}
      multiline={multiline}
      label={label}
    >
    </TextField>
  );
};

export default TextArea;