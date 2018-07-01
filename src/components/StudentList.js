import * as React from 'react';
import Student from './../models/Student';
import { withTheme } from '@material-ui/core/styles';
import StudentsTable from './studentsTable/StudentsTable';

class StudentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { student: new Student() };
  }

  render() {
    return (
      <div className="container">
        <StudentsTable />
      </div>
    );
  }
}

export default withTheme()(StudentList);
