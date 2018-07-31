import React from 'react';
import { withTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';
import studentClient from '../../rest/StudentClient';
import StudentRow from './StudentRow';
import StudentsFilters from './StudentsFilters';
import StudentsToolbar from './StudentsToolbar';
import TableHeader from '../customTable/TableHeader';

const filterActiveOnly = (students) => {
  return students.filter((student) => {
    return student.isActive === true;
  });
};

const filterEnrolledOnly = (students) => {
  return students.filter((student) => {
    return student.enrollmentDate !== null;
  });
};

const getDefaultFilteredStudents = (students) => {
  return filterActiveOnly(students);
};

const getSorting = (order, orderBy) => {
  return order === 'desc'
         ? (a, b) => (b[orderBy] < a[orderBy] ? -1 : 1)
         : (a, b) => (a[orderBy] < b[orderBy] ? -1 : 1);
};

const getSlicedSortedList = (students, rowsPerPage, page, order, orderBy) => {
  return students
    .sort(getSorting(order, orderBy))
    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
};

class StudentsTable extends React.Component {
  constructor(props) {
    super(props);
    const page = 0;
    const rowsPerPage = 10;
    const order = 'asc';
    const orderBy = 'firstName';
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
      filteredStudents: [],
      shownStudents: [],
      selected: [],
      order,
      orderBy,
      page,
      rowsPerPage,
      filtersVisible: false,
    };

    studentClient.getAllStudents().then((response) => {
      let filteredStudents = getDefaultFilteredStudents(response.data);
      this.setState({
        students: response.data,
        filteredStudents: filteredStudents,
        shownStudents: getSlicedSortedList(filteredStudents, rowsPerPage, page, order, orderBy),
      });
    });
  }

  toggleOrder() {
    if (this.state.order === 'asc') {
      return 'desc';
    }
    return 'asc';
  }

  handleSort(column) {
    const { page, rowsPerPage, filteredStudents, order, orderBy } = this.state;
    const currentSort = this.state.orderBy;
    let newOrder = order, newOrderBy = orderBy;
    if (currentSort === column) {
      newOrder = this.toggleOrder();
    } else {
      newOrder = 'asc';
      newOrderBy = column;
    }
    const shownStudents = getSlicedSortedList(filteredStudents, rowsPerPage, page, order, orderBy);
    this.setState({
      order: newOrder,
      orderBy: newOrderBy,
      shownStudents,
    });
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
    const { rowsPerPage, filteredStudents, order, orderBy } = this.state;
    const shownStudents = getSlicedSortedList(filteredStudents, rowsPerPage, page, order, orderBy);
    this.setState({ page, shownStudents });
  };

  handleChangeRowsPerPage(event) {
    const rowsPerPage = event.target.value;
    const { page, filteredStudents, order, orderBy } = this.state;
    const shownStudents = getSlicedSortedList(filteredStudents, rowsPerPage, page, order, orderBy);
    this.setState({ rowsPerPage, shownStudents });
  };

  handleFilter(params) {
    const { students, page, rowsPerPage, order, orderBy } = this.state;
    let newFilteredStudents = students;

    if (!params.showInactive) {
      newFilteredStudents = filterActiveOnly(newFilteredStudents);
    }
    if (!params.showNonEnrolled) {
      newFilteredStudents = filterEnrolledOnly(newFilteredStudents);
    }
    const shownStudents = getSlicedSortedList(newFilteredStudents, rowsPerPage, page, order,
      orderBy);
    this.setState({
      filtersVisible: false,
      filteredStudents: newFilteredStudents,
      shownStudents,
    });
  }

  render() {
    const {
      students, filteredStudents, shownStudents,
      headers, selected, order, orderBy, rowsPerPage,
      page, filtersVisible,
    } = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, students.length - page * rowsPerPage);

    return (
      <Paper
        style={{
          width: '100%',
        }}
      >

        <StudentsFilters
          onClose={() => this.setState({ filtersVisible: false })}
          onSave={(params) => this.handleFilter(params)}
          open={filtersVisible}
        />

        <StudentsToolbar
          title={`${filteredStudents.length} estudiantes`}
          numSelected={selected.length}
          onFilterClick={() => this.setState({ filtersVisible: true })}
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
            {shownStudents.map(student => {
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
          count={filteredStudents.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={(event, page) => this.handleChangePage(event, page)}
          onChangeRowsPerPage={(event) => this.handleChangeRowsPerPage(event)}
        />
      </Paper>
    );
  }
}

StudentsTable.propTypes = {};

export default withTheme()(StudentsTable);
