import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import {
  faCaretLeft,
  faCaretRight,
  faFilter,
  faUserPlus,
  faCoins,
  faPencilAlt,
  faToggleOn,
  faToggleOff,
  faSave,
  faCalendarAlt,
} from '@fortawesome/pro-regular-svg-icons';
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';
import MomentUtils from 'material-ui-pickers/utils/moment-utils';
import TopBar from './components/TopBar';
import App from './components/App';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';
import GlobalProvider from './context/GlobalProvider';
import theme from './util/appTheme';

require('./css/main.css');

import { MuiThemeProvider } from '@material-ui/core/styles';

library.add(
  faUsers,
  faFilter,
  faToggleOn,
  faToggleOff,
  faPencilAlt,
  faCoins,
  faUserPlus,
  faCaretLeft,
  faCaretRight,
  faSave,
  faCalendarAlt,
);

ReactDOM.render(
  <Router>
    <MuiThemeProvider theme={theme}>
      <MuiPickersUtilsProvider utils={MomentUtils}>
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
      </MuiPickersUtilsProvider>
    </MuiThemeProvider>
  </Router>,
  document.getElementById('root'),
);
