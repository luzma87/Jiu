import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import constants from '../../util/constants';
import CustomTableCell from '../customTable/CustomTableCell';

class PaymentRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { payment, isSelected, theme, handleClick } = this.props;
    return (
      <TableRow
        hover
        role="checkbox"
        key={payment.id}
        tabIndex={-1}
        selected={isSelected}
        onClick={() => handleClick(payment.id)}
      >
        <TableCell style={{ padding: 0 }}>
          <Checkbox checked={isSelected} />
        </TableCell>
        <CustomTableCell
          component="th"
          scope="row"
        >
          {payment.student}
        </CustomTableCell>
        <CustomTableCell>{payment.methodOfPayment}</CustomTableCell>
        <CustomTableCell>{payment.plan}</CustomTableCell>
        <CustomTableCell>{constants.formatMoney(payment.amountDue)}</CustomTableCell>
        <CustomTableCell>{constants.formatMoney(payment.amountPayed)}</CustomTableCell>
        <CustomTableCell>{constants.formatDate(payment.date)}</CustomTableCell>
      </TableRow>
    );
  }
}

PaymentRow.propTypes = {
  payment: PropTypes.object.isRequired,
  isSelected: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default withTheme()(PaymentRow);
