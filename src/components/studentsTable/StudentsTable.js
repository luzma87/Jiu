import React from 'react';
import moment from 'moment';
import { withTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import studentClient from '../../rest/StudentClient';
import constants from '../../util/constants';
import CustomTableCell from './CustomTableCell';
import TableHeader from './TableHeader';
import TableToolbar from './TableToolbar';

const formatDate = (date) => {
  if (date === null) {
    return '';
  }
  return moment(date, 'YYYY-MM-DD').format(constants.dateFormat);
};

class StudentsTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headers: [
        { id: 'firstName', label: 'Nombre', minWidth: 71 },
        { id: 'registrationDate', label: 'Registro', width: 71 },
        { id: 'enrollmentDate', label: 'Enrolamiento', width: 71 },
        { id: 'rank', label: 'Rango', width: 40 },
        { id: 'methodOfPayment', label: 'Forma pago', width: 89 },
        { id: 'isActive', label: 'Activo', width: 40 },
      ],
      students: [],
      selected: [],
      order: 'asc',
      orderBy: 'firstName',
      page: 0,
      rowsPerPage: 10,
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

  isSelected(id) {
    return this.state.selected.indexOf(id) !== -1;
  }

  handleClick(id) {
    const { selected } = this.state;
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    this.setState({ selected: newSelected });
  }

  handleChangePage(event, page) {
    this.setState({ page });
  };

  handleChangeRowsPerPage(event) {
    this.setState({ rowsPerPage: event.target.value });
  };

  getSorting() {
    const { order, orderBy } = this.state;

    return order === 'desc'
           ? (a, b) => (b[orderBy] < a[orderBy] ? -1 : 1)
           : (a, b) => (a[orderBy] < b[orderBy] ? -1 : 1);
  }

  getSlicedSortedList() {
    const { students, rowsPerPage, page } = this.state;
    return students
      .sort(this.getSorting())
      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
  }

  render() {
    const { students, headers, selected, order, orderBy, rowsPerPage, page } = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, students.length - page * rowsPerPage);
    const { theme } = this.props;

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
          onAddClick={() => {}}
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
            {this.getSlicedSortedList().map(student => {
              const isSelected = this.isSelected(student.id);
              return (
                <TableRow
                  hover
                  role="checkbox"
                  key={student.id}
                  aria-checked={isSelected}
                  tabIndex={-1}
                  selected={isSelected}
                  onClick={() => this.handleClick(student.id)}
                >
                  <TableCell style={{ padding: 0 }}>
                    <Checkbox checked={isSelected} />
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
                  <CustomTableCell>
                    {student.isActive ?
                     <FontAwesomeIcon
                       icon="toggle-on"
                       style={{ color: theme.palette.primary.main }}
                     /> :
                     <FontAwesomeIcon
                       icon="toggle-off"
                       style={{ color: theme.palette.secondary.main }}
                     />}
                  </CustomTableCell>
                </TableRow>
              );
            })}
            {emptyRows > 0 && (
              <TableRow style={{ height: 49 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
        <TablePagination
          component="div"
          count={students.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            'aria-label': 'Previous Page',
          }}
          nextIconButtonProps={{
            'aria-label': 'Next Page',
          }}
          onChangePage={(event, page) => this.handleChangePage(event, page)}
          onChangeRowsPerPage={(event) => this.handleChangeRowsPerPage(event)}
        />
      </Paper>
    );
  }
}

export default withTheme()(StudentsTable);
