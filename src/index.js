import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/App/App';
import StudentForm from './components/App/StudentForm';

require("./css/main.css");

import { BrowserRouter as Router, Route } from 'react-router-dom';
ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={App}/>
      <Route path="/studentForm" component={StudentForm}/>
    </div>
  </Router>,
  document.getElementById('root')
);
