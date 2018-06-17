import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Group from '@material-ui/icons/Group';

function TopBar(props) {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Button
            component={Link}
            to="/"
            color="inherit"
          >
            <Typography
              variant="title"
              color="inherit"
            >
              Gracie Jiu-Jitsu Quito
            </Typography>
          </Button>
          <Button
            component={Link}
            to="/studentForm"
            color="inherit"
          >
            <Group className="leftIcon" />
            Estudiantes
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

TopBar.propTypes = {
  theme: PropTypes.object.isRequired,
};

export default withTheme()(TopBar);
