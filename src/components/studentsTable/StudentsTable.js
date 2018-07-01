import React from 'react';
import moment from 'moment';
import { withStyles, withTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import studentClient from '../../rest/StudentClient';
import constants from '../../util/constants';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const formatDate = (date) => {
  if (date === null) {
    return '';
  }
  return moment(date).format(constants.dateFormat);
};

class StudentsTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { students: [] };

    studentClient.getAllStudents().then((response) => {
      this.setState({ students: response.data });
    });
  }

  render() {
    return (
      <Paper
        style={{
          width: '100%',
        }}
      >
        <Table style={{ width: '100%' }}>
          <TableHead>
            <TableRow>
              <CustomTableCell />
              <CustomTableCell>Nombre</CustomTableCell>
              <CustomTableCell>Registro</CustomTableCell>
              <CustomTableCell>Enrolamiento</CustomTableCell>
              <CustomTableCell>Rango</CustomTableCell>
              <CustomTableCell>Forma de pago</CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.students.map((student, index) => {
              return (
                <TableRow key={student.id}>
                  <CustomTableCell numeric>{index + 1}</CustomTableCell>
                  <CustomTableCell
                    component="th"
                    scope="row"
                  >
                    {student.firstName} {student.lastName}
                  </CustomTableCell>
                  <CustomTableCell>{formatDate(student.registrationDate)}</CustomTableCell>
                  <CustomTableCell>{formatDate(student.enrollmentDate)}</CustomTableCell>
                  <CustomTableCell>{student.rank.description}</CustomTableCell>
                  <CustomTableCell>{student.methodOfPayment.description}</CustomTableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withTheme()(StudentsTable);
