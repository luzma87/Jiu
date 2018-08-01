import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';
import paymentClient from '../../rest/PaymentClient';
import PaymentsFilters from './PaymentsFilters';
import TableHeader from '../customTable/TableHeader';
import PaymentRow from './PaymentRow';
import PaymentsToolbar from './PaymentsToolbar';

const getDefaultFilteredPayments = (payments) => {
  return payments;
};

const getSorting = (order, orderBy) => {
  return order === 'desc'
         ? (a, b) => (b[orderBy] < a[orderBy] ? -1 : 1)
         : (a, b) => (a[orderBy] < b[orderBy] ? -1 : 1);
};

const getSlicedSortedList = (payments, rowsPerPage, page, order, orderBy) => {
  return payments
    .sort(getSorting(order, orderBy))
    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
};

class PaymentsTable extends React.Component {
  constructor(props) {
    super(props);
    const page = 0;
    const rowsPerPage = 10;
    const order = 'asc';
    const orderBy = 'firstName';
    const { payments } = props;
    let filteredPayments = getDefaultFilteredPayments(payments);
    this.state = {
      headers: [
        { id: 'firstName', label: 'Estudiante', minWidth: 71 },
        { id: 'methodOfPayment', label: 'Forma de pago', width: 71 },
        { id: 'plan', label: 'Plan', width: 71 },
        { id: 'amountDue', label: 'Monto debe', width: 40 },
        { id: 'amountPayed', label: 'Monto pagado', width: 89 },
        { id: 'date', label: 'Fecha Pago', width: 40 },
      ],
      payments: payments,
      filteredPayments,
      shownPayments: getSlicedSortedList(filteredPayments, rowsPerPage, page, order, orderBy),
      selected: [],
      order,
      orderBy,
      page,
      rowsPerPage,
      filtersVisible: false,
    };
  }

  updatePayments(payments) {
    const { page, rowsPerPage, order, orderBy } = this.state;
    let filteredPayments = getDefaultFilteredPayments(payments);
    this.setState({
      payments: payments,
      filteredPayments: filteredPayments,
      shownPayments: getSlicedSortedList(filteredPayments, rowsPerPage, page, order, orderBy),
    });
  }

  componentWillReceiveProps(nextProps) {
    this.updatePayments(nextProps.payments);
  }

  toggleOrder() {
    if (this.state.order === 'asc') {
      return 'desc';
    }
    return 'asc';
  }

  handleSort(column) {
    const { page, rowsPerPage, filteredPayments, order, orderBy } = this.state;
    const currentSort = this.state.orderBy;
    let newOrder = order, newOrderBy = orderBy;
    if (currentSort === column) {
      newOrder = this.toggleOrder();
    } else {
      newOrder = 'asc';
      newOrderBy = column;
    }
    const shownPayments = getSlicedSortedList(filteredPayments, rowsPerPage, page, order, orderBy);
    this.setState({
      order: newOrder,
      orderBy: newOrderBy,
      shownPayments,
    });
  }

  handleSelectAll(event, checked) {
    if (checked) {
      this.setState(state => ({ selected: state.payments.map(n => n.id) }));
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
    const { rowsPerPage, filteredPayments, order, orderBy } = this.state;
    const shownPayments = getSlicedSortedList(filteredPayments, rowsPerPage, page, order, orderBy);
    this.setState({ page, shownPayments });
  };

  handleChangeRowsPerPage(event) {
    const rowsPerPage = event.target.value;
    const { page, filteredPayments, order, orderBy } = this.state;
    const shownPayments = getSlicedSortedList(filteredPayments, rowsPerPage, page, order, orderBy);
    this.setState({ rowsPerPage, shownPayments });
  };

  handleFilter(params) {
    const { payments, page, rowsPerPage, order, orderBy } = this.state;
    let newFilteredPayments = payments;

    const shownPayments = getSlicedSortedList(newFilteredPayments, rowsPerPage, page, order,
      orderBy);
    this.setState({
      filtersVisible: false,
      filteredPayments: newFilteredPayments,
      shownPayments,
    });
  }

  render() {
    const {
      payments, filteredPayments, shownPayments,
      headers, selected, order, orderBy, rowsPerPage,
      page, filtersVisible,
    } = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, payments.length - page * rowsPerPage);

    return (
      <Paper
        style={{
          width: '100%',
        }}
      >

        {/*<PaymentsFilters*/}
        {/*onClose={() => this.setState({ filtersVisible: false })}*/}
        {/*onSave={(params) => this.handleFilter(params)}*/}
        {/*open={filtersVisible}*/}
        {/*/>*/}

        <PaymentsToolbar
          title={`${filteredPayments.length} pagos`}
          numSelected={selected.length}
          onFilterClick={() => this.setState({ filtersVisible: true })}
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
            rowCount={payments.length}
          />
          <TableBody>
            {shownPayments.map(payment => {
              const isSelected = this.isSelected(payment.id);
              return (<PaymentRow
                key={payment.id}
                payment={payment}
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
          count={filteredPayments.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={(event, page) => this.handleChangePage(event, page)}
          onChangeRowsPerPage={(event) => this.handleChangeRowsPerPage(event)}
        />
      </Paper>
    );
  }
}

PaymentsTable.propTypes = {
  payments: PropTypes.array.isRequired,
};

export default withTheme()(PaymentsTable);
