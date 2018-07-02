import React from 'react';
import Typography from '@material-ui/core/Typography';

export default ({ label }) => {
  return (
    <Typography
      variant="title"
      className="title"
      color="primary"
    >
      {label}
    </Typography>
  );
}
