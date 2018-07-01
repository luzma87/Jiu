import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from '@material-ui/core/styles';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee);

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
