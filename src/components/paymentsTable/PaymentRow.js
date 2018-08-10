import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from '@material-ui/core/styles';
import TableRow from '@material-ui/core/TableRow';
import constants from '../../util/constants';
import CustomTableCell from '../customTable/CustomTableCell';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import IconButton from "@material-ui/core/IconButton/IconButton";

class PaymentRow extends React.Component {
  render() {
    const { payment, handleChange } = this.props;
    return (
      <TableRow
        hover
        role="checkbox"
        key={payment.id}
        tabIndex={-1}
      >
        <CustomTableCell
          component="th"
          scope="row"
        >
          {payment.student}
        </CustomTableCell>
        <CustomTableCell>{payment.methodOfPayment}</CustomTableCell>
        <CustomTableCell>{payment.plan}</CustomTableCell>
        <CustomTableCell numeric>{constants.formatMoney(payment.amountDue)}</CustomTableCell>
        <CustomTableCell>
          <input type="text" value={payment.amountPayed || ''} onChange={(event) => handleChange(payment.id, event.target.value)}/>
        </CustomTableCell>
        <CustomTableCell>{constants.formatDate(payment.date)}</CustomTableCell>
        <CustomTableCell>
          <IconButton onClick={() => this.onGenerateClick()} variant="contained"  color="secondary" size="small">
            <FontAwesomeIcon  icon={['far', 'money-bill-alt']}  />
          </IconButton>
        </CustomTableCell>
      </TableRow>
    );
  }
}

PaymentRow.propTypes = {
  payment: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default withTheme()(PaymentRow);
