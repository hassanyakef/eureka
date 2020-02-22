import React from 'react';
import TextField from '@material-ui/core/TextField';

const TextArea = ({ input, rows, placeholder, meta: { touched, error } }) => {
  return (
    <TextField error={touched && !!error} helperText={error}>
      <textarea {...input} placeholder={placeholder} rows={rows}/>}
    </TextField>
  );
};

export default TextArea;