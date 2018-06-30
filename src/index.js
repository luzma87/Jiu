import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TopBar from './components/TopBar';
import App from './components/App';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';
import MyProvider from './context/MyProvider';
import parametersClient from './rest/ParametersClient'

import theme from './util/appTheme';

require('./css/main.css');

import { MuiThemeProvider } from '@material-ui/core/styles';

parametersClient.getMaritalStatus().then(function (response) {
  console.log(response.data);
});

ReactDOM.render(
  <Router>
    <MyProvider>
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
        <Route
          path="/students"
          component={StudentList}
        />
      </MuiThemeProvider>
    </MyProvider>
  </Router>,
  document.getElementById('root'),
);
