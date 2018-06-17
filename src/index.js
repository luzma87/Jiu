import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TopBar from './components/TopBar';
import App from './components/App';
import StudentForm from './components/StudentForm';

import theme from './util/appTheme';

require('./css/main.css');

import { MuiThemeProvider } from '@material-ui/core/styles';

ReactDOM.render(
  <Router>
    <MuiThemeProvider theme={theme}>
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
    </MuiThemeProvider>
  </Router>,
  document.getElementById('root'),
);
