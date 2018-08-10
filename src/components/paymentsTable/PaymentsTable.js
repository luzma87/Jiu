import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';
import TableHeader from './TableHeader';
import PaymentRow from './PaymentRow';
import PaymentsToolbar from './PaymentsToolbar';
import constants from '../../util/constants';

const transformPayment = (payment) => {
  return {
    id: payment.id,
    amountDue: payment.amountDue,
    amountPayed: payment.amountPayed,
    date: payment.date,
    month: payment.month,
    year: payment.year,
    student: `${payment.student.firstName} ${payment.student.lastName}`,
    methodOfPayment: payment.methodOfPayment.description,
    plan: payment.plan.description,
  };
};

const getDefaultFilteredPayments = (payments) => {
  return payments.map(payment => transformPayment(payment));
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
    const orderBy = 'student';
    const { payments } = props;
    let filteredPayments = getDefaultFilteredPayments(payments);
    this.state = {
      headers: [
        { id: 'student', label: 'Estudiante' },
        { id: 'methodOfPayment', label: 'Forma de pago' },
        { id: 'plan', label: 'Plan' },
        { id: 'amountDue', label: 'Monto debe' },
        { id: 'amountPayed', label: 'Monto pagado' },
        { id: 'date', label: 'Fecha de pago' },
        { id: 'button', label: 'Guardar' },
      ],
      payments: payments,
      filteredPayments,
      shownPayments: getSlicedSortedList(filteredPayments, rowsPerPage, page, order, orderBy),
      order,
      orderBy,
      page,
      rowsPerPage,
      filtersVisible: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    const { page, rowsPerPage, order, orderBy } = this.state;
    let filteredPayments = getDefaultFilteredPayments(nextProps.payments);
    this.setState({
      payments: nextProps.payments,
      filteredPayments: filteredPayments,
      shownPayments: getSlicedSortedList(filteredPayments, rowsPerPage, page, order, orderBy),
    });
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
      headers, order, orderBy, rowsPerPage,
      page, filtersVisible,
    } = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, payments.length - page * rowsPerPage);
    const totalPaid = payments.reduce((accumulator, payment) => {
      const value = payment.amountPayed || 0;
      return accumulator * 1 + value * 1;
    }, 0);

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
          title={`${filteredPayments.length} pagos - ${constants.formatMoney(totalPaid)} pagado`}
          numSelected={0}
          onFilterClick={() => this.setState({ filtersVisible: true })}
          onPaymentClick={() => {}}
        />
        <Table style={{ width: '100%' }}>
          <TableHeader
            columnData={headers}
            numSelected={0}
            onRequestSort={column => this.handleSort(column)}
            onSelectAllClick={() => {}}
            order={order}
            orderBy={orderBy}
            rowCount={payments.length}
          />
          <TableBody>
            {shownPayments.map((payment, index) => {
              return (<PaymentRow
                key={payment.id}
                position={index}
                payment={payment}
                handleChange={this.props.handleChange}
                saveButtonClick={this.props.saveButtonClick}
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
  handleChange: PropTypes.func.isRequired,
  saveButtonClick: PropTypes.func.isRequired,
};

export default withTheme()(PaymentsTable);
