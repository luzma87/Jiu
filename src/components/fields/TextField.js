import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

export default ({ label, id, domainObject, onChange, adornment = null, value = null, hasError = null, helperText = null }) => {
  const endAdornment = adornment === null ?
                       null :
                       <InputAdornment position="end">{adornment}</InputAdornment>;
  const fieldValue = domainObject ? domainObject.getValue(id) : value;
  const fieldHasError = domainObject ? domainObject.hasError(id) : hasError;
  const fieldHelperText = domainObject ? domainObject.getError(id) : helperText;
  return (
    <TextField
      InputProps={{
        endAdornment,
      }}
      id={id}
      name={id}
      label={label}
      value={fieldValue}
      error={fieldHasError}
      helperText={fieldHelperText}
      margin="normal"
      className="full"
      onChange={(event) => onChange(id, event.target.value)}
    />
  );
}
