import React from 'react';
import moment from 'moment';
import { withStyles, withTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import studentClient from '../../rest/StudentClient';
import constants from '../../util/constants';
import CustomTableCell from './CustomTableCell';
import TableHeader from './TableHeader';
import TableToolbar from './TableToolbar';

const formatDate = (date) => {
  if (date === null) {
    return '';
  }
  return moment(date).format(constants.dateFormat);
};

class StudentsTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      headers: [
        { id: 'name', label: 'Nombre', minWidth: 71 },
        { id: 'registrationDate', label: 'Registro', minWidth: 71 },
        { id: 'enrollmentDate', label: 'Enrolamiento', minWidth: 71 },
        { id: 'rank', label: 'Rango', minWidth: 71 },
        { id: 'methodOfPayment', label: 'Forma pago', minWidth: 89 },
      ],
      selected: [],
      order: 'asc',
      orderBy: 'name',
    };

    studentClient.getAllStudents().then((response) => {
      this.setState({ students: response.data });
    });
  }

  toggleOrder() {
    if (this.state.order === 'asc') {
      return 'desc';
    }
    return 'asc';
  }

  handleSort(column) {
    const currentSort = this.state.orderBy;
    if (currentSort === column) {
      this.setState({ order: this.toggleOrder() });
    } else {
      this.setState({
        order: 'asc',
        orderBy: column,
      });
    }
  }

  handleSelectAll(event, checked) {
    if (checked) {
      this.setState(state => ({ selected: state.students.map(n => n.id) }));
      return;
    }
    this.setState({ selected: [] });
  }

  render() {
    const { students, headers, selected, order, orderBy } = this.state;
    return (
      <Paper
        style={{
          width: '100%',
        }}
      >
        <TableToolbar
          numSelected={selected.length}
          onFilterClick={() => {}}
          onDeactivateClick={() => {}}
          onEditClick={() => {}}
          onPaymentClick={() => {}}
        />
        <Table style={{ width: '100%' }}>
          <TableHeader
            columnData={headers}
            numSelected={selected.length}
            onRequestSort={column => this.handleSort(column)}
            onSelectAllClick={(event, checked) => this.handleSelectAll(event, checked)}
            order={order}
            orderBy={orderBy}
            rowCount={students.length}
          />
          <TableBody>
            {students.map((student, index) => {
              return (
                <TableRow key={student.id}>
                  <TableCell>
                    {/*<Checkbox />*/}
                  </TableCell>
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
