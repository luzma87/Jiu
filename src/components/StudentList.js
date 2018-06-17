import * as React from 'react';
import Student from './../models/Student';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/es/Button/Button';
import PersonAdd from '@material-ui/icons/PersonAdd';
import teal from '@material-ui/core/colors/teal';
import EnhancedTable from './studentsTable/EnhancedTable';

const styles = theme => ({
  avatar: {
    backgroundColor: teal[200],
  },
});

class StudentList extends React.Component {

  constructor(props) {
    super(props);
    this.state = { student: new Student() };
  }

  render() {

    return (
      <div className="container gridContainer">

        <EnhancedTable />

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

StudentList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StudentList);
