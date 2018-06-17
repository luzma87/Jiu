import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import React from 'react';

export default ({label, id, value, onChange, options}) => {
  return (
    <FormControl className="full" margin="normal">
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <Select
        value={value}
        onChange={onChange}
        inputProps={{ name: id, id: id}}
      >
        {
          Object.keys(options).map((key) => {
            return <MenuItem key={key} value={key}>{options[key]}</MenuItem>
          })
        }
      </Select>
    </FormControl>
  )
}
