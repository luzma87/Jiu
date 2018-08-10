import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from '@material-ui/core/styles';
import TableRow from '@material-ui/core/TableRow';
import constants from '../../util/constants';
import CustomTableCell from '../customTable/CustomTableCell';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import IconButton from '@material-ui/core/IconButton/IconButton';

class PaymentRow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
    };
  }

  handleClick() {
    this.setState({ isEditing: true });
  }

  handleBlur() {
    this.setState({ isEditing: false });
  }

  render() {
    const { payment, handleChange } = this.props;
    const value = this.state.isEditing ?
                  payment.amountPayed || '' :
                  constants.formatMoney(payment.amountPayed);
    const className = payment.amountPayed >= payment.amountDue ? 'paid' : 'unpaid';
    return (
      <TableRow
        hover
        role="checkbox"
        key={payment.id}
        tabIndex={-1}
        className={className}
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
          <input
            type="text"
            value={value}
            onChange={(event) => handleChange(payment.id, event.target.value)}
            onClick={this.handleClick.bind(this)}
            onBlur={this.handleBlur.bind(this)}
          />
        </CustomTableCell>
        <CustomTableCell>{constants.formatDate(payment.date)}</CustomTableCell>
        <CustomTableCell>
          <IconButton
            onClick={() => this.props.saveButtonClick(payment.id)}
            variant="contained"
            color="secondary"
            size="small"
          >
            <FontAwesomeIcon icon={['far', 'save']} />
          </IconButton>
        </CustomTableCell>
      </TableRow>
    );
  }
}

PaymentRow.propTypes = {
  payment: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  saveButtonClick: PropTypes.func.isRequired,
};

export default withTheme()(PaymentRow);
