import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faUsers,
  faFilter,
  faTrash,
  faPencilAlt,
  faToggleOn,
  faToggleOff,
  faCoins,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons';
import TopBar from './components/TopBar';
import App from './components/App';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';
import GlobalProvider from './context/GlobalProvider';
import theme from './util/appTheme';

require('./css/main.css');

import { MuiThemeProvider } from '@material-ui/core/styles';

library.add(faUsers, faFilter, faTrash, faToggleOn, faToggleOff, faPencilAlt, faCoins, faUserPlus);

ReactDOM.render(
  <Router>
    <MuiThemeProvider theme={theme}>
      <GlobalProvider>
        <TopBar />
        <Route
          exact
          path="/"
          component={App}
        />
        <Route
          path="/studentForm"
          component={StudentForm}
        />
        <Route
          path="/students"
          component={StudentList}
        />
      </GlobalProvider>
    </MuiThemeProvider>
  </Router>,
  document.getElementById('root'),
);
