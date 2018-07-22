import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from '@material-ui/core/styles';

function App(props) {
  return (
    <div>
      HOLA!
    </div>
  );
}

App.propTypes = {
  theme: PropTypes.object.isRequired,
};

export default withTheme()(App);
