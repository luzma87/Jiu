import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

export default ({ label, id, student, onChange, adornment = null }) => {
  const endAdornment = adornment === null ?
                       null :
                       <InputAdornment position="end">{adornment}</InputAdornment>;
  return (
    <TextField
      InputProps={{
        endAdornment,
      }}
      id={id}
      name={id}
      label={label}
      value={student.getValue(id)}
      error={student.hasError(id)}
      helperText={student.getError(id)}
      margin="normal"
      className="full"
      onChange={(event) => onChange(id, event.target.value)}
    />
  );
}
