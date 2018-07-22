import React from 'react';
import { withTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';
import studentClient from '../../rest/StudentClient';
import TableHeader from './TableHeader';
import TableToolbar from './TableToolbar';
import StudentRow from './StudentRow';

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

    return (
      <Paper
        style={{
          width: '100%',
        }}
      >
        <TableToolbar
          numSelected={selected.length}
          onFilterClick={() => {}}
          onDeactivateClick={() => {
            studentClient.deactivate(selected).then(() => {
              location.reload();
            });
          }}
          onActivateClick={() => {
            studentClient.activate(selected).then(() => {
              location.reload();
            });
          }}
          onEditClick={() => {
            if (selected.length === 1) {
              location.href = `/studentForm/${selected[0]}`;
            }
          }}
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
              return (<StudentRow
                key={student.id}
                student={student}
                isSelected={isSelected}
                handleClick={(id) => this.handleClick(id)}
              />);
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
          onChangePage={(event, page) => this.handleChangePage(event, page)}
          onChangeRowsPerPage={(event) => this.handleChangeRowsPerPage(event)}
        />
      </Paper>
    );
  }
}

export default withTheme()(StudentsTable);
