import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Group from '@material-ui/icons/Group';
import MyContext from '../context/MyContext';

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
            <Group className="leftIcon" />
            Estudiantes
          </Button>

          <MyContext.Consumer>
            {(context) => (
              <React.Fragment>
                <Typography
                  variant="title"
                  color="inherit"
                >
                  {context.state.name} [{context.state.age}]
                </Typography>
                <Button
                  onClick={() => context.growAYearOlder()}
                  color="inherit"
                >
                  🎂
                </Button>
              </React.Fragment>
            )}
          </MyContext.Consumer>

        </Toolbar>
      </AppBar>
    </div>
  );
}

TopBar.propTypes = {
  theme: PropTypes.object.isRequired,
};

export default withTheme()(TopBar);
