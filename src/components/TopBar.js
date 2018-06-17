import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

function TopBar(props) {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit" >
            Gracie Jiu-Jitsu Quito
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

TopBar.propTypes = {
  theme: PropTypes.object.isRequired,
};

export default withTheme()(TopBar);
