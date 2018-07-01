import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from '@material-ui/core/styles';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

library.add(faUsers);

function App(props) {
  return (
    <div>
      HOLA
    </div>
  );
}

App.propTypes = {
  theme: PropTypes.object.isRequired,
};

export default withTheme()(App);
