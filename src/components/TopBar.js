import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
            to="/students"
            color="inherit"
          >
            <FontAwesomeIcon
              icon={['fas', 'users']}
              className="leftIcon"
            />
            Estudiantes
          </Button>
          <Button
            component={Link}
            to="/payments"
            color="inherit"
          >
            <FontAwesomeIcon
              icon={['far', 'money-bill-alt']}
              className="leftIcon"
            />
            Pagos
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
