import * as React from 'react';
import Student from './../models/Student';
import { Link } from 'react-router-dom';
import { withTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/es/Button/Button';
import PersonAdd from '@material-ui/icons/PersonAdd';
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

        <Button
          component={Link}
          to="/studentForm"
          variant="fab"
          color="secondary"
          className="fixedBottom"
        >
          <PersonAdd />
        </Button>
      </div>
    );
  }
}

export default withTheme()(StudentList);
